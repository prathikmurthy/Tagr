import json
import requests

# data=['https://picsum.photos/id/1001/600/280', 
#         'https://picsum.photos/id/1002/600/280', 
#         'https://picsum.photos/id/1003/600/280']

raw = json.load(open('src/data/data.json'))
data = []
for i in raw:
        data.append(i['image'])

# print(data)

response = requests.post('http://localhost:3000/api/PushUntagged', json=data)

print(response)