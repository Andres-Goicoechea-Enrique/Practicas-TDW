function coordenada(x,y){
    this.x=x;
    this.y=y;
}
coordenada.prototype.isDiagonal = ()=> {console.log(this.x); console.log(this.y);return this.x == this.y};


coordenada.dim = 2;
coordenada.getDim = ()=> {return coordenada.dim;}
let a = new coordenada(2,3);
console.log(a);
console.log(a.isDiagonal());
console.log(coordenada.getDim());


let f = new Function("a", "b", "return a*b");
console.log(f(2,4));
console.log(new Function("a", "b", "return a*b")(4,4));

console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
function sum(){
    let sum =0;
    for(let argument of arguments){
        sum += argument;
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8,9))
