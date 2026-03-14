

interface Printer{
    print():void
}


interface Vax{
    vax():void
}


interface Max{
    max():void
}


class Sample implements Printer{
    print():void{
        console.log("Hellow Printer")
    }
}



class Broto implements Vax,Max{
    vax():void{
        console.log("Vaxxx")
    }

    max():void{
        console.log("Max")
    }
}



const obj = new Broto()

obj.vax()


