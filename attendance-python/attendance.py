from datetime import datetime
import json
import os


def markAttendance(name, role):
    now = datetime.now()
    dString = now.strftime("%d.%m.%Y")
    tString = now.strftime("%H:%M:%S")
    # the jsons are saved in different repositories
    if role == "child":
        path = 'ChildAttendance/'
    else:
        path = 'StaffAttendance/'
        # if the json exists it means the child/staff member already arrived
    if os.path.exists(path + name + '.json'):
        f = open(path + name + '.json')
        myDataList = json.load(f)
        if myDataList["date"] == dString:
            print("success")

    else:
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
        with open(path + name + '.json', 'w') as f:
            json.dump(attendance, f, indent=4)
