#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec  4 20:50:35 2019

@author: jeongseong-ug
"""

import smtplib
from email.mime.text import MIMEText
 

def send_notice_message(client_email):
    smtp = smtplib.SMTP('smtp.gmail.com', 587)
    smtp.ehlo()      # say Hello
    smtp.starttls()  # TLS 사용시 필요
    smtp.login('xrjseka615@gmail.com', 'qhbxyixlcsznnkuq')
     
    msg = MIMEText('본문 테스트 메시지')
    msg['Subject'] = '테스트'
    msg['To'] = 'kim@naver.com'
    smtp.sendmail('su_j615@naver.com', msg.as_string())
    smtp.quit()

