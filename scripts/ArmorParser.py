import csv, json

def writeJsonData():
  with open('armor.data.json', 'w') as jsonFile:
    json.dump(parseArmor(), jsonFile)

def parseArmor():
  armor_list = []
  with open('ArmorData.csv', 'r') as csvFile:
    reader = csv.DictReader(csvFile)
    for row in reader:
      type = row['name'].split(' ')[0]
      name = " ".join(row['name'].split(' '))
      armor_list.append(
        {
          'name': name.lower(),
          'type': type.lower(),
          'skull': True if row['skull'] else False,
          'face': True if row['face'] else False,
          'neck': True if row['neck'] else False,
          'shoulders': True if row['shoulder'] else False,
          'upperArms': True if row['upper arms'] else False,
          'elbows': True if row['elbows'] else False,
          'forearms': True if row['forearms'] else False,
          'hands': True if row['hands'] else False,
          'thoraxFront': True if row['thorax front'] else False,
          'thoraxBack': True if row['thorax back'] else False,
          'abdomenFront': True if row['abdomen front'] else False,
          'abdomenBack': True if row['abdomen back'] else False,
          'hips': True if row['hips'] else False,
          'groin': True if row['groin'] else False,
          'thighs': True if row['thighs'] else False,
          'knees': True if row['knees'] else False,
          'calves': True if row['calves'] else False,
          'feet': True if row['feet'] else False,
          'baseWeight': float(row['weight']),
          'basePrice': int(row['cost'])
        }
      )
  return armor_list

if __name__ == '__main__':
  writeJsonData()
  print("Done")
