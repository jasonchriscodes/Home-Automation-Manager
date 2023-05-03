import pymongo
import threading 
import time 
# set up the URI
        
def update_document(my_device, status):
    uri = "mongodb+srv://Home_Automation_AUT:Home_Automation_AUT@cluster0.9awkbpi.mongodb.net/?retryWrites=true&w=majority"
# create a client object to connect to the database
    client = pymongo.MongoClient(uri)

# access the database
    db = client["Home_Automation_DB"]

# access the collection in the database
    collection = db["devices"]

    collection.update_one({"deviceName": my_device }, {"$set": {"status": f'{status}'}})
    print("Update Completed")

def main():

    update_document()

if __name__ == "__main__":
    main()


#start the update thread 
# update_thread = threading.Thread(target= update_document)    
# update_thread.start()
# # set up a Change Stream on the collection
# with collection.watch() as stream:
#     # listen for changes to the "status" field
#     for event in stream:
#         if ("updateDescription" in event
#             and "updatedFields" in event["updateDescription"]
#             and event["updateDescription"]["updatedFields"].get("status") in ["off", "on"]):
#             print("Status changed to:", event["updateDescription"]["updatedFields"]["status"])

	
