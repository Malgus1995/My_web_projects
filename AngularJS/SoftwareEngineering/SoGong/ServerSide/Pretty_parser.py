from selenium import webdriver
from bs4 import BeautifulSoup as bs
from datetime import datetime
import sqlite3 as lite

class pretty_parser():
    def __init__(self):
        #self.driver = webdriver.Chrome('webdriver/chromedriver_win32/chromedriver')
        self.driver = webdriver.PhantomJS('webdriver/phantomjs-2.1.1-windows/bin/phantomjs')

    # Login user info
    def make_login_info(self, member_id, memeber_pw):
        LOGIN_INFO = {
            'member_id': member_id,
            'member_pw': memeber_pw
        }
        return LOGIN_INFO

    # Login user info
    def make_url_info(self, notice_url, login_url=""):
        URL_INFO = {
            'notice_url': notice_url,
            'login_url': login_url
        }
        return URL_INFO

    def login(self, url, form=None):
        # Do login
        # not operating in this case :  1.need more code 2.the site have capcha
        if url['login_url'] != "":
            self.driver.get(url['login_url'])
            self.driver.find_element_by_xpath("//input[@type='text']").send_keys(form['member_id'])
            self.driver.find_element_by_xpath("//input[@type='password']").send_keys(form['member_pw'])
            self.driver.find_element_by_xpath('//*/fieldset/button').click()

    def get_list_of_title(self, url=""):
        if url:
            self.driver.get(url['notice_url'])
        html = self.driver.page_source
        soup = bs(html, 'html.parser', from_encoding='utf-8')

        # remove list, which name is "공지"
        tr_list = soup.select('table > tbody > tr')
        num = 1
        for iter in tr_list:
            if iter.td.text.strip() == "공지":
                num += 1
        notices = soup.select('table > tbody > tr:nth-child(n+' + str(num) + ') > td')

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
            self.driver.get(url['notice_url'])
        html = self.driver.page_source
        soup = bs(html, 'html.parser', from_encoding='utf-8')

        # remove list, which name is "공지"
        tr_list = soup.select('table > tbody > tr')
        num = 1
        for iter in tr_list:
            if iter.td.text.strip() == "공지":
                num += 1

        url_list = []
        temp1 = self.driver.find_elements_by_xpath('//table/tbody/tr[position()>' + str(num - 1) + ']//a')
        for i in temp1:
            url_list.append(i.get_attribute('href'))

        return url_list

    ##### Site Session
    ##### param: form = login information(id, password)
    ##### param: url = (Notice url, login url)
    ##### variable : parsed_list = list of title
    ##### variable : url_list = list of url
    def login_function(self, url, form=None):
        self.login(url, form)
        self.driver.get(url['notice_url'])

        url_list = self.get_list_of_url()
        parsed_list = self.get_list_of_title()

        #content_html = self.get_content(url_list)

        #print(len(parsed_list))
        #print(len(url_list))
        return parsed_list, url_list

    def get_content(self, url_list):
        content_list = []
        for url in url_list:
            self.driver.get(url)
            html = self.driver.page_source
            soup = bs(html, 'html.parser', from_encoding='utf-8')
            temp = soup.find('div', class_="content")
            content_list.append(str(temp))
        return content_list

    def insert_db(self, pl, cn):
        import datetime
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
    ####take info - crawling
    test = pretty_parser()
    temp1 = test.make_login_info('****', '****!')
    temp2 = test.make_url_info('https://computer.cnu.ac.kr/computer/notice/bachelor.do')

    #temp2 = test.make_url_info('https://computer.cnu.ac.kr/computer/notice/bachelor.do', 'https://computer.cnu.ac.kr/computer/etc/login.do')
    #pl, ul = test.login_function(temp2,temp1)

    pl, ul = test.login_function(temp2)
    test.insert_db(pl, ul)

    #now = datetime.now()
    #today= ('%s-%s-%s' % (now.year, now.month, now.day))    # year-month-day ==> like "2019-10-06"
