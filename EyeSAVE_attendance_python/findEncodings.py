import cv2
import face_recognition


# creates a processed list of saved images
def findEncodings(images):
    encodeList = []
    for img in images:
        # change image colour from BGR to RGB
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList
