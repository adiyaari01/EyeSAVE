import pymongo
import config


client = pymongo.MongoClient(config.mongoConnection)


def get_connection():

    # print(client)
    # תשני לשם הדאטהבייס
    db = client["EyeSave"]
    return db

def get_list(role):
    # תשני לשם הדאטהבייס
    db = client["EyeSave"]
    collection = db[role]
    collection_data = collection.find()
    mylist = []
    for item in collection_data:
        mylist.append(item)
    # print(mylist)
    return mylist
