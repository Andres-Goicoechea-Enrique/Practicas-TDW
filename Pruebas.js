let users = [
    {
        user : "x",
        password : "x",
        tipo : "w"
    },
    {
        user : "y",
        password : "y",
        tipo : "w"
    },
    {
        user : "z",
        password : "z",
        tipo : "w"
    },
    {
        user : "r",
        password : "r",
        tipo : "r"
    }
];

let logueado = false;
let infoUsuarioLogueado = undefined;
let logout = '<div id="cerrarSesion"><button type="button" class="btn btn-primary sm-2" style="margin-left: 45px;" onclick="funcLogOut()">LOGOUT</button></div>';
let login = '<div id="iniciarSesion"><form class="form-inline" action="login"><label for="user" class="mr-sm-2" style="margin-left: 45px;">Usuario:</label><input id="user" type="text" name="user" class="form-control mr-sm-2" placeholder="Usuario"/><label for="pass" class="mr-sm-2">Contraseña:</label><input id="pass" type="password" name="password" class="form-control mr-sm-2" placeholder="Contraseña"/><button type="button" class="btn btn-primary sm-2" onclick="funcClickLogin(document.getElementById("user"), document.getElementById("pass"))">LOGIN</button></form></div>';

function funcClickLogin(user, password){
    let usuIndex=0;
    while(usuIndex<users.length && !logueado){
        if(users[usuIndex].user == user.value && users[usuIndex].password == password.value){
            logueado = true;
            infoUsuarioLogueado = users[usuIndex];
        }
        usuIndex++;
    }
    if(logueado){
        cambiarLogin();
    }
    else{
        alert("USUARIO Y/O CONTRASEÑA INCORRECTOS!!!");
    }
}

function cambiarLogin(){
    let x = document.getElementById("iniciarSesion");
    x.innerHTML = logout;
}

function funcLogOut(){
    let x = document.getElementById("cerrarSesion");
    x.innerHTML = login;
}



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