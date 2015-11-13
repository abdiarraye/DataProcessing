
import csv
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
    
