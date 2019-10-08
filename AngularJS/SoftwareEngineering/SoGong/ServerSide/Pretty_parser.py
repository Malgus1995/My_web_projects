import requests
import selenium
from bs4 import BeautifulSoup as bs


#Login user info
def make_login_info(member_id, memeber_pw):
    LOGIN_INFO = {
        'member_id': member_id,
        'member_pw': memeber_pw
    }
    return LOGIN_INFO

#Computer Site Session
def login_function(form):
    with requests.Session() as S:
        login_req = S.post('https://computer.cnu.ac.kr/computer/etc/login.do', data=form)
        print(login_req.status_code)

        if login_req.status_code != 200:
            raise Exception('로그인 실패. ID 또는 PW를 확인해주세요.')

        post_one = S.get('https://computer.cnu.ac.kr/computer/notice/bachelor.do')
        soup = bs(post_one.text, 'html.parser')

        title = soup.select('#jwxe_main_content > div > div > div.bn-list-common01.type01.bn-common > table > tbody > tr:nth-child(8) > td.b-td-left > div > a')

        print(title[0].text.strip())


temp = make_login_info('201404376', 'wjdtjddnr615!')
login_function(temp)