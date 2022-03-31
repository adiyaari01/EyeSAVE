import pymongo
import config


client = pymongo.MongoClient(config.mongoConnection)


def get_connection():

    eyeSaveDB = client["EyeSAVE_DB"]
    return eyeSaveDB

def get_list(role):
    eyeSaveDB = client["EyeSAVE_DB"]
    collection = eyeSaveDB[role]
    collection_data = collection.find()
    mylist = []
    for item in collection_data:
        mylist.append(item)
    return mylist
