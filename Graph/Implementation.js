
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


    removeEdge(v1,v2){
        this.list[v1]=this.list[v1].filter(vertex=>vertex !==v2)
        this.list[v2]=this.list[v2].filter(vertex=>vertex!==v1)
    }

    removeVertex(vertex){
        while(this.list[vertex].length){
            let adjecentVertex=this.list[vertex].pop()
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.list[vertex]
    }



    dfs(start){
        let result=[];
        let visited={};

        const traverse=(vertex)=>{
            if(!vertex) return;
            visited[vertex]=true;
            result.push(vertex);

            for(let neighbor of this.list[vertex]){
                if(!visited[neighbor]){
                    traverse(neighbor)
                }
            }
        }
        traverse(start)
        return result
    }


    bfs(start){
        let queue=[start];
        let visited={};
        let result=[];

        visited[start]=true;
        while(queue.length){
            let current = queue.shift();
            result.push(current);

            for(let neighbor of this.list[current]){
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    queue.push(neighbor)
                }
            }
        }
        return result
    }


}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("A","C")

// console.log(graph.list)
console.log(graph.bfs("A"));
