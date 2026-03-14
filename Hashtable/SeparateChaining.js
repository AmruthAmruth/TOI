




class HashTable{
    constructor(size=10){
        this.size=size;
        this.table = new Array(size);
    }



    _hash(key){
        let index =0;
        for(let i=0;i<key.length;i++){
            index+= key.charCodeAt(i);
        }
        return index % this.size
    }


    set(key,value){
        let index = this._hash(key);

        if(!this.table[index]){
            this.table[index]=[]
        }

        for(let item of this.table[index]){
            if(item[0]===key){
                item[1]=value;
                return
            }
        }

        this.table[index].push([key,value])
    }


    get(key){
        let index = this._hash(key);
        if(!this.table[index]){
            console.log("Not found");
            return
        }

        for(let item of this.table[index]){
            if(item[0]===key){
                console.log(item[1]);
                return
            }
        }

    }


    remove(key){
        let index = this._hash(key);
        if(!this.table[index]){
            console.log("Not found");
            return 
        }

        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]==key){
                this.table[index].splice(i,1);
                return 
            }
        }

    }


    display(){
        console.log(this.table);
        
    }


    has(key){
        let index = this._hash(key);

        if(!this.table[index]){
            console.log("Not found");
            return false
        }

        for(let item of this.table[index]){
            if(item[0]===key){
                return true
            }
        }

        return false;



    }


}



const table = new HashTable();
table.set("name","Amruth")

table.set("place","Mndy")
table.set("age",21)
table.set("city","Mndy")

table.remove("name")
table.display()
table.get("name")