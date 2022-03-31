from datetime import datetime
import dbConnection

db = dbConnection.get_connection()
children_collection = db["children_attendance"]
staff_collection = db["staff_attendance"]


def markAttendance(id, role):
    now = datetime.now()
    dString = now.strftime("%Y-%m-%d")
    tString = now.strftime("%H:%M")
    departureTime = now.replace(hour=19, minute=0, second=0, microsecond=0)
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
                        {query: int(element[query])},
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
    dString = now.strftime("%Y-%m-%d")
    tString = now.strftime("%H:%M")

    if role == "child":
        path.insert_one(
            {"_childId": int(id),
             "_date": dString,
             "_arrivalTime": tString,
             "_departureTime": "",
             "_absence": '',
             "_childDelay": False,
             "_escortDelay": False}
        )
    if role == "staff":
        path.insert_one(
            {
                "_employeeId": int(id),
                "_date": dString,
                "_arrivalTime": tString,
                "_departureTime": "",
            }
        )
