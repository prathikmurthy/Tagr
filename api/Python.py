import requests

data=['https://picsum.photos/id/1001/600/280', 
        'https://picsum.photos/id/1002/600/280', 
        'https://picsum.photos/id/1003/600/280']

response = requests.post('http://localhost:3000/api/PushUntagged', json=data)

print(response)

