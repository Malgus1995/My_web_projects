#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec  4 20:50:35 2019

@author: jeongseong-ug
"""

import smtplib
from email.mime.text import MIMEText
 

def send_notice_message(client_email,notice):
    smtp = smtplib.SMTP('smtp.gmail.com', 587)
    smtp.ehlo()      # say Hello
    smtp.starttls()  # TLS 사용시 필요
    smtp.login('xrjseka615@gmail.com', 'qhbxyixlcsznnkuq')
     
    msg = MIMEText(notice)
    msg['Subject'] = notice
    msg['To'] = client_email
    smtp.sendmail('NoticeParser',client_email, msg.as_string())
    smtp.quit()

