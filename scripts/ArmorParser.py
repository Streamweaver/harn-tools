import csv, json

def writeJsonData():
  with open('armor.data.json', 'w') as jsonFile:
    json.dump(parseArmor(), jsonFile)

def parseArmor():
  armor_list = []
  with open('ArmorTables.csv', 'r') as csvFile:
    reader = csv.DictReader(csvFile)
    for row in reader:
      type = row['Material Description'].split(' ')[0]
      name = " ".join(row['Material Description'].split(' ')[1:])
      armor_list.append(
        {
          'name': name.lower(),
          'type': type.lower(),
          'skull': True if row['Skull'] else False,
          'face': True if row['Face'] else False,
          'neck': True if row['Neck'] else False,
          'shoulders': True if row['Shoulder'] else False,
          'upper_arms': True if row['Upper Arms'] else False,
          'elbows': True if row['Elbows'] else False,
          'forearms': True if row['Forearms'] else False,
          'hands': True if row['Hands'] else False,
          'thorax_front': True if row['Thorac (Front)'] else False,
          'thorax_back': True if row['Thorax (Back)'] else False,
          'abdomen_front': True if row['Abdomen (Front)'] else False,
          'abdomen_back': True if row['Abdomen (Back)'] else False,
          'hips': True if row['Hips'] else False,
          'groin': True if row['Groin'] else False,
          'thighs': True if row['Thighs'] else False,
          'knees': True if row['Knees'] else False,
          'calves': True if row['Calves'] else False,
          'feet': True if row['Feet'] else False,
          'weight': float(row['Weight']),
          'price': int(row['Cost'])
        }
      )
  return armor_list

if __name__ == '__main__':
  writeJsonData()
  print("Done")
