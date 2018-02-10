import csv, json

# Second version of the pricelist parcer for the updated compiled list from Harnforum

def writeprices():
    priceList = parsePrices('PriceList2.csv')
    # headers = ['name', 'weight', 'price', 'vendor']
    with open('expandedprice.data.json', 'w', encoding='utf-8') as jsonFile:
        json.dump(priceList, jsonFile)

def parsePrice(price):
  price = price.strip()
  if not price:
    return 0
  if price.startswith('*'):
    price = price[1:]
  if price.endswith('d'):
    price = price[:-1]
  if price.endswith('f'):
    price = price[:-1]
    price = float(price) * 0.25
  if str(price).endswith('L'):
    price = price[:-1]
    price = float(price) * 240.0
  try:
    return float(price)
  except ValueError:
    return 0


def parseWeight(weight):
  try:
    weight = float(weight)
    return weight
  except ValueError:
    return 0

def parsePrices(filename):
  prices = []
  with open(filename, encoding='utf-8') as priceFile:
      nameReader = csv.DictReader(priceFile)
      for idx, row in enumerate(nameReader):
        priceRow ={}
        try:
          if row['Name']:
            priceRow['id'] = idx + 1
            priceRow['name'] = row['Name'].strip().lower()
            priceRow['weight'] = parseWeight(row['Weight'].strip().lower())
            priceRow['price'] = parsePrice(row['Cost'])
            priceRow['vendor'] = row['Vendor'].strip().lower()
            priceRow['notes'] = row['Notes'].strip()
            prices.append(priceRow)
        except ValueError as e:
          print(e)
  return prices;

if __name__ == '__main__':
    writeprices()
    print("Done")
