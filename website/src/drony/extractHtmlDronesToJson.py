from bs4 import BeautifulSoup
import json
import os


def determine_drone_type(drone_name):
    if "FPV" in drone_name or "iFlight" in drone_name:
        return "FPV"
    elif "DJI" in drone_name:
        return "DJI"
    else:
        return "Yuneec"


def extractData(filePath):
    with open(filePath, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
        name = soup.find('h1').text.strip()
        description_elements = soup.find('div', class_='drone_details').find_all(['p', 'li'])
        description = [element.text.strip() for element in description_elements]
        price = soup.find('div', class_='button-container').find('strong').text.strip()
        img_path = os.path.basename(soup.find('div', class_='container').find('img')['src'])
        drone_type = determine_drone_type(name)
        return {'name': name, 'description': description[:4], 'price': price, 'img_path': img_path, 'drone_type': drone_type}


html_files_directory = 'Subwebsites/'
all_data = []

for fileName in os.listdir(html_files_directory):
    file_path = os.path.join(html_files_directory, fileName)
    data = extractData(file_path)
    all_data.append(data)
json_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'droneData.json')
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(all_data, json_file, ensure_ascii=False, indent=2)
