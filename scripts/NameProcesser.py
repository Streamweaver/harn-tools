import csv, json

def writeNames():
    given_names = { 'male': [], 'female': [] }
    surnames = []
    with open('ScandinavianNames.data.json', 'w', encoding='utf-8') as jsonFile:
        given_names['male'] = parseNames('ScandinavianMaleNames.csv')
        given_names['female'] = parseNames('ScandinavianFemaleNames.csv')
        # surnames = praseNames()
        json.dump({'given_names': given_names, 'surnames': surnames}, jsonFile)

def parseNames(filename):
    names = []
    with open(filename, encoding='utf-8') as nameFile:
        nameReader = csv.reader(nameFile)
        for row in nameReader:
            for item in row:
                if item:
                    words = item.split(',')
                    for word in words:
                      names.append(word.replace('?', '').strip())
    return names

if __name__ == '__main__':
    writeNames()
    print("Done")
