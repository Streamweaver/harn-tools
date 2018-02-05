import csv, json

def writeprices():
    priceList = parsePrices('PriceList.csv')
    # headers = ['category', 'subcategory', 'item', 'price', 'vendor', 'source', 'comments']
    with open('price.data.json', 'w', encoding='utf-8') as jsonFile:
        json.dump(priceList, jsonFile)

def parsePrice(price):
  price = price.strip()
  if price.endswith('+'):
    price = price[:-1]
  if price.endswith('d'):
    price = price[:-1]
  if price.endswith('f'):
    price = price[:-1]
    price = float(price) * 0.25
  if str(price).endswith('L'):
    price = price[:-1]
    price = float(price) * 240.0
  return float(price)

def parsePrices(filename):
  prices = []
  with open(filename, encoding='utf-8') as priceFile:
      nameReader = csv.DictReader(priceFile)
      for row in nameReader:
        priceRow ={}
        try:
          priceRow['category'] = row['Category'].strip().lower()
          priceRow['subcategory'] = row['Subcategory'].strip().lower()
          priceRow['item'] = row['Item'].strip().lower()
          priceRow['price'] = parsePrice(row['Price'])
          priceRow['vendor'] = row['Vendor'].strip().lower()
          priceRow['source'] = row['Source'].strip()
          priceRow['comments'] = row['Comments'].strip()
          prices.append(priceRow)
        except ValueError:
          print('Skipping value of ', row['Price'])
  return prices;

if __name__ == '__main__':
    writeprices()
    print("Done")
