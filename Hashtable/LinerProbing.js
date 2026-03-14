



class HashTable{
    constructor(size=7){
        this.size=size;
        this.table= new Array(size).fill(null);
        this.count=0
    }



    _hash(key){
        let index = 0;
        for(let i=0;i<key.length;i++){
            index += key.charCodeAt(i)
        }
        return index % this.size;
    }



    _loadFactor(){
        return this.count/ this.size;
    }


    _rehashing(){
        let oldTable = this.table;
        this.size=this.size*2;
        this.count=0;
        this.table=new Array(this.size).fill(null)

        for(let bucket of oldTable){
            if(bucket){
                this.set(bucket[0],bucket[1])
            }
        }
    }

    set(key,value){
        if(this._loadFactor()>0.7){
            console.log("Rehashing Needed!");
            this._rehashing()
        }

        let index = this._hash(key);

        while(this.table[index]){
            if(this.table[index][0]===key){
                this.table[index][1]=value;
                return
            }
            index=(index+1) % this.size;
        }

        this.table[index]=[key,value]
        this.count++

    }


    get(key){
        let index = this._hash(key);
        let startIndex=index;
        while(this.table[index]){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index=(index+1)%this.size;
            if(startIndex===index) break;
        }
        return false;
    }

    remove(key){
        let index = this._hash(key);
        let startIndex = index;
        while(this.table[index]){
            if(this.table[index][0]===key){
                this.table[index]=null;
                return true
            }
            index=(index+1)%this.size;
            if(index===startIndex) break;
        }
        return false
    }

    dispaly(){
        console.log(this.table)
    }



}


const table = new HashTable();

table.set("name","Amruth")
table.set("place","Mndy")
table.set("age",21)
table.set("work","Developer")
table.set("salary",80000)
table.set("study","Broto")
table.set("workLocation","hydreabad")
table.set("gym","yes")
table.dispaly()

console.log(table.get("name"));
console.log(table.remove("name"));
console.log(table.get("place"));


