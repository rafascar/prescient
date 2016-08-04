import subprocess
print "starting"
teste = subprocess.check_output("./search4mac.sh F8:D1:11:92:EF:B6", shell=True)

if (teste):
    print "OKOKOKOKOKOKOKOKOKOK"

print"Done"
