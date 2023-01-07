import serial
import os
ser = serial.Serial()
ser.baudrate = 115200
ser.port = '/dev/ttyACM0'
ser.open()

while True:
	data = str(ser.readline()) # Faigh sonraí ón Microbit
	data = str(ser.readline())
	data = data.replace("b\'", "")
	data = data.replace("\\r\\n", "")
	data = data.replace("b\'", "")
	data = data.replace("'", "")
	data = data.replace(" ", "") # Glan na sonraí sin suas
	print(data)
	if data != "": # Má tá sonraí seolta ('Bogtha')
		os.system("python firebase.py") # Rith firebase.py
