from datetime import datetime
import json
import os


def markAttendance(name, role):
    now = datetime.now()
    dString = now.strftime("%d.%m.%Y")
    tString = now.strftime("%H:%M:%S")
    departureTime = now.replace(hour=7, minute=0, second=0, microsecond=0)
    # the jsons are saved in different repositories
    if role == "child":
        path = 'ChildAttendance/'
    else:
        path = 'StaffAttendance/'
        # if the json exists it means the child/staff member already arrived
    if os.path.exists(path + name + dString + '.json'):
        f = open(path + name + dString + '.json', "r")
        myDataList = json.load(f)
        if myDataList["date"] != dString:
            createData(name, role, path)
        elif departureTime < now:
            myDataList["departure"] = tString
            with open(path + name + dString + '.json', 'w') as f:
                json.dump(myDataList, f, indent=4)
                f.close()
    else:
        createData(name, role, path)


    # else:
    #     if role == "child":
    #         attendance = {
    #             "name": name,
    #             "date": dString,
    #             "arrival": tString,
    #             "departure": "",
    #             "sick": "",
    #             "late": ""
    #         }
    #     if role == "staff":
    #         attendance = {
    #             "name": name,
    #             "date": dString,
    #             "arrival": tString,
    #             "departure": ""
    #         }
    #     # create new json and save the data
    #     with open(path + name + '.json', 'w') as f:
    #         json.dump(attendance, f, indent=4)
def createData(name, role, path):
    now = datetime.now()
    dString = now.strftime("%d.%m.%Y")
    tString = now.strftime("%H:%M:%S")
    if role == "child":
        attendance = {
            "name": name,
            "date": dString,
            "arrival": tString,
            "departure": "",
            "sick": "",
            "late": ""
        }
    if role == "staff":
        attendance = {
            "name": name,
            "date": dString,
            "arrival": tString,
            "departure": ""
        }
    # create new json and save the data
    with open(path + name + dString + '.json', 'w') as f:
        json.dump(attendance, f, indent=4)
        f.close()