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
let Productos = [
    {
        id : "'pr1'",
        name : "HTML",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/HTML",
        listaPersonas : ["pe1"],
        listaEntidades : ["en2"]
    },
    {
        id : "'pr2'",
        name : "SGML",
        dateCreation : "febrero de 1960",
        dateDead : undefined,
        image : "https://www.iconattitude.com/icons/open_icon_library/xfce4-style/png/256/text-sgml.png",
        wiki : "https://es.wikipedia.org/wiki/SGML",
        listaPersonas : [],
        listaEntidades : [] 
    },
    {
        id : "'pr3'",
        name : "CSS",
        dateCreation : "17 de diciembre de 1996",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada",
        listaPersonas : ["pe1"],
        listaEntidades : ["en2", "en3"]
    },
    {
        id : "'pr4'",
        name : "XML",
        dateCreation : "10 de febrero de 1998",
        dateDead : undefined,
        image : "https://cdn.iconscout.com/icon/free/png-256/xml-file-2330558-1950399.png",
        wiki : "https://es.wikipedia.org/wiki/Extensible_Markup_Language",
        listaPersonas : [],
        listaEntidades : ["en1", "en3"]
    },
    {
        id : "'pr5'",
        name : "HTTP",
        dateCreation : "enero de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/100px-HTTP_logo.svg.png",
        wiki : "https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto",
        listaPersonas : ["pe1"],
        listaEntidades : ["en3"]
    },
    {
        id : "'pr6'",
        name : "JavaScript",
        dateCreation : "En 1995",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png",
        wiki : "https://es.wikipedia.org/wiki/JavaScript",
        listaPersonas : [],
        listaEntidades : ["en3"]
    }];
let Personas = [
    {
        id : "'pe1'",
        name : "Tim Berners-Lee",
        dateCreation : "29 de octubre de 1991",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
        wiki : "https://es.wikipedia.org/wiki/Tim_Berners-Lee",
        borrarRelasProductos : ["pr1", "pr3", "pr5"],
        borrarRelasEntidades : ["en2", "en3"]
    },
    {
        id : "'pe2'",
        name : "Vannevar Bush",
        dateCreation : "11 de marzo de 1890",
        dateDead : "28 de junio de 1974",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Vannevar_Bush_portrait.jpg/220px-Vannevar_Bush_portrait.jpg",
        wiki : "https://es.wikipedia.org/wiki/Vannevar_Bush",
        borrarRelasProductos : [],
        borrarRelasEntidades : []
    }];
let Entidades = [
    {
        id : "'en1'",
        name : "IBM",
        dateCreation : "16 de junio de 1911",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/245px-IBM_logo.svg.png",
        wiki : "https://es.wikipedia.org/wiki/IBM",
        listaPersonas : [],
        borrarRelasProductos : ["pr4"]
    },
    {
        id : "'en2'",
        name : "CERN",
        dateCreation : "29 de septiembre de 1954",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/CERN_logo.svg/160px-CERN_logo.svg.png",
        wiki : "https://es.wikipedia.org/wiki/Organizaci%C3%B3n_Europea_para_la_Investigaci%C3%B3n_Nuclear",
        listaPersonas : ["pe1"],
        borrarRelasProductos : ["pr1", "pr3"]
    },
    {
        id : "'en3'",
        name : "W3C",
        dateCreation : "1 de octubre de 1994",
        dateDead : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/245px-W3C%C2%AE_Icon.svg.png",
        wiki : "https://es.wikipedia.org/wiki/World_Wide_Web_Consortium",
        listaPersonas : ["pe1"],
        borrarRelasProductos : ["pr3", "pr4", "pr5", "pr6"]
    }];


let logueado = false;
let logout = '<div id="cerrarSesion"><button type="button" class="btn btn-primary sm-2" style="margin-left: 45px;" onclick="addLogin()">LOGOUT</button></div>';
let login = '<div id="iniciarSesion"><form class="form-inline" action="login"><label for="user" class="mr-sm-2" style="margin-left: 45px;">Usuario:</label><input id="user" type="text" name="user" class="form-control mr-sm-2" placeholder="Usuario"/><label for="pass" class="mr-sm-2">Contraseña:</label><input id="pass" type="password" name="password" class="form-control mr-sm-2" placeholder="Contraseña"/><button type="button" class="btn btn-primary sm-2" onclick="funcClickLogin()">LOGIN</button></form></div>';

