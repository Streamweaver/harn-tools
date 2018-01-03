import csv, json

def writeNames():
    names = { 'male': [], 'female': [] }
    with open('englishGivenNames.data.json', 'w') as jsonFile:
        names['male'] = parseNames('MaleNames.csv')
        names['female'] = parseNames('FemaleNames.csv')
        json.dump(names, jsonFile)

def parseNames(filename):
    names = []
    with open(filename) as nameFile:
        nameReader = csv.reader(nameFile)
        for row in nameReader:
            for item in row:
                if item:
                    words = item.split()
                    names.append(words[0].replace('?', ''))
    return names

if __name__ == '__main__':
    writeNames()
    print("Done")