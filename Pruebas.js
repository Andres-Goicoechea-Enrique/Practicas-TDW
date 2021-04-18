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
    }
];

let logueado = false;
let infoUsuarioLogueado = undefined;
let logout = '<div id="cerrarSesion"><button type="button" class="btn btn-primary sm-2" style="margin-left: 45px;" onclick="addLogin()">LOGOUT</button></div>';
let login = '<div id="iniciarSesion"><form class="form-inline" action="login"><label for="user" class="mr-sm-2" style="margin-left: 45px;">Usuario:</label><input id="user" type="text" name="user" class="form-control mr-sm-2" placeholder="Usuario"/><label for="pass" class="mr-sm-2">Contraseña:</label><input id="pass" type="password" name="password" class="form-control mr-sm-2" placeholder="Contraseña"/><button type="button" class="btn btn-primary sm-2" onclick="funcClickLogin()">LOGIN</button></form></div>';

function funcClickLogin(){
    let user = document.getElementById('user');
    let password = document.getElementById('pass');
    let usuIndex=0;
    while(usuIndex < users.length && !logueado){
        if(users[usuIndex].user == user.value && users[usuIndex].password == password.value){
            logueado = true;
            infoUsuarioLogueado = users[usuIndex];
        }
        usuIndex++;
    }
    if(logueado){
        addLogout();
    }
    else{
        alert("¡¡¡USUARIO Y/O CONTRASEÑA INCORRECTOS!!!");
    }
}

function addLogout(){
    let x = document.getElementById("loginLogout");
    x.innerHTML = logout;
    addWriterOptions();
}

function addLogin(){
    let x = document.getElementById("loginLogout");
    x.innerHTML = login;
    logueado = false;
    infoUsuarioLogueado = undefined;
}

let Productos = [
    {
        id : "'pr1'",
        name : "HTML",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/HTML",
        listaPersonas : ["pe1"],
        entidades : ["en1"]
    },
    {
        id : "'pr2'",
        name : "HTML",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/HTML",
        listaPersonas : ["pe1"],
        entidades : ["en1"] 
    },
    {
        id : "'pr3'",
        name : "CSS",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/HTML",
        listaPersonas : ["pe1"],
        entidades : ["en1"]
    }];
let Personas = [
    {
        id : "'pe1'",
        name : "Tim Berners-Lee",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
        wiki : "https://es.wikipedia.org/wiki/Tim_Berners-Lee",
    }];
let Entidades = [
    {
        id : "'en1'",
        name : "PEPE FROG",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Feels_good_man.jpg/200px-Feels_good_man.jpg",
        wiki : "",
        listaPersonas : ["pe1"]
    }];

function maxFilas(){
    let max = 0;

    if(Productos.length >= Personas.length && Productos.length >= Entidades.length){
        max = Productos.length;
    }
    else if(Personas.length >= Entidades.length){
        max = Personas.length;
    }
    else{
        max = Entidades.length;
    }
    return max;
}

function addHeader(){
    let header = document.getElementById("header");
    
    let headerContent = '<div class="container pt-3 my-3 border bg-dark text-center"><h1 class="text-primary">Anales de la Ciencia</h1></div>';
    header.innerHTML = headerContent;
}

function addMain(){
    let main = document.getElementById("main");

    let mainContent = '<div id="loginLogout"></div><div id="tablaInfo"><table class="table table-bordered" style="margin-top: 20px;"><thead id="theadPPE"><tr><th class="text-center">PRODUCTOS</th><th class="text-center">PERSONAS</th><th class="text-center">ENTIDADES</th></tr></thead><tbody id="tbodyPPE" class="text-center"></tbody></table></div>';
    main.innerHTML = mainContent;
}

function cargarInformacion(){
    addHeader();
    addMain();
    if(logueado){
        addLogout();
    }
    else{
        addLogin();
    }

    let tbody = document.getElementById("tbodyPPE");

    let infoProducto;
    let infoPersona;
    let infoEntidad;

    
    for(let i=0 ; i<maxFilas() ; i++){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        infoProducto = '';
        infoPersona = '';
        infoEntidad = '';

        if(i < Productos.length){
            infoProducto += '<div><img src="'+Productos[i].image+'" class="img-thumbnail" width="50px" height="50px"/><button type="button" class="btn btn-link" onclick="showDataOfElemForReader('+Productos[i].id+')">'+Productos[i].name+'</button></div>';
        }
        if(i < Personas.length){
            infoPersona += '<div><img src="'+Personas[i].image+'" class="img-thumbnail" width="50px" height="50px"/><button type="button" class="btn btn-link" onclick="showDataOfElemForReader('+Personas[i].id+')">'+Personas[i].name+'</button></div>';
        }
        if(i < Entidades.length){
            infoEntidad += '<div><img src="'+Entidades[i].image+'" class="img-thumbnail" width="50px" height="50px"/><button type="button" class="btn btn-link" onclick="showDataOfElemForReader('+Entidades[i].id+')">'+Entidades[i].name+'</button></div>';
        }
        td1.innerHTML = infoProducto;
        td2.innerHTML = infoPersona;
        td3.innerHTML = infoEntidad;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
}

function addWriterOptions(){
    alert("IMPLEMENTAR WRITER OPTIONS");
}

function funcMostrarInfoElemento(){
    if(!logueado){
        showDataElementForReader();
    }
    else{
        showDataElementForWriter();
    }
}

function showDataOfElemForReader(id){
    alert(id.substring(0,2));
    
    let main = document.getElementById("main");
    let inicio = '<div id="inicio"><button type="button" class="btn btn-primary" style="margin-left: 45px;" onclick="cargarInformacion()">INICIO</button></div>';
    let nombre = '';
    let dateCreation = '';
    let dateDead = '';
    let imagen = '';
    let iframe = '';
    let people = '';
    let entities = '';
    main.innerHTML = inicio;
}

function showDataPersonaForReader(){
    let main = document.getElementById("main");
    let inicio = '<div id="inicio"><button type="button" class="btn btn-primary" style="margin-left: 45px;" onclick="cargarIndex()">INICIO</button></div>';
    let nombre = '';
    let dateCreation = '';
    let dateDead = '';
    let imagen = '';
    let iframe = '';
}

function showDataEntidadForReader(){
    let main = document.getElementById("main");
    let inicio = '<div id="inicio"><button type="button" class="btn btn-primary" style="margin-left: 45px;" onclick="cargarIndex()">INICIO</button></div>';
    let nombre = '';
    let dateCreation = '';
    let dateDead = '';
    let imagen = '';
    let iframe = '';
    let people = '';
}







