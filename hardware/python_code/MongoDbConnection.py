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
    collection.update_one({"deviceName": my_device }, {"$set": {"status": f'{status}'}})
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
    
    my_device = "study-light"
    #Change the status to 'off' or 'on' to test the DB change detection
    status = 'on'
    update_document(my_device, status)

    # Wait for the change thread to finish
    change_thread.join()


if __name__ == "__main__":
    main()
