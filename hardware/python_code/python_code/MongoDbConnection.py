import pymongo
import threading
import time
# Set up the URI
uri = "mongodb+srv://Home_Automation_AUT:Home_Automation_AUT@cluster0.9awkbpi.mongodb.net/?retryWrites=true&w=majority"

# Create a client object to connect to the database
client = pymongo.MongoClient(uri)

# Access the database
db = client["Home_Automation_DB"]

# Access the collection in the database
collection = db["devices"]


def update_document(my_device, status):
    # Method to update a value in the database
    collection.update_one({"name": my_device }, {"$set": {"status": f'{status}'}})
    print("Update Completed")


def watch_changes():
    # Set up a change stream on the collection
    pipeline = [{'$match': {'operationType': 'update', 'updateDescription.updatedFields.status': {'$exists': True}}}]
    with collection.watch(pipeline) as change_stream:
        # Define a callback function to handle changes
        def on_change(change):
            print("Change detected:")
            print(change)

        # Loop indefinitely, processing changes as they occur
        for change in change_stream:
            on_change(change)


def main():
    # Start a separate thread to watch for changes
    change_thread = threading.Thread(target=watch_changes)
    change_thread.start()

    # Wait for the change thread to start
    time.sleep(1)
    print("Testing changes with multi-threading")
    # Call the update_document metho    d on the main thread
    
    # my_deviceKITCH = "bed-light"
    # my_deviceBED = "office-watering"
    # #Change the status to 'off' or 'on' to test the DB change detection
    statusT = True
    statusF = False
    status = False
    o = "on"
    f = "off"

    # update_document(my_deviceKITCH, statusF)
    # update_document(my_deviceBED, statusF)
    # update_document("bed-light-on", status)
    # time.sleep(1)
    # update_document("kitchen-light-on", status)
    # time.sleep(1)
    # update_document("office-light-on", status)
    # update_document("bed-curtain-open", statusF)

    # update_document("Bedroom Light", f)
    # # time.sleep(1)
    # update_document("Kitchen Light", f)
    # # time.sleep(1)
    # update_document("Office Light", f)
    # update_document("Curtain", f) # o is clockwise



    # Wait for the change thread to finish
    change_thread.join()


if __name__ == "__main__":
    main()