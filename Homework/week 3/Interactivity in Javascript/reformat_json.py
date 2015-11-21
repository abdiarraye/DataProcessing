import csv
import json

csvfile = open('knmi_new.csv', 'r')
jsonfile = open('knmi1.json', 'wb')


field = ('YYYYMMDD','TX')
reader = csv.reader(csvfile,field)
lijst = []
for row in reader:
    lijst.append(row)
json.dump(lijst, jsonfile, indent=4)


"""
with open('knmi.csv','r') as csvfile:
 reader = csv.reader(csvfile)
 for row in reader:
  waarde = row[2]
  nummer = row[1]
  nummer = nummer[:4]+'/'+nummer[4:6]+nummer[6:5]+'/'+nummer[6:8] 
  
  new= [[nummer], [waarde]]
  
  with open ('test.csv','w')as n:
   output = csv.writer(n)
   for row in reader:
    temp = row[2]
    date = row[1]
    date = date[:4]+'/'+date[4:6]+date[6:5]+'/'+date[6:8]
    datee= [(date,temp)]
    output.writerows(datee)
    
"""