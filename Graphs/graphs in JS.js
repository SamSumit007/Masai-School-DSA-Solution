/*
// node.set => set the value in Map
// node.has => checks the key in the map if present it return true
// node.get => returns the value of the key passed in the get();
// node.delete => delete the key and value from the map

let node = new Map();

node.set(0, [4,5,2])
node.set(1, "sidPatil")

node.set(2, true)
node.set(4, {"name":"sidPatil"})

console.log(node.has(1)); //true
console.log(node.get(1)); //sidPatil
console.log(node.get(4)); // {"name":"sidPatil"}

let a = node.get(4)
console.log(a.name); // sidPatil

console.log(node.delete(2));

//this is how we can update the value in map=>

let val = node.get(0);
val.push(32);
node.set(4, val)
console.log(node);


console.log(node.keys());  //gives all the keys 

console.log(node.values()); // gives all the values


//iterate over map=>
let iterator = node.keys();

console.log(iterator.next().value);

*/



class Graph{
    constructor(){
        this.elem = new Map()
        this.vertices = 0;
        this.edges = 0;
        this.visited = {}
        this.q = {}
    }
    
    // addVertex 

    addVertex(v){
        this.elem.set(v, [])
        this.vertices++;
    }


    // has a vertex

    hasVertex(v){
        return this.elem.has(v)  //return true or false
    } 

    // get the values at a vertex

    neighbours(v){
        return this.elem.get(v)
    }

    // update values at vertex

    updateVertex(v, val){
        this.elem.set(v, val)
    }
    // addEdge

    addEdge(v1, v2){
        //graph has v1?
        // if not, add v2
        if(!this.hasVertex(v1)){
            this.addVertex(v1)
        }

        // graph has v2?
        // if no, add v2
        if(!this.hasVertex(v2)){
            this.addVertex(v2)
        }


        // get data of v1,
        // push v2, into v1 values
        // update v1 edge

        let val = this.neighbours(v1);
        // check if v2 exists in val
        val[val.length] = v2;
        // if v2 exists in val
        this.updateVertex(v1, val);
        this.edges++;
    }

    // has an edge

    hasEdge(v1, v2){
        let val = this.neighbours(v1)
        if(val.indexOf(v2)){
            return true
        }else{
            return false
        }
    }
    // no of vertices

    noVertices(){
        return this.vertices
    }

    // no of edges

    noEdges(){
        return this.edges;
    }

    // bfs 

    bfs(v){
        this.visited = {};
        this.q.push(v);

        // as long as q is not empty

        while(this.q.length != 0){
            let neighbours = this.neighbours(this.q[0]);

            if(!this.visited[this.q[0]]){
                this.visited[this.q[0]] = 1;
            }
        }
        
    }




    // dfs

    // recursion
    _dfs(v, level = null){

        if(this.visited[v] === 1){
            return
        }
        this.visited[v] = 1;

        if(level == null){
            let val = this.neighbours(v);
            val.forEach(a => {
                console.log(v, '->', a);
                this._dfs(a)
            })
        }

    }



    dfs(v){
        this.visited = {};
        this._dfs(v)
    }
}



let graph = new Graph();


graph.addEdge(0, 2)
graph.addEdge(0, 1)

graph.addEdge(1, 3)
graph.addEdge(2, 5)

// console.log(graph.hasEdge(2, 9));
// console.log(graph.noEdges());
// console.log(graph);
// console.log(graph.noVertices());

graph.dfs(0)