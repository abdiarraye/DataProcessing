import csv

f = open('knmi.csv')

csv_f = csv.reader(f)

for row in csv_f:
 print row
  
f.close()