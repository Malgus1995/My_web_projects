from bs4 import BeautifulSoup as bs
import requests
from datetime import datetime
import sqlite3 as lite
import datetime

class pretty_parser():
  def __init__(self):
    self.soup = None
    self.s = requests.Session()
    self.count = -1
    self.td_count = -1

  # Login user info
  @staticmethod
  def make_login_info(member_id, memeber_pw):
    LOGIN_INFO = {
      'member_id': member_id,
      'member_pw': memeber_pw
    }
    return LOGIN_INFO

  # Login user info
  @staticmethod
  def make_url_info(notice_url, login_url=""):
    URL_INFO = {
      'notice_url': notice_url,
      'login_url': login_url
    }
    return URL_INFO

  def login(self, url, form=None):
    # Do login
    if url['login_url']:
      page = self.s.get(url['login_url'])
      html = page.text
      self.soup = bs(html, 'html.parser')

      input_id = self.soup.find('input', {'type': 'text'})
      input_pw = self.soup.find('input', {'type': 'password'})

      id_name = input_id['name']
      pw_name = input_pw['name']

      params = dict()
      params[id_name] = form['member_id']
      params[pw_name] = form['member_pw']

      self.s.post(url['login_url'], data=params)

  def get_list_of_title(self, url=""):
    if url:
      page = self.s.get(url['notice_url'])
    else:
      return null
    html = page.text
    soup = bs(html, 'html.parser')

    # remove list, which name is "공지"
    if self.count == -1:
      tr_list = soup.select('table > tbody > tr')
      self.td_count = len(tr_list)
      self.count = 1
      for iter in tr_list:
        if iter.td.text.strip() == "공지":
          self.count += 1

    notices = soup.select('table > tbody > tr:nth-child(n+' + str(self.count) + ') > td')

    # list of tag 'a' -> [[<a>...</a>], [a..] ...]
    list = []
    for i in notices:
      temp = i.find('a')
      if temp:
        list.append(temp)

    parsed_list = []
    for n in list:
      parsed_list.append(n.string.strip())
    return parsed_list

  def get_list_of_url(self, url=""):
    # Get URL of notice page
    if url:
      page = self.s.get(url['notice_url'])
    else:
      return null
    html = page.text
    soup = bs(html, 'html.parser')

    # remove list, which name is "공지"
    if self.count == -1:
      tr_list = soup.select('table > tbody > tr')
      self.td_count = len(tr_list)
      self.count = 1
      for iter in tr_list:
        if iter.td.text.strip() == "공지":
          self.count += 1

    url_list = []
    urls = soup.select('table > tbody > tr:nth-child(n+' + str(self.count) + ') > td')
    self.check_date(urls)
    current_page = url['notice_url']

    for i in urls:
      temp = i.find('a')
      if temp:
        href = temp['href']
        if href[0] == '?':
          url_list.append(current_page + href)
        elif href[0:2] == '/?':
          token = temp.split('?')
          url_list.append(token[0] + href[1:])
        elif href[0:3] == './?':
          token = temp.split('?')
          url_list.append(token[0] + href[2:])
        else:
          url_list.append(temp['href'])

    return url_list

  def check_date(self, list_of_td, length_of_tr = -1):
    if length_of_tr == -1:
      length_of_tr = self.td_count
    cnt = 0
    date_format1 = '%Y/%m/%d'
    date_format2 = '%Y-%m-%d'
    date_format3 = '%Y.%m.%d'

    date_format4 = '%y/%m/%d'
    date_format5 = '%y-%m-%d'
    date_format6 = '%y.%m.%d'

    for i in list_of_td:
      is_1, is_2, is_3 = True, True, True
      is_4, is_5, is_6 = True, True, True
      if i:
        temp = i.text.strip()
        if len(temp) >= 6 and len(temp) <= 10:
          try:
            input_date = datetime.datetime.strptime(temp, date_format1)
          except ValueError:
            is_1 = False
          try:
            input_date = datetime.datetime.strptime(temp, date_format2)
          except ValueError:
            is_2 = False
          try:
            input_date = datetime.datetime.strptime(temp, date_format3)
          except ValueError:
            is_3 = False
          try:
            input_date = datetime.datetime.strptime(temp, date_format4)
          except ValueError:
            is_4 = False
          try:
            input_date = datetime.datetime.strptime(temp, date_format5)
          except ValueError:
            is_5 = False
          try:
            input_date = datetime.datetime.strptime(temp, date_format6)
          except ValueError:
            is_6 = False

          if is_1 or is_2 or is_3 or is_4 or is_5 or is_6:
            print(temp)
  ##### Site Session
  ##### param: form = login information(id, password)
  ##### param: url = (Notice url, login url)
  ##### :parsed_list = list of title
  ##### :url_list = list of url
  def main_activity(self, url, form=None):
    self.login(url, form)

    url_list = self.get_list_of_url(url)
    parsed_list = self.get_list_of_title(url)

    return parsed_list, url_list

  #pl = List: titles of Notice
  #cn = List: URLs of Notice
  def insert_db(self, pl, cn, userid):
    today = datetime.date.today()

    # DATABASE
    conn = lite.connect('foo.db')
    print("open database successfully")
    cs = conn.cursor()
    # CREATE TABLE
    cs.execute(
      'CREATE TABLE IF NOT EXISTS crawling (id INTEGER PRIMARY_KEY AUTO_INCREMENT NOT_NULL, title VARCHAR(255), content TEXT, date DATE)')
    print("Table created successfully")


    #read titles and INSERT TABLE
    #        if number_of_rows > 0:
    query = "SELECT title from crawling"
    query2 = "INSERT into crawling (title, content, date) values (?,?,?)"
    cs.execute(query)
    temp_list = cs.fetchall()
    temp = []
    for element in temp_list:
      temp.append(element[0])

    for i in range(len(pl)):
      if pl[i] not in temp:
        cs.execute(query2, (pl[i], cn[i], today))
    conn.commit()

    # PRINT ROWS
    query = "SELECT rowid,title,content,date from crawling"
    cs.execute(query)
    count = cs.fetchall()
    rows = count
    for i in rows:
      print(i)

    conn.close()


##################################################
###################테스트 코드#####################
##################################################
if __name__ == "__main__":
  test = pretty_parser()


  temp1 = test.make_login_info('201502034', 'kim09825!')
  temp2 = test.make_url_info('https://computer.cnu.ac.kr/computer/notice/bachelor.do',
                             'https://computer.cnu.ac.kr/computer/etc/login.do')
  pl, ul = test.main_activity(temp2,temp1)


  #temp3 = test.make_url_info('https://computer.cnu.ac.kr/computer/notice/bachelor.do')
  #pl, ul = test.main_activity(temp3)

  test.s.close()

