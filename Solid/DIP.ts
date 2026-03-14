



interface DataBase{
    connect():void
}


class MySQL implements DataBase{
    connect(){
        console.log("Connected to MySQL")
    }
}


class MongoDB implements DataBase{
    connect(){
        console.log("Connected to MongoDB")
    }
}




const obj = new MongoDB()

obj.connect()


