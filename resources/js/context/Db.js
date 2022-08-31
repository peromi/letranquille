import Dexie from "dexie"
export const db = new Dexie("ChatDB")

    db.version(1).stores({
        chats:"++id,sender, receiver, message, image, status, timestamp",
        notifications:"++id, from, message, status, timestamp",
        messagelist:"++id, userid, last_message, status"
})

    db.open().catch((err) => {
        console.log(err.stack || err)
    })
