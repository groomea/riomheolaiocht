import smtplib, ssl
import firebase_admin
from firebase_admin import db
import json
from datetime import datetime

# Céimeanna a leanann an cód seo:

# 6pm atá ann
# An bhfuil an taibléad tógtha inniu?
# 1. Déan seic ar Firebase.
# Ar tógadh é?
# Más ea:
#	- Stop
# Más a mhalairt:
#	- Seol rphost


cred_object = firebase_admin.credentials.Certificate('/home/pi/tionscnamh-riomheolaiochta/raspberryPi/firebase-adminsdk.json')
default_app = firebase_admin.initialize_app(cred_object, {
        'databaseURL' :''
        })


ref = db.reference("/")
# Túsaigh Firebase ^


time = datetime.now()
togtha = False
# Túsaigh athróga a bheidh in úsáid níos déanaí


teachtaireacht = """\
Subject: Intinn an Tí: Dearmad déanta ar do thaibléad!

Rinne tú dearmad do thaibléad a thógáil inniu. Déan cinnte é a thógáil roimh dheireadh an lae.

Is rphost uathoibreach é seo.""".encode('utf-8')

# Bhí gá utf-8 a úsáid toisc go raibh ASCII réamhshocruithe ach níl fada ar bith san ASCII

# Langen, J.de, Sending Emails With Python. Ar fáil ag: https://realpython.com/python-send-email/#sending-fancy-emails [Dáta rochtana 9 Márta 2022]
def seolRphost(seoladh, teachtaireacht):

        port = 587  # Port starttls
        smtp_server = "smtp.sampla.com"
        sender_email = "seoltoir@sampla.com" # Rphost ina mbeidh an teachtaireacht seolta ó
        receiver_email = seoladh
        password = "hunter2" # rphost agus pasfhocal bainte de bharr cúrsaí príobháideachais
        message = teachtaireacht

        context = ssl.create_default_context()
        with smtplib.SMTP(smtp_server, port) as server:
                server.ehlo()
                server.starttls(context=context)
                server.ehlo()
                server.login(sender_email, password)
                server.sendmail(sender_email, receiver_email, message) # Seol an rphost



# Laethanta ar tógadh an taibléad:

users = ref.get() # Faigh na sonraí go léir ó Firebase 
# print(users)

blianta = [val["bliain"] for key, val in users.items() if "bliain" in val]
# print("blianta:", blianta)

mionna = [val["mi"] for key, val in users.items() if "mi" in val]
# print("míonna:", mionna)

datai = [val["data"] for key, val in users.items() if "data" in val]
# print("dátaí:", datai)

# Faigh na blianta, míonna agus dátaí ar tógadh an taibléad atá ar Firebase


# Ríomh an bhliain, mhí agus dáta inniu
bliainAnois = str(time.strftime("%y"))
miAnois = str(time.strftime("%m"))
dataAnois = str(time.strftime("%d"))

# print("An bhliain:", bliainAnois)
# print("An mhí:", miAnois)
# print("An dáta:", dataAnois)


# Má tá an lá inniu cothrom le lá ar tógadh an taibléad, togtha = True
# Mura bhfuil togtha cothrom le True, seol rphost

for i in range(len(datai)):
	if ( (bliainAnois == int(blianta[i])) and (miAnois == int(mionna[i])) and ( dataAnois == int(datai[i])) ):
		togtha = True
if togtha != True:
	print("ag seoladh rphoist")
	seolRphost("sampla@sampla.com", teachtaireacht) # sampla@sampla.com = rphost a bheidh an teachtaireacht seolta chuig