function funcClickLogin(){
    let user = document.getElementById('user');
    let password = document.getElementById('pass');
    let usuIndex=0;
    while(usuIndex < users.length && !logueado){
        if(users[usuIndex].user == user.value && users[usuIndex].password == password.value){
            logueado = true;
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
    if(logueado){
        eliminarPermisosWriter();
    }
    else{
        logueado = false;
    }
}

function eliminarPermisosWriter(){
    let botonCreate = document.getElementById("filaBotonCRE");
    botonCreate.remove();
    for(let i=0 ; i<(Productos.length + Personas.length + Entidades.length) ; i++){
        let botonDelete = document.getElementById("botonDEL"); document.get
        botonDelete.remove();
    }
    logueado = false;
}

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

function cargarInicio(){
    addHeader();
    addMain();

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
            infoProducto += '<div id="'+Productos[i].id+'"><img src="'+Productos[i].image+'" class="img-thumbnail" width="50px" height="50px"/><button type="button" class="btn btn-link" onclick="mostrarInfoObjeto('+Productos[i].id+')">'+Productos[i].name+'</button></div>';
        }
        if(i < Personas.length){
            infoPersona += '<div id="'+Personas[i].id+'"><img src="'+Personas[i].image+'" class="img-thumbnail" width="50px" height="50px"/><button type="button" class="btn btn-link" onclick="mostrarInfoObjeto('+Personas[i].id+')">'+Personas[i].name+'</button></div>';
        }
        if(i < Entidades.length){
            infoEntidad += '<div id="'+Entidades[i].id+'""><img src="'+Entidades[i].image+'" class="img-thumbnail" width="50px" height="50px"/><button type="button" class="btn btn-link" onclick="mostrarInfoObjeto('+Entidades[i].id+')">'+Entidades[i].name+'</button></div>';
        }
        td1.innerHTML = infoProducto;
        td2.innerHTML = infoPersona;
        td3.innerHTML = infoEntidad;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
    if(logueado){
        addLogout();
    }
    else{
        addLogin();
    }
}

function crearBotonDelete(id){
    let del = document.createElement("button");
    let attType = document.createAttribute("type");
    attType.value = "button";
    let attClass = document.createAttribute("class");
    attClass.value = "btn btn-danger";
    let attOnclick = document.createAttribute("onclick");
    attOnclick.value = "deleteObjeto("+ id +")";
    let attId = document.createAttribute("id");
    attId.value = "botonDEL";

    let text = document.createTextNode("DELETE");
    del.appendChild(text);

    del.setAttributeNode(attId);
    del.setAttributeNode(attType);
    del.setAttributeNode(attClass);
    del.setAttributeNode(attOnclick);
    

    return del;
}

function deleteObjeto(id){
    let tipoObjeto = id.substring(0,2);
    let idBuscador = "'"+id+"'";
    let indice = 0;

    if(tipoObjeto == "pr"){
        
        indice = buscarIndiceProducto(idBuscador);
        
        console.log("Borrando el producto de Persona");
        for(let persona = 0 ; persona<Productos[indice].listaPersonas.length ; persona++){

            let indiceIdPersona = buscarIndicePersona("'"+Productos[indice].listaPersonas[persona]+"'");
            
            let find = false;
            let indiceProductoBorradoBorrarRelasProductos = 0;
            while(!find){
                if(id == Personas[indiceIdPersona].borrarRelasProductos[indiceProductoBorradoBorrarRelasProductos]){
                    find = true;
                }
                indiceProductoBorradoBorrarRelasProductos++;
            }
            indiceProductoBorradoBorrarRelasProductos--;

            for(let i = indiceProductoBorradoBorrarRelasProductos ; i<Personas[indiceIdPersona].borrarRelasProductos.length-1 ; i++){
                Personas[indiceIdPersona].borrarRelasProductos[i] = Personas[indiceIdPersona].borrarRelasProductos[i + 1];
            }
            Personas[indiceIdPersona].borrarRelasProductos = Personas[indiceIdPersona].borrarRelasProductos.slice(0, Personas[indiceIdPersona].borrarRelasProductos.length-1);
        }
        
        for(let entidad = 0 ; entidad<Productos[indice].listaEntidades.length ; entidad++){

            let indiceIdEntidad = buscarIndiceEntidad("'"+Productos[indice].listaEntidades[entidad]+"'");
            
            let find = false;
            let indiceProductoBorradoBorrarRelasProductos = 0;
            while(!find){
                if(id == Entidades[indiceIdEntidad].borrarRelasProductos[indiceProductoBorradoBorrarRelasProductos]){
                    find = true;
                }
                indiceProductoBorradoBorrarRelasProductos++;
            }
            indiceProductoBorradoBorrarRelasProductos--;

            for(let i = indiceProductoBorradoBorrarRelasProductos ; i<Entidades[indiceIdEntidad].borrarRelasProductos.length-1 ; i++){
                Entidades[indiceIdEntidad].borrarRelasProductos[i] = Entidades[indiceIdEntidad].borrarRelasProductos[i + 1];
            }
            Entidades[indiceIdEntidad].borrarRelasProductos = Entidades[indiceIdEntidad].borrarRelasProductos.slice(0, Entidades[indiceIdEntidad].borrarRelasProductos.length-1);
        }

        for(let i = indice ; i<Productos.length-1 ; i++){
            Productos[i] = Productos[i+1];
        }
        Productos = Productos.splice(0, Productos.length-1);
    }
    else if(tipoObjeto == "pe"){
        indice = buscarIndicePersona(idBuscador);
        console.log("Borrando la persona de producto");
        for(let producto = 0 ; producto<Personas[indice].borrarRelasProductos.length ; producto++){
            let indiceIdProducto = buscarIndiceProducto("'"+Personas[indice].borrarRelasProductos[producto]+"'");
            
            let find = false;
            let indicePersonaBorradaListaPersonaProducto = 0;
            while(!find){
                if(id == Productos[indiceIdProducto].listaPersonas[indicePersonaBorradaListaPersonaProducto]){
                    find = true;
                }
                indicePersonaBorradaListaPersonaProducto++;
            }
            indicePersonaBorradaListaPersonaProducto--;

            for(let i = indicePersonaBorradaListaPersonaProducto ; i<Productos[indiceIdProducto].listaPersonas.length-1 ; i++){
                Productos[indiceIdProducto].listaPersonas[i] = Productos[indiceIdProducto].listaPersonas[i + 1];
            }
            Productos[indiceIdProducto].listaPersonas = Productos[indiceIdProducto].listaPersonas.slice(0, Productos[indiceIdProducto].listaPersonas.length-1);
        }
        for(let entidad = 0 ; entidad<Personas[indice].borrarRelasEntidades.length ; entidad++){
            let indiceIdEntidad = buscarIndiceEntidad("'"+Personas[indice].borrarRelasEntidades[entidad]+"'");
            let find = false;
            let indicePersonaBorradaListaPersonaEntidad = 0;

            while(!find){
                if(id == Entidades[indiceIdEntidad].listaPersonas[indicePersonaBorradaListaPersonaEntidad]){
                    find = true;
                }
                indicePersonaBorradaListaPersonaEntidad++;
            }
            indicePersonaBorradaListaPersonaEntidad--;

            for(let i = indicePersonaBorradaListaPersonaEntidad ; i<Entidades[indiceIdEntidad].listaPersonas.length-1 ; i++){
                Entidades[indiceIdEntidad].listaPersonas[i] = Entidades[indiceIdEntidad].listaPersonas[i + 1];
            }
            Entidades[indiceIdEntidad].listaPersonas = Entidades[indiceIdEntidad].listaPersonas.slice(0, Entidades[indiceIdEntidad].listaPersonas.length-1);
        }
        
        for(let i = indice ; i<Personas.length-1 ; i++){
            Personas[i] = Personas[i+1];
        }
        Personas = Personas.splice(0, Personas.length-1);
    }
    else{
        indice = buscarIndiceEntidad(idBuscador);
        for(let producto = 0 ; producto<Entidades[indice].borrarRelasProductos.length ; producto++){

            let indiceIdProducto = buscarIndiceProducto("'"+Entidades[indice].borrarRelasProductos[producto]+"'");
            
            let find = false;
            let indiceEntidadBorradaListaEntidadProducto = 0;
            while(!find){
                if(id == Productos[indiceIdProducto].listaEntidades[indiceEntidadBorradaListaEntidadProducto]){
                    find = true;
                }
                indiceEntidadBorradaListaEntidadProducto++;
            }
            indiceEntidadBorradaListaEntidadProducto--;

            for(let i = indiceEntidadBorradaListaEntidadProducto ; i<Productos[indiceIdProducto].listaEntidades.length-1 ; i++){
                Productos[indiceIdProducto].listaEntidades[i] = Productos[indiceIdProducto].listaEntidades[i + 1];
            }
            Productos[indiceIdProducto].listaEntidades = Productos[indiceIdProducto].listaEntidades.slice(0, Productos[indiceIdProducto].listaEntidades.length-1);
        }
        for(let persona = 0 ; persona<Entidades[indice].listaPersonas.length ; persona++){

            let indiceIdPersona = buscarIndicePersona("'"+Entidades[indice].listaPersonas[persona]+"'");
            
            let find = false;
            let indiceEntidadBorradaBorrarRelasEntidades = 0;
            while(!find){
                if(id == Personas[indiceIdPersona].borrarRelasEntidades[indiceEntidadBorradaBorrarRelasEntidades]){
                    find = true;
                }
                indiceEntidadBorradaBorrarRelasEntidades++;
            }
            indiceEntidadBorradaBorrarRelasEntidades--;

            for(let i = indiceEntidadBorradaBorrarRelasEntidades ; i<Personas[indiceIdPersona].borrarRelasEntidades.length-1 ; i++){
                Personas[indiceIdPersona].borrarRelasEntidades[i] = Personas[indiceIdPersona].borrarRelasEntidades[i + 1];
            }
            Personas[indiceIdPersona].borrarRelasEntidades = Personas[indiceIdPersona].borrarRelasEntidades.slice(0, Personas[indiceIdPersona].borrarRelasEntidades.length-1);
        }
        for(let i = indice ; i<Entidades.length-1 ; i++){
            Entidades[i] = Entidades[i+1];
        }
        Entidades = Entidades.splice(0, Entidades.length-1);
    }
    cargarInicio();
}

function buscarIndiceProducto(idBuscador){
    let encontrado = false;
    let indiceProducto = 0;
    while(!encontrado){
        if(Productos[indiceProducto].id == idBuscador){
            encontrado = true;
        }
        indiceProducto++;
    }
    return indiceProducto - 1;
}
function buscarIndicePersona(idBuscador){
    let encontrado = false;
    let indicePersona = 0;
    while(!encontrado){
        if(Personas[indicePersona].id == idBuscador){
            encontrado = true;
        }
        indicePersona++;
    }
    return indicePersona - 1;
}
function buscarIndiceEntidad(idBuscador){
    let encontrado = false;
    let indiceEntidad = 0;
    while(!encontrado){
        if(Entidades[indiceEntidad].id == idBuscador){
            encontrado = true;
        }
        indiceEntidad++;
    }
    return indiceEntidad - 1;
}

function crearBotonCreate(columna){
    let cre = document.createElement("button");
    let attType = document.createAttribute("type");
    attType.value = "button";
    let attClass = document.createAttribute("class");
    attClass.value = "btn btn-warning";
    let attOnclick = document.createAttribute("onclick");
    if(columna == 0){
        attOnclick.value = "createObjeto('pr')";
    }
    else if(columna == 1){
        attOnclick.value = "createObjeto('pe')";
    }
    else{
        attOnclick.value = "createObjeto('en')";
    }

    let text = document.createTextNode("CREATE");
    cre.appendChild(text);

    cre.setAttributeNode(attType);
    cre.setAttributeNode(attClass);
    cre.setAttributeNode(attOnclick);
    
    return cre;
}

function addWriterOptions(){

    let tbody = document.getElementById("tbodyPPE");

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let numColumnas = 3;

    for(let index=0 ; index<numColumnas ; index++){
        let botonCreate = crearBotonCreate(index);
        let div = document.createElement("div");
        div.appendChild(botonCreate);

        if(index == 0){
            td1.appendChild(div);
        }
        else if(index == 1){
            td2.appendChild(div);
        }
        else{
            td3.appendChild(div);
        }
        
    }
    let attId = document.createAttribute("id");
    attId.value = "filaBotonCRE";
    tr.setAttributeNode(attId);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
    for(let index=0 ; index<Productos.length ; index++){
        let botonDelete = crearBotonDelete(Productos[index].id);
        
        let div = document.getElementById(Productos[index].id);

        div.appendChild(botonDelete);
    }
    
    for(let index=0 ; index<Personas.length ; index++){
        let botonDelete = crearBotonDelete(Personas[index].id);
        
        let div = document.getElementById(Personas[index].id);

        div.appendChild(botonDelete);
    }

    for(let index=0 ; index<Entidades.length ; index++){
        let botonDelete = crearBotonDelete(Entidades[index].id);
        
        let div = document.getElementById(Entidades[index].id);

        div.appendChild(botonDelete);
    }
}

function mostrarInfoObjeto(id){ 
    let tipoObjeto = id.substring(0,2);
    let idBuscador = "'"+id+"'";
    let total = '';
    let main = document.getElementById("main");
    let inicio = '';

    let ini = '<div class="row"><div class="col-sm-4  text-center">';
    let nombre = '';
    let dateCreation = '';
    let dateDead = '';
    let imagen = '';
    let iframe = '';
    let fin = '</div>';

    if(logueado){
        inicio = '<div id="inicioYeditar" class="row"><div class="col-sm-6" ><button type="button" class="btn btn-primary" style="margin-left: 70px;  margin-bottom: 5px;" onclick="cargarInicio()">INICIO</button></div><div class="col-sm-6 text-right"><button type="button" class="btn btn-info" style="margin-right: 110px; margin-bottom: 5px;" onclick="editarObjeto('+idBuscador+')">EDITAR</button></div></div>';
    }
    else{
        inicio = '<div id="inicio"><button type="button" class="btn btn-primary" style="margin-left: 45px;" onclick="cargarInicio()">INICIO</button></div>';
    }


    if(tipoObjeto == "pr"){
        console.log("ES UN PRODUCTO");

        let totalPersonas = '';
        let totalEntidades = '';

        let indice = buscarIndiceProducto(idBuscador);
        
        nombre = '<div><b>'+Productos[indice].name+'</b></div>';
        dateCreation = '<div>'+Productos[indice].dateCreation+'</div>';
        if(Productos[indice].dateDead == undefined){
            dateDead = '<div>Actualidad</div>';
        }
        else{
            dateDead = '<div>'+Productos[indice].dateDead+'</div>';
        }
        imagen = '<div><img src="'+Productos[indice].image+'" class="img-thumbnail" width="300px" height="300px"/></div></div>';
        iframe = '<div class="col-sm-8"><div><iframe src="'+Productos[indice].wiki+'" width="790px" height="400px"></iframe> </div></div></div>';

        let iniPersonas = '<div class="row text-center" style="margin-top: 5px;"><div class="col-sm-6">';
        let finPersonas = '</div>';
        if(Productos[indice].listaPersonas.length == 0){
            totalPersonas = iniPersonas + "NO HAY PERSONAS RELACIONADAS" + finPersonas;
        }
        else{
            for(let x=0 ; x<Productos[indice].listaPersonas.length ; x++){
                iniPersonas += '<img src="'+Personas[buscarIndicePersona("'"+Productos[indice].listaPersonas[x]+"'")].image+'" width="50px" height="50px"/>';
            }
            totalPersonas = iniPersonas + finPersonas;
        }

        let iniEntidades = '<div class="col-sm-6">';
        let finEntidades = '</div>';
        if(Productos[indice].listaEntidades.length == 0){
            totalEntidades = iniEntidades + "NO HAY ENTIDADES RELACIONADAS" + finEntidades;
        }
        else{
            for(let x=0 ; x<Productos[indice].listaEntidades.length ; x++){
                iniEntidades += '<img src="'+Entidades[buscarIndiceEntidad("'"+Productos[indice].listaEntidades[x]+"'")].image+'" width="50px" height="50px"/>';
            }
            totalEntidades = iniEntidades + finEntidades;
        }
        total = inicio + ini + nombre + dateCreation + dateDead + imagen + iframe + totalPersonas + totalEntidades + fin;
    }
    else if(tipoObjeto == "pe"){
        console.log("ES UNA PERSONA");
        let indice = buscarIndicePersona(idBuscador);
        
        nombre = '<div><b>'+Personas[indice].name+'</b></div>';
        dateCreation = '<div>'+Personas[indice].dateCreation+'</div>';
        if(Personas[indice].dateDead == undefined){
            dateDead = '<div>Actualidad</div>';
        }
        else{
            dateDead = '<div>'+Personas[indice].dateDead+'</div>';
        }
        imagen = '<div><img src="'+Personas[indice].image+'" class="img-thumbnail" width="300px" height="300px"/></div></div>';
        iframe = '<div class="col-sm-8"><div><iframe src="'+Personas[indice].wiki+'" width="790px" height="400px"></iframe> </div></div>';
        
        total = inicio + ini + nombre + dateCreation + dateDead + imagen + iframe + fin;
    }
    else{
        console.log("ES UNA ENTIDAD");
        let totalPersonas = '';

        let indice = buscarIndiceEntidad(idBuscador);
        
        nombre = '<div><b>'+Entidades[indice].name+'</b></div>';
        dateCreation = '<div>'+Entidades[indice].dateCreation+'</div>';
        if(Entidades[indice].dateDead == undefined){
            dateDead = '<div>Actualidad</div>';
        }
        else{
            dateDead = '<div>'+Entidades[indice].dateDead+'</div>';
        }
        imagen = '<div><img src="'+Entidades[indice].image+'" class="img-thumbnail" width="300px" height="300px"/></div></div>';
        iframe = '<div class="col-sm-8"><div><iframe src="'+Entidades[indice].wiki+'" width="790px" height="400px"></iframe> </div></div></div>';
        let iniPersonas = '<div class="row text-center" style="margin-top: 5px;"><div class="col-sm-6">';
        let finPersonas = '</div>';
        if(Entidades[indice].listaPersonas.length == 0){
            totalPersonas = iniPersonas + "NO HAY PERSONAS RELACIONADAS" + finPersonas;
        }
        else{
            for(let x=0 ; x<Entidades[indice].listaPersonas.length ; x++){
                iniPersonas += '<img src="'+Personas[buscarIndicePersona("'"+Entidades[indice].listaPersonas[x]+"'")].image+'" width="50px" height="50px"/>';
            }
            totalPersonas = iniPersonas + finPersonas;
        }

        total = inicio + ini + nombre + dateCreation + dateDead + imagen + iframe + totalPersonas + fin;
    }
    
    main.innerHTML = total;
}

function createObjeto(idTipoObjeto){
    let botonCancelar = '<div id="cancelarCreate"><button type="button" class="btn btn-danger" style="margin-left: 45px; margin-bottom: 10px;" onclick="cargarInicio()">CANCEL</button></div>';
    let main = document.getElementById("main");
    let total = '';
    let nextId = '';


    if(idTipoObjeto == 'pr'){
        if(Productos.length == 0){
            nextId = "'" + idTipoObjeto + 1 + "'";
        }
        else{
            nextId = "'" + idTipoObjeto + (parseInt(Productos[Productos.length-1].id.substring(3,4)) + 1) + "'";
        }
        
        let formularioIni = '<div id="formularioCreate" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre del Producto:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creación:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de utilidad(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Icono del Producto:</label><input id="img" type="text" class="form-control" placeholder="URL del icono del Producto"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL del Producto, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-warning sm-2" onclick="funcClickCrear('+nextId+')">CREAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';
        let optionsListaPersonas = '<div class="form-group"><label for="listaPersonas">Seleccione las Personas que tienen relación con el producto (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaPersonas" multiple class="form-control">';
        let optionsListaEntidades = '<div class="form-group"><label for="listaEntidades">Seleccione las Entidades que tienen relación con el producto (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaEntidades" multiple class="form-control">';
        
        optionsListaPersonas += (crearOptions(Personas) + labelSelectFin);
        optionsListaEntidades += (crearOptions(Entidades) + labelSelectFin);
        labelsSelect += (optionsListaPersonas + optionsListaEntidades);

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }
    else if(idTipoObjeto == 'pe'){
        if(Personas.length == 0){
            nextId = "'" + idTipoObjeto + 1 + "'";
        }
        else{
            nextId = "'" + idTipoObjeto + (parseInt(Personas[Personas.length-1].id.substring(3,4)) + 1) + "'";
        }

        let formularioIni = '<div id="formularioCreate" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Persona:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de nacimiento:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de defunción(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Foto de la Persona:</label><input id="img" type="text" class="form-control" placeholder="URL de una foto de la Persona"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Persona, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-warning sm-2" onclick="funcClickCrear('+nextId+')">CREAR</button></div>';

        total = botonCancelar + formularioIni + formularioFin;
    }
    else{
        if(Entidades.length == 0){
            nextId = "'" + idTipoObjeto + 1 + "'";
        }
        else{
            nextId = "'" + idTipoObjeto + (parseInt(Entidades[Entidades.length-1].id.substring(3,4)) + 1) + "'";
        }
        
        let formularioIni = '<div id="formularioCreate" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Entidad:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creación:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de cierre(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Logo de la Entidad:</label><input id="img" type="text" class="form-control" placeholder="URL del Logo de la Entidad"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Entidad, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-warning sm-2" onclick="funcClickCrear('+nextId+')">CREAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';
        let optionsListaPersonas = '<div class="form-group"><label for="listaPersonas">Seleccione las Personas que tienen relación con la entidad (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaPersonas" multiple class="form-control">';
        
        optionsListaPersonas += (crearOptions(Personas) + labelSelectFin);
        
        labelsSelect += optionsListaPersonas;

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }
    main.innerHTML = total;
}

function crearOptions(objetos){
    let totalOptions = '';
    let optionIni = '<option>';
    let optionFin = '</option>';
    for(let i = 0 ; i<objetos.length ; i++){
        totalOptions += (optionIni + "[" + objetos[i].id + "] " + objetos[i].name + optionFin);
    }
    return totalOptions;
}

function funcClickCrear(nextId){
    let idTipoObjetonextId = nextId.substring(0,2);
    
    let id = "'" + nextId + "'";
    let name = document.getElementById('name').value;
    let dateCreation = document.getElementById('dateCreation').value;
    let dateDead = document.getElementById('dateDead').value;
    let urlImg = document.getElementById('img').value;
    let wiki = document.getElementById('wiki').value;
    if(dateDead.length == 0){
        dateDead = undefined;
    }
    if(name.length == 0 || dateCreation.length == 0 || urlImg.length == 0 || wiki.length == 0){
        alert("ERROR, POR FAVOR RELLENE TODOS LOS CAMPOS OBLIGATORIOS");
    }
    else{
        if(idTipoObjetonextId == 'pr'){
            let listaPersonas = [];
            let listaEntidades = [];
            
            for(let option of document.getElementById('listaPersonas').options){
                if(option.selected){
                    listaPersonas.push(option.value.substring(2,5));
                }
            }
            for(let option of document.getElementById('listaEntidades').options){
                if(option.selected){
                    listaEntidades.push(option.value.substring(2,5));
                }
            }
            let newProducto = {id,name,dateCreation,dateDead,urlImg,wiki,listaPersonas,listaEntidades};
            Productos.push(newProducto);
            alert("NUEVO PRODUCTO CREADO");

            for(let persona = 0 ; persona<listaPersonas.length ; persona++){
                if(("'" + listaPersonas[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonas[persona] + "'")].id){
                    Personas[buscarIndicePersona("'" + listaPersonas[persona] + "'")].borrarRelasProductos.push(nextId);
                }
            }

            for(let entidad = 0 ; entidad<listaEntidades.length ; entidad++){
                if(("'" + listaEntidades[entidad] + "'") == Entidades[buscarIndiceEntidad("'" + listaEntidades[entidad] + "'")].id){
                    Entidades[buscarIndiceEntidad("'" + listaEntidades[entidad] + "'")].borrarRelasProductos.push(nextId);
                }
            }
        }
        else if(idTipoObjetonextId == 'pe'){
            let borrarRelasProductos = [];
            let borrarRelasEntidades = [];
            
            let newPersona = {id,name,dateCreation,dateDead,urlImg,wiki,borrarRelasProductos,borrarRelasEntidades};
            Personas.push(newPersona);
            alert("NUEVA PERSONA CREADA");
        }
        else{
            let listaPersonas = [];
            let borrarRelasProductos = [];

            for(let option of document.getElementById('listaPersonas').options){
                if(option.selected){
                    listaPersonas.push(option.value.substring(2,5));
                }
            }
            
            let newEntidad = {id,name,dateCreation,dateDead,urlImg,wiki,listaPersonas,borrarRelasProductos};
            Entidades.push(newEntidad);
            alert("NUEVA ENTIDAD CREADA");

            for(let persona = 0 ; persona<listaPersonas.length ; persona++){
                if(("'" + listaPersonas[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonas[persona] + "'")].id){
                    Personas[buscarIndicePersona("'" + listaPersonas[persona] + "'")].borrarRelasEntidades.push(nextId);
                }
            }
        }
        cargarInicio();
    }
    
}

function editarObjeto(idObjetoAEditar){
    let comillasIdObjetoAEditar = "'" + idObjetoAEditar + "'";
    let tipoObjeto = idObjetoAEditar.substring(0,2);

    let botonCancelar = '<div id="cancelarCreate"><button type="button" class="btn btn-danger" style="margin-left: 45px; margin-bottom: 10px;" onclick="mostrarInfoObjeto('+comillasIdObjetoAEditar+')">CANCEL</button></div>';
    let main = document.getElementById("main");
    let total = '';

    if(tipoObjeto == 'pr'){
        let formularioIni = '<div id="formularioEdit" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre del Producto:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creación:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de utilidad(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Icono del Producto:</label><input id="img" type="text" class="form-control" placeholder="URL del icono del Producto"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL del Producto, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-info" onclick="comprobarCamposAEditar('+comillasIdObjetoAEditar+')">EDITAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';

        let optionsListaPersonasAñadir = '<div class="form-group"><label for="listaPersonasAñadir">Seleccione las Personas de las que desea añadir una relación con el producto (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaPersonasAñadir" multiple class="form-control">';
        let optionsListaPersonasEliminar = '<div class="form-group"><label for="listaPersonasEliminar">Seleccione las Personas de las que desea eliminar una relación con el producto (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaPersonasEliminar" multiple class="form-control">';
        let optionsListaEntidadesAñadir = '<div class="form-group"><label for="listaEntidadesAñadir">Seleccione las Entidades a las que desea añadir una relación con el producto (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaEntidadesAñadir" multiple class="form-control">';
        let optionsListaEntidadesEliminar = '<div class="form-group"><label for="listaEntidadesEliminar">Seleccione las Entidades a las que desea eliminar una relación con el producto (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaEntidadesEliminar" multiple class="form-control">';

        let añadirOEliminar = true;
        optionsListaPersonasAñadir += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaPersonas, Personas, añadirOEliminar) + labelSelectFin);
        optionsListaPersonasEliminar += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaPersonas, Personas, !añadirOEliminar) + labelSelectFin);
        
        optionsListaEntidadesAñadir += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaEntidades, Entidades, añadirOEliminar) + labelSelectFin);
        optionsListaEntidadesEliminar += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaEntidades, Entidades, !añadirOEliminar) + labelSelectFin);

        labelsSelect += (optionsListaPersonasAñadir + optionsListaPersonasEliminar + optionsListaEntidadesAñadir + optionsListaEntidadesEliminar);

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }
    else if(tipoObjeto == 'pe'){
        let formularioIni = '<div id="formularioEdit" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Persona:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de nacimiento:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de defunción(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Foto de la Persona:</label><input id="img" type="text" class="form-control" placeholder="URL de una foto de la Persona"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Persona, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-info" onclick="comprobarCamposAEditar('+comillasIdObjetoAEditar+')">EDITAR</button></div>';

        total = botonCancelar + formularioIni + formularioFin;
    }
    else{
        let formularioIni = '<div id="formularioEdit" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Entidad:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creación:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de cierre(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Logo de la Entidad:</label><input id="img" type="text" class="form-control" placeholder="URL del Logo de la Entidad"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Entidad, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-info" onclick="comprobarCamposAEditar('+comillasIdObjetoAEditar+')">EDITAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';

        let optionsListaPersonasAñadir = '<div class="form-group"><label for="listaPersonasAñadir">Seleccione las Personas de las que desea añadir una relación con la entidad (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaPersonasAñadir" multiple class="form-control">';
        let optionsListaPersonasEliminar = '<div class="form-group"><label for="listaPersonasEliminar">Seleccione las Personas de las que desea eliminar una relación con la entidad (Mantega pulsado CTRL para seleccionar más de una):</label><select id="listaPersonasEliminar" multiple class="form-control">';

        let añadirOEliminar = true;
        optionsListaPersonasAñadir += (crearOptionsEditar(Entidades[buscarIndiceEntidad(comillasIdObjetoAEditar)].listaPersonas, Personas, añadirOEliminar) + labelSelectFin);
        optionsListaPersonasEliminar += (crearOptionsEditar(Entidades[buscarIndiceEntidad(comillasIdObjetoAEditar)].listaPersonas, Personas, !añadirOEliminar) + labelSelectFin);
        
        labelsSelect += (optionsListaPersonasAñadir + optionsListaPersonasEliminar);

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }

    main.innerHTML = total;
}

