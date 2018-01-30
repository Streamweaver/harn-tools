import csv, json

def writeNames():
    names = { 'male': [], 'female': [] }
    with open('SaxonGivenNames.data.json', 'w') as jsonFile:
        names['male'] = parseNames('SaxonMaleNames.csv')
        names['female'] = parseNames('SaxonFemaleNames.csv')
        json.dump(names, jsonFile)

def parseNames(filename):
    names = []
    with open(filename) as nameFile:
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