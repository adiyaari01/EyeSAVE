from datetime import datetime
import dbConnection

db = dbConnection.get_connection()
# תשני לשם של הקולקשן
children_collection = db["childAttendance"]
staff_collection = db["staffAttendance"]


def markAttendance(id, role):
    now = datetime.now()
    # תשני לפי הפורמט שאת צריכה
    dString = now.strftime("%d-%m-%Y")
    tString = now.strftime("%H:%M:%S")
    departureTime = now.replace(hour=15, minute=0, second=0, microsecond=0)
    # the jsons are saved in different repositories
    if role == "child":
        path = children_collection
        query = "_childId"
    else:
        path = staff_collection
        query = "_employeeId"
    DBelements = path.find()
    found = False
    for element in DBelements:
        # print(query)
        if element[query] == id:
            found = True
            if element["_date"] == dString:
                if departureTime < now:
                    path.update_one(
                        {query: element[query]},
                        {
                            "$set": {
                                "_departureTime": tString
                            },
                            "$currentDate": {"lastModified": True}

                        }
                    )
            else:
                createData(id, role, path)
    if found == False:
        createData(id, role, path)


def createData(id, role, path):
    now = datetime.now()
    dString = now.strftime("%d-%m-%Y")
    tString = now.strftime("%H:%M:%S")
    if role == "child":
        path.insert_one(
            {"_childId": id,
             "_date": dString,
             "_arrivalTime": tString,
             "_departureTime": "",
             "_absence": False,
             "_childDelay": "",
             "_escortDelay": ""}
        )
    if role == "staff":
        path.insert_one(
            {
                "_employeeId": id,
                "_date": dString,
                "_arrivalTime": tString,
                "_departureTime": "",
            }
        )
