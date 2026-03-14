



class Animal{
    sound(){
        console.log("Animal Sound")
    }
}


class Dog extends Animal{
    sound(){
        console.log("Dog Sound")
    }
}



function MakeSound(animal:Animal){
    animal.sound()
}



MakeSound(new Dog)
MakeSound(new Animal)