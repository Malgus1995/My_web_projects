import requests
from bs4 import BeautifulSoup as bs


def get_title_from_junk(dirty_title):

    slice_index =  min(dirty_title.index('\n'), dirty_title.index('\t'))
    refiend_title = dirty_title[:slice_index]
    return refiend_title

#Computer Site Session
def parse_data_function():
    with requests.Session() as S:
        post_one = S.get('https://computer.cnu.ac.kr/computer/notice/bachelor.do')
        soup = bs(post_one.text, 'html.parser')
        data = []
        table = soup.find('table', attrs={'class':'board-table'})
        table_body = table.find('tbody')

        rows = table_body.find_all('tr')
        for row in rows:
            cols = row.find_all('td')
            cols = [ele.text.strip() for ele in cols]
            data.append([ele for ele in cols if ele])
    return data

def get_a_tag():
    with requests.Session() as S:
        post_one = S.get('https://computer.cnu.ac.kr/computer/notice/bachelor.do')
        base_url = 'https://computer.cnu.ac.kr/computer/notice/bachelor.do'
        soup = bs(post_one.text, 'html.parser')
        data = []
        table = soup.find('table', attrs={'class':'board-table'})
        table_body = table.find('tbody')

        rows = table_body.find_all('a')
        for uf_a_tag in rows:
            start_index = str(uf_a_tag).index("\"")+1
            end_index = str(uf_a_tag).index("title")-2
            #print(uf_a_tag[start_index:end_index])
            rf_atag = str(uf_a_tag)[start_index:end_index].replace('amp;','')
            #print(rf_atag)
            data.append(base_url+rf_atag)
    return data



def make_entire_refined_data():
    res = []
    temp_dic = {}
    unrefined_notice_data = parse_data_function()
    rf_all_atags = get_a_tag()
    for idx,one in enumerate(unrefined_notice_data):
        if one[0] == '공지':
            continue
        temp_dic['title'] = get_title_from_junk(one[1])
        temp_dic['author'] = one[2]
        temp_dic['post_date'] = one[3]
        temp_dic['post_url'] = rf_all_atags[idx]
        res.append(temp_dic)
        temp_dic = {}
    return res

#temp = make_login_info('$$$$$$$$$', '############')
#unrefined_notice_data = login_function(temp)
#res_crwaling_data = make_entire_refined_data(unrefined_notice_data)
