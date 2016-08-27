import subprocess
import os 
print ("starting")
teste = subprocess.check_output("./search4mac.sh F8:D1:11:92:EF:B6", shell=True)

if (teste != 0):
    print ("The Device was found at IP:", teste[:-1])

print("Done")

host = teste[:-1].decode("utf-8")
print ("Try to ping host: %s" %(host))
hostname = "google.com"
response = os.system("ping -c 1 " + host)

# print ("startitg")
# teste = subprocess.Popen(['bash', '-c', '. teste.sh; get_subnet'], stdout=subprocess.PIPE).communicate()[0]
# 
# print ("%s" %teste)
