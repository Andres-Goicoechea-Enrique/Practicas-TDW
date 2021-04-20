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
    if(logueado){
        eliminarPermisosWriter();
    }
    else{
        logueado = false;
    }
    infoUsuarioLogueado = undefined;
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
//BORRAR REALCIONES ENTRE OBJETOS Y TIENE COMENTARIOS
function deleteObjeto(id){
    let tipoObjeto = id.substring(0,2);// pr, pe, en
    let idBuscador = "'"+id+"'";// 'pr', 'pe', 'en'
    let indice = 0;//index del objeto

    if(tipoObjeto == "pr"){
        
        indice = buscarIndiceProducto(idBuscador);

        if(logueado){//Productos[indice].listaPersonas.length == 0 && Productos[indice].listaEntidades.length == 0

            //Borrar de borarRelaProducto de Persona, el Producto que se quiere borrar
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
            
            //Borrar de borarRelaProductos de Entidad, el Producto que se quiere borrar
            console.log("Borrando el producto de Entidad");
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
            //fin

            for(let i = indice ; i<Productos.length-1 ; i++){
                Productos[i] = Productos[i+1];
            }
            Productos = Productos.splice(0, Productos.length-1);
        }
        else{
            alert("El producto que intenta borrar aun tiene Personas y/o Entidades relacionas con el. Por favor, siga el siguiente orden de borrado: 1ºPersonas, 2ºEntidades, 3ºProductos");
        }
        
    }
    //PERSONAS
    else if(tipoObjeto == "pe"){
        indice = buscarIndicePersona(idBuscador);
        console.log("Borrando la persona de producto");
        for(let producto = 0 ; producto<Personas[indice].borrarRelasProductos.length ; producto++){//Recorrer borrarRelasProductos
            //pe1.borrarRelasProductos[producto] = pr1
            //hay que ir a pr1.listaPersonas[x].push() x = pos de pe1 en listaPersonas
            //Productos[0].listaPersonas[0].push()
            //PROBLEMA: 

            //indiceIdProducto = Productos[0], indiceIdProducto = 0
            let indiceIdProducto = buscarIndiceProducto("'"+Personas[indice].borrarRelasProductos[producto]+"'");
            
            //x = pos de 'pe1' en listaPersonas
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
        //delete entidades relas
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
        //DELETE RELAS PRODUCTOS Y RELAS ENTIDADES
        for(let i = indice ; i<Personas.length-1 ; i++){
            Personas[i] = Personas[i+1];
        }
        Personas = Personas.splice(0, Personas.length-1);
    }
    //delete en 
    else{
        indice = buscarIndiceEntidad(idBuscador);
        if(logueado){//Entidades[indice].listaPersonas.length == 0
            //Borrar de la listaEntidades de Producto, la entidad que se quiere borrar
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
            //Borrar de borarRelaEntidades de Persona, la entidad que se quiere borrar
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
            //DELETE RELAS PERSONAS
            for(let i = indice ; i<Entidades.length-1 ; i++){
                Entidades[i] = Entidades[i+1];
            }
            Entidades = Entidades.splice(0, Entidades.length-1);
        }
        else{
            alert("La entidad que intenta borrar aun tiene Personas relacionas con ella. Por favor, siga el siguiente orden de borrado: 1ºPersonas, 2ºEntidades, 3ºProductos");
        }
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
    let indiceProducto = 0;
    while(!encontrado){
        if(Personas[indiceProducto].id == idBuscador){
            encontrado = true;
        }
        indiceProducto++;
    }
    return indiceProducto - 1;
}
function buscarIndiceEntidad(idBuscador){
    let encontrado = false;
    let indiceProducto = 0;
    while(!encontrado){
        console.log(Entidades);
        if(Entidades[indiceProducto].id == idBuscador){
            encontrado = true;
        }
        indiceProducto++;
    }
    return indiceProducto - 1;
}

//funcion createObjeto()
function crearBotonCreate(){
    let cre = document.createElement("button");
    let attType = document.createAttribute("type");
    attType.value = "button";
    let attClass = document.createAttribute("class");
    attClass.value = "btn btn-warning";
    let attOnclick = document.createAttribute("onclick");
    attOnclick.value = "createObjeto()";

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
        let botonCreate = crearBotonCreate();
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
//TIENE COMENTARIOS
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
        inicio = '<div id="inicioYeditar" class="row"><div class="col-sm-6" ><button type="button" class="btn btn-primary" style="margin-left: 70px;  margin-bottom: 5px;" onclick="cargarInicio()">INICIO</button></div><div class="col-sm-6 text-right"><button type="button" class="btn btn-info" style="margin-right: 110px; margin-bottom: 5px;" onclick="editarObjeto()">EDITAR</button></div></div>';
    }
    else{
        inicio = '<div id="inicio"><button type="button" class="btn btn-primary" style="margin-left: 45px;" onclick="cargarInicio()">INICIO</button></div>';
    }


    if(tipoObjeto == "pr"){
        console.log("ES UN PRODUCTO");

        let totalPersonas = '';//string con todas las urls image de personas
        let totalEntidades = '';//string con todas las urls image de entidades

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
        //LISTAS DE PERSONAS y ENTIDADES
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
        let totalPersonas = '';//string con todas las urls image de personas

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
        //LISTAS DE PERSONAS
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


//IMPLEMENTAR
function editarObjeto(){
    alert("IMPLEMNTAR BOTON EDITAR");
}