function comprobarCamposAEditar(idDelObjeto){

    let idTipoObjetoAEditarId = idDelObjeto.substring(0,2);

    let name = document.getElementById('name').value;
    let dateCreation = document.getElementById('dateCreation').value;
    let dateDead = document.getElementById('dateDead').value;
    let urlImg = document.getElementById('img').value;
    let wiki = document.getElementById('wiki').value;

    if(idTipoObjetoAEditarId == 'pr'){
        let listaPersonasAñadir = [];
        let listaPersonasEliminar = [];
        let listaEntidadesAñadir = [];
        let listaEntidadesEliminar = [];
        
        for(let option of document.getElementById('listaPersonasAñadir').options){
            if(option.selected){
                listaPersonasAñadir.push(option.value.substring(2,5));
            }
        }
        for(let option of document.getElementById('listaPersonasEliminar').options){
            if(option.selected){
                listaPersonasEliminar.push(option.value.substring(2,5));
            }
        }
        for(let option of document.getElementById('listaEntidadesAñadir').options){
            if(option.selected){
                listaEntidadesAñadir.push(option.value.substring(2,5));
            }
        }
        for(let option of document.getElementById('listaEntidadesEliminar').options){
            if(option.selected){
                listaEntidadesEliminar.push(option.value.substring(2,5));
            }
        }
 
        if(name.length != 0){
            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].name = name;
        }
        if(dateCreation.length != 0){
            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].dateCreation = dateCreation;
        }
        if(dateDead.length != 0){
            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].dateDead = dateDead;
        }
        if(urlImg.length != 0){
            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].image = urlImg;
        }
        if(wiki.length != 0){
            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].wiki = wiki;
        }
        if(listaPersonasEliminar.length != 0){
            for(let persona = 0 ; persona<listaPersonasEliminar ; persona++){
                if(("'" + listaPersonasEliminar[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].id){
                    for(let i = persona ; i<Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasProductos.length-1 ; i++){
                        Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasProductos[i] = Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasProductos[i+1];
                    }
                    Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasProductos = Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasProductos.slice(0,Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasProductos.length-1);
                }
            }
            for(let personaDELETE = 0 ; personaDELETE<listaPersonasEliminar.length ; personaDELETE++){
                for(let personaListaPersonas = 0 ; personaListaPersonas<Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas.length ; personaListaPersonas++){
                    if(listaPersonasEliminar[personaDELETE] ==  Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas[personaListaPersonas]){
                        
                        for(let i = personaListaPersonas ; i<Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas.length-1 ; i++){
                            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas[i] = Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas[i+1];
                        }
                        Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas = Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas.slice(0,Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas.length-1);
                    }
                }
            }
        }
        if(listaPersonasAñadir.length != 0){
            for(let persona = 0 ; persona<listaPersonasAñadir.length ; persona++){
                if(("'" + listaPersonasAñadir[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonasAñadir[persona] + "'")].id){
                    Personas[buscarIndicePersona("'" + listaPersonasAñadir[persona] + "'")].borrarRelasProductos.push(idDelObjeto);
                }
                Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas.push(listaPersonasAñadir[persona]);
            }
        }
        if(listaEntidadesEliminar.length != 0){
            for(let entidad = 0 ; entidad<listaEntidadesEliminar ; entidad++){
                if(("'" + listaEntidadesEliminar[entidad] + "'") == Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].id){
                    for(let i = entidad ; i<Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].borrarRelasProductos.length-1 ; i++){
                        Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].borrarRelasProductos[i] = Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].borrarRelasProductos[i+1];
                    }
                    Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].borrarRelasProductos = Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].borrarRelasProductos.slice(0,Entidades[buscarIndiceEntidad("'" + listaEntidadesEliminar[entidad] + "'")].borrarRelasProductos.length-1);
                }
            }
            for(let entidadDELETE = 0 ; entidadDELETE<listaEntidadesEliminar.length ; entidadDELETE++){
                for(let entidadListaEntidades = 0 ; entidadListaEntidades<Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades.length ; entidadListaEntidades++){
                    if(listaEntidadesEliminar[entidadDELETE] ==  Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades[entidadListaEntidades]){
                        
                        for(let i = entidadListaEntidades ; i<Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades.length-1 ; i++){
                            Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades[i] = Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades[i+1];
                        }
                        Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades = Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades.slice(0,Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades.length-1);
                    }
                }
            }
        }
        if(listaEntidadesAñadir.length != 0){
            for(let entidad = 0 ; entidad<listaEntidadesAñadir.length ; entidad++){
                if(("'" + listaEntidadesAñadir[entidad] + "'") == Entidades[buscarIndiceEntidad("'" + listaEntidadesAñadir[entidad] + "'")].id){
                    Entidades[buscarIndiceEntidad("'" + listaEntidadesAñadir[entidad] + "'")].borrarRelasProductos.push(idDelObjeto);
                }
                Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades.push(listaEntidadesAñadir[entidad]);
            }
        }

        alert("SE HA MODIFICADO EL PRODUCTO");

    }
    else if(idTipoObjetoAEditarId == 'pe'){

        if(name.length != 0){
            Personas[buscarIndicePersona("'" + idDelObjeto + "'")].name = name;
        }
        if(dateCreation.length != 0){
            Personas[buscarIndicePersona("'" + idDelObjeto + "'")].dateCreation = dateCreation;
        }
        if(dateDead.length != 0){
            Personas[buscarIndicePersona("'" + idDelObjeto + "'")].dateDead = dateDead;
        }
        if(urlImg.length != 0){
            Personas[buscarIndicePersona("'" + idDelObjeto + "'")].image = urlImg;
        }
        if(wiki.length != 0){
            Personas[buscarIndicePersona("'" + idDelObjeto + "'")].wiki = wiki;
        }
        alert("SE HA MODIFICADO LA PERSONA");
    }
    else{
        let listaPersonasAñadir = [];
        let listaPersonasEliminar = [];

        for(let option of document.getElementById('listaPersonasAñadir').options){
            if(option.selected){
                listaPersonasAñadir.push(option.value.substring(2,5));
            }
        }
        for(let option of document.getElementById('listaPersonasEliminar').options){
            if(option.selected){
                listaPersonasEliminar.push(option.value.substring(2,5));
            }
        }

        if(name.length != 0){
            Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].name = name;
        }
        if(dateCreation.length != 0){
            Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].dateCreation = dateCreation;
        }
        if(dateDead.length != 0){
            Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].dateDead = dateDead;
        }
        if(urlImg.length != 0){
            Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].image = urlImg;
        }
        if(wiki.length != 0){
            Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].wiki = wiki;
        }

        if(listaPersonasEliminar.length != 0){
            for(let persona = 0 ; persona<listaPersonasEliminar ; persona++){
                if(("'" + listaPersonasEliminar[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].id){
                    for(let i = persona ; i<Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasEntidades.length-1 ; i++){
                        Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasEntidades[i] = Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasEntidades[i+1];
                    }
                    Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasEntidades = Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasEntidades.slice(0,Personas[buscarIndicePersona("'" + listaPersonasEliminar[persona] + "'")].borrarRelasEntidades.length-1);
                }
            }
            for(let personaDELETE = 0 ; personaDELETE<listaPersonasEliminar.length ; personaDELETE++){
                for(let personaListaPersonas = 0 ; personaListaPersonas<Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas.length ; personaListaPersonas++){
                    if(listaPersonasEliminar[personaDELETE] ==  Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas[personaListaPersonas]){
                        
                        for(let i = personaListaPersonas ; i<Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas.length-1 ; i++){
                            Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas[i] = Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas[i+1];
                        }
                        Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas = Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas.slice(0,Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas.length-1);
                    }
                }
            }
        }
        if(listaPersonasAñadir.length != 0){
            for(let persona = 0 ; persona<listaPersonasAñadir.length ; persona++){
                if(("'" + listaPersonasAñadir[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonasAñadir[persona] + "'")].id){
                    Personas[buscarIndicePersona("'" + listaPersonasAñadir[persona] + "'")].borrarRelasEntidades.push(idDelObjeto);
                }
                Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas.push(listaPersonasAñadir[persona]);
            }
        }
        alert("SE HA MODIFICADO LA ENTIDAD");
    }
    mostrarInfoObjeto(idDelObjeto);
}

function crearOptionsEditar(array1, array2, añadir){
    let totalOptions = '';
    let optionIni = '<option>';
    let optionFin = '</option>';

    if(añadir){
        for(let persona = 0 ; persona<array2.length ; persona++){
            let find = false;
            for(let p = 0 ; p<array1.length ; p++){
                if(array2[persona].id.substring(1,4) == array1[p]){
                    find = true;
                }
            }
            if(!find){
                totalOptions += (optionIni + "[" + array2[persona].id + "] " + array2[persona].name + optionFin);
            } 
        }
    }
    else{
        if(array2[0].id == Personas[0].id){
            for(let p = 0 ; p<array1.length ; p++){
                totalOptions += (optionIni + "['" + array1[p] + "'] " + array2[buscarIndicePersona("'" + array1[p] + "'")].name + optionFin);
            }
        }
        else{
            for(let p = 0 ; p<array1.length ; p++){
                totalOptions += (optionIni + "['" + array1[p] + "'] " + array2[buscarIndiceEntidad("'" + array1[p] + "'")].name + optionFin);
            }
        }
        
    }
    return totalOptions;
}




