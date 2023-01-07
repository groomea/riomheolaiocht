import firebase_admin
from firebase_admin import db
import json
from datetime import datetime


cred_object = firebase_admin.credentials.Certificate('/home/pi/tionscnamh-riomheolaiochta/raspberryPi/firebase-adminsdk.json')
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL' :''
	})


ref = db.reference("/")

# Túsaigh Firebase ^


time = datetime.now()
epoch = str(int(round(time.timestamp())))

bliain = str(time.strftime("%y"))
mi = str(time.strftime("%m"))
data = str(time.strftime("%d"))
la = str(time.isoweekday())
am = str(time.strftime("%H:%M"))
soicind = str(time.strftime("%S"))

# Cruthaigh athróga den bhliain, mhí, dáta, lá, am agus soicind atá ann faoi láthair 

x = {
  epoch:
    {
        "bliain": bliain,
        "mi": mi,
        "data": data,
        "la": la,
        "am": am,
	"soicind": soicind,
        }
}
# Cuir na sonraí sin i leagan bréag-.json


x = json.dumps(x, indent=4)
# Athraigh go fíor-.json é

with open("data.json", "w") as f:
	f.write(x)
# Scríobh go dtí comhad é


with open("data.json", "r") as f:
	file_contents = json.load(f)
ref.update(file_contents)
# Oscail agus seol ábhar an chomhaid sin go Firebase
