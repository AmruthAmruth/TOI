
class Graph{
    constructor(){
        this.list={}
    }


    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=[]
        }
    }


    addEdge(v1,v2){
        this.list[v1].push(v2);
        this.list[v2].push(v1)
    }






}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("A","C")

console.log(graph.list)