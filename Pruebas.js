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
        dateDead : "Actualidad",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/HTML",
        listaPersonas : ["pe1"],
        listaEntidades : ["en2"]
    },
    {
        id : "'pr2'",
        name : "SGML",
        dateCreation : "febrero de 1960",
        dateDead : "Actualidad",
        image : "https://www.iconattitude.com/icons/open_icon_library/xfce4-style/png/256/text-sgml.png",
        wiki : "https://es.wikipedia.org/wiki/SGML",
        listaPersonas : [],
        listaEntidades : [] 
    },
    {
        id : "'pr3'",
        name : "CSS",
        dateCreation : "17 de diciembre de 1996",
        dateDead : "Actualidad",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",
        wiki : "https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada",
        listaPersonas : ["pe1"],
        listaEntidades : ["en2", "en3"]
    },
    {
        id : "'pr4'",
        name : "XML",
        dateCreation : "10 de febrero de 1998",
        dateDead : "Actualidad",
        image : "https://cdn.iconscout.com/icon/free/png-256/xml-file-2330558-1950399.png",
        wiki : "https://es.wikipedia.org/wiki/Extensible_Markup_Language",
        listaPersonas : [],
        listaEntidades : ["en1", "en3"]
    },
    {
        id : "'pr5'",
        name : "HTTP",
        dateCreation : "enero de 1991",
        dateDead : "Actualidad",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/100px-HTTP_logo.svg.png",
        wiki : "https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto",
        listaPersonas : ["pe1"],
        listaEntidades : ["en3"]
    },
    {
        id : "'pr6'",
        name : "JavaScript",
        dateCreation : "En 1995",
        dateDead : "Actualidad",
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
        dateDead : "Actualidad",
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
        dateDead : "Actualidad",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/245px-IBM_logo.svg.png",
        wiki : "https://es.wikipedia.org/wiki/IBM",
        listaPersonas : [],
        borrarRelasProductos : ["pr4"]
    },
    {
        id : "'en2'",
        name : "CERN",
        dateCreation : "29 de septiembre de 1954",
        dateDead : "Actualidad",
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/CERN_logo.svg/160px-CERN_logo.svg.png",
        wiki : "https://es.wikipedia.org/wiki/Organizaci%C3%B3n_Europea_para_la_Investigaci%C3%B3n_Nuclear",
        listaPersonas : ["pe1"],
        borrarRelasProductos : ["pr1", "pr3"]
    },
    {
        id : "'en3'",
        name : "W3C",
        dateCreation : "1 de octubre de 1994",
        dateDead : "Actualidad",
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/245px-W3C%C2%AE_Icon.svg.png",
        wiki : "https://es.wikipedia.org/wiki/World_Wide_Web_Consortium",
        listaPersonas : ["pe1"],
        borrarRelasProductos : ["pr3", "pr4", "pr5", "pr6"]
    }];


let logueado = false;
let logout = '<div id="cerrarSesion"><button type="button" class="btn btn-primary sm-2" style="margin-left: 45px;" onclick="a??adirLogin()">LOGOUT</button></div>';
let login = '<div id="iniciarSesion"><form class="form-inline" action="login"><label for="user" class="mr-sm-2" style="margin-left: 45px;">Usuario:</label><input id="user" type="text" name="user" class="form-control mr-sm-2" placeholder="Usuario"/><label for="pass" class="mr-sm-2">Contrase??a:</label><input id="pass" type="password" name="password" class="form-control mr-sm-2" placeholder="Contrase??a"/><button type="button" class="btn btn-primary sm-2" onclick="funcClickLogin()">LOGIN</button></form></div>';

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
        a??adirLogout();
    }
    else{
        alert("??????USUARIO Y/O CONTRASE??A INCORRECTOS!!!");
    }
}

function a??adirLogout(){
    let x = document.getElementById("loginLogout");
    x.innerHTML = logout;
    a??adirPermisosDeEdicion();
}

function a??adirLogin(){
    let x = document.getElementById("loginLogout");
    x.innerHTML = login;
    if(logueado){
        eliminarPermisosDeEdicion();
    }
    else{
        logueado = false;
    }
}

function eliminarPermisosDeEdicion(){
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

function a??adirCabecera(){
    let header = document.getElementById("header");
    
    let headerContent = '<div class="container pt-3 my-3 border bg-dark text-center"><h1 class="text-primary">Anales de la Ciencia</h1></div>';
    header.innerHTML = headerContent;
}

function a??adirMain(){
    let main = document.getElementById("main");

    let mainContent = '<div id="loginLogout"></div><div id="tablaInfo"><table class="table table-bordered" style="margin-top: 20px;"><thead id="theadPPE"><tr><th class="text-center">PRODUCTOS</th><th class="text-center">PERSONAS</th><th class="text-center">ENTIDADES</th></tr></thead><tbody id="tbodyPPE" class="text-center"></tbody></table></div>';
    main.innerHTML = mainContent;
}

function cargarInicio(){
    a??adirCabecera();
    a??adirMain();

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
        a??adirLogout();
    }
    else{
        a??adirLogin();
    }
}

function crearBotonDelete(id){
    let del = document.createElement("button");
    let attType = document.createAttribute("type");
    attType.value = "button";
    let attClass = document.createAttribute("class");
    attClass.value = "btn btn-danger";
    let attOnclick = document.createAttribute("onclick");
    attOnclick.value = "borrarObjeto("+ id +")";
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

function borrarElemntoDeUnArray(indice, array){
    for(let i = indice ; i<array.length-1 ; i++){
        array[i] = array[i+1];
    }
    return array.splice(0, array.length-1);;
}

function borrarObjeto(id){
    let tipoObjeto = id.substring(0,2);
    let idBuscador = "'"+id+"'";
    let indice = 0;

    if(tipoObjeto == "pr"){
        indice = Productos.findIndex(encontrarIndice, idBuscador);

        console.log("Borrando el producto de Persona");
        for(let persona = 0 ; persona<Productos[indice].listaPersonas.length ; persona++){
            let indiceIdPersona = Personas.findIndex(encontrarIndice, "'"+Productos[indice].listaPersonas[persona]+"'");
            let indiceProductoBorradoBorrarRelasProductos = Personas[indiceIdPersona].borrarRelasProductos.findIndex(encontrarIndiceObjetoBorrado, id);            
            Personas[indiceIdPersona].borrarRelasProductos = borrarElemntoDeUnArray(indiceProductoBorradoBorrarRelasProductos, Personas[indiceIdPersona].borrarRelasProductos);
        }
        console.log("Borrando el producto de Entidad");
        for(let entidad = 0 ; entidad<Productos[indice].listaEntidades.length ; entidad++){
            let indiceIdEntidad = Entidades.findIndex(encontrarIndice, "'"+Productos[indice].listaEntidades[entidad]+"'");
            let indiceProductoBorradoBorrarRelasProductos = Entidades[indiceIdEntidad].borrarRelasProductos.findIndex(encontrarIndiceObjetoBorrado, id);
            Entidades[indiceIdEntidad].borrarRelasProductos = borrarElemntoDeUnArray(indiceProductoBorradoBorrarRelasProductos, Entidades[indiceIdEntidad].borrarRelasProductos);
        }
        Productos = borrarElemntoDeUnArray(indice, Productos);
    }
    else if(tipoObjeto == "pe"){
        indice = Personas.findIndex(encontrarIndice, idBuscador);

        console.log("Borrando la persona de Producto");
        for(let producto = 0 ; producto<Personas[indice].borrarRelasProductos.length ; producto++){
            let indiceIdProducto = Productos.findIndex(encontrarIndice, "'"+Personas[indice].borrarRelasProductos[producto]+"'");
            let indicePersonaBorradaListaPersonaProducto = Productos[indiceIdProducto].listaPersonas.findIndex(encontrarIndiceObjetoBorrado, id);
            Productos[indiceIdProducto].listaPersonas = borrarElemntoDeUnArray(indicePersonaBorradaListaPersonaProducto, Productos[indiceIdProducto].listaPersonas);
        }
        console.log("Borrando la persona de Entidad");
        for(let entidad = 0 ; entidad<Personas[indice].borrarRelasEntidades.length ; entidad++){
            let indiceIdEntidad = Entidades.findIndex(encontrarIndice, "'"+Personas[indice].borrarRelasEntidades[entidad]+"'");
            let indicePersonaBorradaListaPersonaEntidad = Entidades[indiceIdEntidad].listaPersonas.findIndex(encontrarIndiceObjetoBorrado, id);
            Entidades[indiceIdEntidad].listaPersonas = borrarElemntoDeUnArray(indicePersonaBorradaListaPersonaEntidad, Entidades[indiceIdEntidad].listaPersonas);
        }
        Personas = borrarElemntoDeUnArray(indice, Personas);
    }
    else{
        indice = Entidades.findIndex(encontrarIndice, idBuscador);

        console.log("Borrando la entidad de Producto");
        for(let producto = 0 ; producto<Entidades[indice].borrarRelasProductos.length ; producto++){
            let indiceIdProducto = Productos.findIndex(encontrarIndice, "'"+Entidades[indice].borrarRelasProductos[producto]+"'");
            let indiceEntidadBorradaListaEntidadProducto = Productos[indiceIdProducto].listaEntidades.findIndex(encontrarIndiceObjetoBorrado, id);
            Productos[indiceIdProducto].listaEntidades = borrarElemntoDeUnArray(indiceEntidadBorradaListaEntidadProducto, Productos[indiceIdProducto].listaEntidades);        
        }
        console.log("Borrando la entidad de Persona");
        for(let persona = 0 ; persona<Entidades[indice].listaPersonas.length ; persona++){
            let indiceIdPersona = Personas.findIndex(encontrarIndice, "'"+Entidades[indice].listaPersonas[persona]+"'");
            let indiceEntidadBorradaBorrarRelasEntidades = Personas[indiceIdPersona].borrarRelasEntidades.findIndex(encontrarIndiceObjetoBorrado, id);
            Personas[indiceIdPersona].borrarRelasEntidades = borrarElemntoDeUnArray(indiceEntidadBorradaBorrarRelasEntidades, Personas[indiceIdPersona].borrarRelasEntidades);
        }
        Entidades = borrarElemntoDeUnArray(indice, Entidades);
    }
    cargarInicio();
}

//Sustituir por buscarIndiceEnArrayDeObjetos(idBuscador) ages.findIndex(encontrarIndice, idBuscador);//ages = PPE
function encontrarIndice(objeto){
    return objeto.id == this;
}

function encontrarIndiceObjetoBorrado(objeto){
    return objeto == this;
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
        attOnclick.value = "crearObjeto('pr')";
    }
    else if(columna == 1){
        attOnclick.value = "crearObjeto('pe')";
    }
    else{
        attOnclick.value = "crearObjeto('en')";
    }

    let text = document.createTextNode("CREATE");
    cre.appendChild(text);

    cre.setAttributeNode(attType);
    cre.setAttributeNode(attClass);
    cre.setAttributeNode(attOnclick);
    
    return cre;
}

function a??adirBotonDelete(objetos){
    for(let index=0 ; index<objetos.length ; index++){
        let botonDelete = crearBotonDelete(objetos[index].id);
        
        let div = document.getElementById(objetos[index].id);

        div.appendChild(botonDelete);
    }
}

function a??adirPermisosDeEdicion(){

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

    a??adirBotonDelete(Productos);
    a??adirBotonDelete(Personas);
    a??adirBotonDelete(Entidades);
}

function crearHtmlDeLista(lista, objetos){
    let inicio = '<div class="col-sm-6">';
    let fin = '</div>';
    let total = '';
    if(lista.length == 0){
        total = inicio + 'NO HAY PERSONAS RELACIONADAS' + fin;
    }
    else{
        for(let x=0 ; x<lista.length ; x++){
            inicio += '<img src="'+objetos[objetos.findIndex(encontrarIndice, "'"+lista[x]+"'")].image+'" width="50px" height="50px"/>';
        }
        total = inicio + fin;
    }
    return total;
}

function mostrarInfoObjeto(id){ 
    let tipoObjeto = id.substring(0,2);
    let idBuscador = "'"+id+"'";
    let total = '';
    let main = document.getElementById("main");
    let botones = '';

    let iniDatos = '<div class="row"><div class="col-sm-4  text-center">';
    let nombre = '';
    let dateCreation = '';
    let dateDead = '';
    let imagen = '';
    let iframe = '';
    let finDatos = '</div>';

    if(logueado){
        botones = '<div id="inicioYeditar" class="row"><div class="col-sm-6" ><button type="button" class="btn btn-primary" style="margin-left: 70px;  margin-bottom: 5px;" onclick="cargarInicio()">INICIO</button></div><div class="col-sm-6 text-right"><button type="button" class="btn btn-info" style="margin-right: 110px; margin-bottom: 5px;" onclick="editarObjeto('+idBuscador+')">EDITAR</button></div></div>';
    }
    else{
        botones = '<div id="inicio"><button type="button" class="btn btn-primary" style="margin-left: 45px;" onclick="cargarInicio()">INICIO</button></div>';
    }

    if(tipoObjeto == "pr"){
        console.log("ES UN PRODUCTO");
        let indice = Productos.findIndex(encontrarIndice, idBuscador);
        
        nombre = '<div><b>'+Productos[indice].name+'</b></div>';
        dateCreation = '<div>'+Productos[indice].dateCreation+'</div>';
        dateDead = '<div>'+Productos[indice].dateDead+'</div>';
        imagen = '<div><img src="'+Productos[indice].image+'" class="img-thumbnail" width="300px" height="300px"/></div></div>';
        iframe = '<div class="col-sm-8"><div><iframe src="'+Productos[indice].wiki+'" width="790px" height="400px"></iframe> </div></div></div>';

        let totalPersonas = crearHtmlDeLista(Productos[indice].listaPersonas, Personas);
        let totalEntidades = crearHtmlDeLista(Productos[indice].listaEntidades, Entidades);
        let listaDePersonasyEntidades = '<div class="row text-center" style="margin-top: 5px;">'+ totalPersonas + totalEntidades +'</div>';

        total = botones + iniDatos + nombre + dateCreation + dateDead + imagen + iframe + listaDePersonasyEntidades + finDatos;
    }
    else if(tipoObjeto == "pe"){
        console.log("ES UNA PERSONA");
        let indice = Personas.findIndex(encontrarIndice, idBuscador);
        
        nombre = '<div><b>'+Personas[indice].name+'</b></div>';
        dateCreation = '<div>'+Personas[indice].dateCreation+'</div>';
        dateDead = '<div>'+Personas[indice].dateDead+'</div>';
        imagen = '<div><img src="'+Personas[indice].image+'" class="img-thumbnail" width="300px" height="300px"/></div></div>';
        iframe = '<div class="col-sm-8"><div><iframe src="'+Personas[indice].wiki+'" width="790px" height="400px"></iframe> </div></div>';
        
        total = botones + iniDatos + nombre + dateCreation + dateDead + imagen + iframe + finDatos;
    }
    else{
        console.log("ES UNA ENTIDAD");
        let indice = Entidades.findIndex(encontrarIndice, idBuscador);
        
        nombre = '<div><b>'+Entidades[indice].name+'</b></div>';
        dateCreation = '<div>'+Entidades[indice].dateCreation+'</div>';
        dateDead = '<div>'+Entidades[indice].dateDead+'</div>';
        imagen = '<div><img src="'+Entidades[indice].image+'" class="img-thumbnail" width="300px" height="300px"/></div></div>';
        iframe = '<div class="col-sm-8"><div><iframe src="'+Entidades[indice].wiki+'" width="790px" height="400px"></iframe> </div></div></div>';
        
        let totalPersonas = crearHtmlDeLista(Entidades[indice].listaPersonas, Personas);
        let listaPersonas = '<div class="row text-center" style="margin-top: 5px;">'+ totalPersonas +'</div>';

        total = botones + iniDatos + nombre + dateCreation + dateDead + imagen + iframe + listaPersonas + finDatos;
    }
    main.innerHTML = total;
}

function generarSiguienteId(Objetos, idTipoObjeto){
    if(Objetos.length == 0){
        newId = "'" + idTipoObjeto + 1 + "'";
    }
    else{
        newId = "'" + idTipoObjeto + (parseInt(Objetos[Objetos.length-1].id.substring(3,4)) + 1) + "'";
    }
    return newId;
}

function crearObjeto(idTipoObjeto){
    let botonCancelar = '<div id="cancelarCreate"><button type="button" class="btn btn-danger" style="margin-left: 45px; margin-bottom: 10px;" onclick="cargarInicio()">CANCEL</button></div>';
    let main = document.getElementById("main");
    let total = '';
    let idNewObjeto = '';


    if(idTipoObjeto == 'pr'){
        idNewObjeto = generarSiguienteId(Productos, idTipoObjeto);
        
        let formularioIni = '<div id="formularioCreate" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre del Producto:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creaci??n:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de utilidad(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Icono del Producto:</label><input id="img" type="text" class="form-control" placeholder="URL del icono del Producto"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL del Producto, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-warning sm-2" onclick="funcClickCrear('+idNewObjeto+')">CREAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';
        let optionsListaPersonas = '<div class="form-group"><label for="listaPersonas">Seleccione las Personas que tienen relaci??n con el producto (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaPersonas" multiple class="form-control">';
        let optionsListaEntidades = '<div class="form-group"><label for="listaEntidades">Seleccione las Entidades que tienen relaci??n con el producto (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaEntidades" multiple class="form-control">';
        
        optionsListaPersonas += (crearOptionsCrear(Personas) + labelSelectFin);
        optionsListaEntidades += (crearOptionsCrear(Entidades) + labelSelectFin);
        labelsSelect += (optionsListaPersonas + optionsListaEntidades);

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }
    else if(idTipoObjeto == 'pe'){
        idNewObjeto = generarSiguienteId(Personas, idTipoObjeto);

        let formularioIni = '<div id="formularioCreate" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Persona:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de nacimiento:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de defunci??n(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Foto de la Persona:</label><input id="img" type="text" class="form-control" placeholder="URL de una foto de la Persona"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Persona, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-warning sm-2" onclick="funcClickCrear('+idNewObjeto+')">CREAR</button></div>';

        total = botonCancelar + formularioIni + formularioFin;
    }
    else{
        idNewObjeto = generarSiguienteId(Entidades, idTipoObjeto);
        
        let formularioIni = '<div id="formularioCreate" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Entidad:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creaci??n:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de cierre(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Logo de la Entidad:</label><input id="img" type="text" class="form-control" placeholder="URL del Logo de la Entidad"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Entidad, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-warning sm-2" onclick="funcClickCrear('+idNewObjeto+')">CREAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';
        let optionsListaPersonas = '<div class="form-group"><label for="listaPersonas">Seleccione las Personas que tienen relaci??n con la entidad (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaPersonas" multiple class="form-control">';
        
        optionsListaPersonas += (crearOptionsCrear(Personas) + labelSelectFin);
        
        labelsSelect += optionsListaPersonas;

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }
    main.innerHTML = total;
}

function crearOptionsCrear(objetos){
    let totalOptions = '';
    let optionIni = '<option>';
    let optionFin = '</option>';
    for(let i = 0 ; i<objetos.length ; i++){
        totalOptions += (optionIni + "[" + objetos[i].id + "] " + objetos[i].name + optionFin);
    }
    return totalOptions;
}
//funcion de optimizacion
function contarOptionsSeleccionadas(idElemento){
    let array = [];
    for(let option of document.getElementById(idElemento).options){
        if(option.selected){
            array.push(option.value.substring(2,5));
        }
    }
    return array;
}
//Pendiente de revision
function actualizarBorrarRelas(arrayLista, arrayBorrarRelas, objetos){
    for(let persona = 0 ; persona<listaPersonas.length ; persona++){
        if(("'" + listaPersonas[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonas[persona] + "'")].id){
            Personas[buscarIndicePersona("'" + listaPersonas[persona] + "'")].borrarRelasProductos.push(nextId);
        }
    }
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
            let listaPersonas = contarOptionsSeleccionadas('listaPersonas');
            let listaEntidades = contarOptionsSeleccionadas('listaEntidades');
            
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
            let listaPersonas = contarOptionsSeleccionadas('listaPersonas');
            let borrarRelasProductos = [];
            
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
        let formularioIni = '<div id="formularioEdit" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre del Producto:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creaci??n:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de utilidad(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Icono del Producto:</label><input id="img" type="text" class="form-control" placeholder="URL del icono del Producto"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL del Producto, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-info" onclick="comprobarCamposAEditar('+comillasIdObjetoAEditar+')">EDITAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';

        let optionsListaPersonasA??adir = '<div class="form-group"><label for="listaPersonasA??adir">Seleccione las Personas de las que desea a??adir una relaci??n con el producto (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaPersonasA??adir" multiple class="form-control">';
        let optionsListaPersonasEliminar = '<div class="form-group"><label for="listaPersonasEliminar">Seleccione las Personas de las que desea eliminar una relaci??n con el producto (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaPersonasEliminar" multiple class="form-control">';
        let optionsListaEntidadesA??adir = '<div class="form-group"><label for="listaEntidadesA??adir">Seleccione las Entidades a las que desea a??adir una relaci??n con el producto (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaEntidadesA??adir" multiple class="form-control">';
        let optionsListaEntidadesEliminar = '<div class="form-group"><label for="listaEntidadesEliminar">Seleccione las Entidades a las que desea eliminar una relaci??n con el producto (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaEntidadesEliminar" multiple class="form-control">';

        let a??adirOEliminar = true;
        optionsListaPersonasA??adir += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaPersonas, Personas, a??adirOEliminar) + labelSelectFin);
        optionsListaPersonasEliminar += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaPersonas, Personas, !a??adirOEliminar) + labelSelectFin);
        
        optionsListaEntidadesA??adir += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaEntidades, Entidades, a??adirOEliminar) + labelSelectFin);
        optionsListaEntidadesEliminar += (crearOptionsEditar(Productos[buscarIndiceProducto(comillasIdObjetoAEditar)].listaEntidades, Entidades, !a??adirOEliminar) + labelSelectFin);

        labelsSelect += (optionsListaPersonasA??adir + optionsListaPersonasEliminar + optionsListaEntidadesA??adir + optionsListaEntidadesEliminar);

        total = botonCancelar + formularioIni + labelsSelect + formularioFin;
    }
    else if(tipoObjeto == 'pe'){
        let formularioIni = '<div id="formularioEdit" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Persona:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de nacimiento:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de defunci??n(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Foto de la Persona:</label><input id="img" type="text" class="form-control" placeholder="URL de una foto de la Persona"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Persona, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-info" onclick="comprobarCamposAEditar('+comillasIdObjetoAEditar+')">EDITAR</button></div>';

        total = botonCancelar + formularioIni + formularioFin;
    }
    else{
        let formularioIni = '<div id="formularioEdit" style="margin-left: 45px;"><div class="form-group"><label for="name">Nombre de la Entidad:</label><input id="name" type="text" class="form-control" placeholder="Nombre"/></div><div class="form-group"><label for="dateCreation">Fecha de creaci??n:</label><input id="dateCreation" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="dateDead">Fecha de cierre(Opcional):</label><input id="dateDead" type="text" class="form-control" placeholder="Fecha"/></div><div class="form-group"><label for="img">Logo de la Entidad:</label><input id="img" type="text" class="form-control" placeholder="URL del Logo de la Entidad"/></div><div class="form-group"><label for="wiki">URL WIKI:</label><input id="wiki" type="text" class="form-control" placeholder="URL de la Entidad, preferiblemente WIKIPEDIA"/></div>';
        let formularioFin = '<button type="button" class="btn btn-info" onclick="comprobarCamposAEditar('+comillasIdObjetoAEditar+')">EDITAR</button></div>';
        let labelsSelect = '';
        let labelSelectFin = '</select></div>';

        let optionsListaPersonasA??adir = '<div class="form-group"><label for="listaPersonasA??adir">Seleccione las Personas de las que desea a??adir una relaci??n con la entidad (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaPersonasA??adir" multiple class="form-control">';
        let optionsListaPersonasEliminar = '<div class="form-group"><label for="listaPersonasEliminar">Seleccione las Personas de las que desea eliminar una relaci??n con la entidad (Mantega pulsado CTRL para seleccionar m??s de una):</label><select id="listaPersonasEliminar" multiple class="form-control">';

        let a??adirOEliminar = true;
        optionsListaPersonasA??adir += (crearOptionsEditar(Entidades[buscarIndiceEntidad(comillasIdObjetoAEditar)].listaPersonas, Personas, a??adirOEliminar) + labelSelectFin);
        optionsListaPersonasEliminar += (crearOptionsEditar(Entidades[buscarIndiceEntidad(comillasIdObjetoAEditar)].listaPersonas, Personas, !a??adirOEliminar) + labelSelectFin);
        
        labelsSelect += (optionsListaPersonasA??adir + optionsListaPersonasEliminar);

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
        let listaPersonasA??adir = [];
        let listaPersonasEliminar = [];
        let listaEntidadesA??adir = [];
        let listaEntidadesEliminar = [];
        
        for(let option of document.getElementById('listaPersonasA??adir').options){
            if(option.selected){
                listaPersonasA??adir.push(option.value.substring(2,5));
            }
        }
        for(let option of document.getElementById('listaPersonasEliminar').options){
            if(option.selected){
                listaPersonasEliminar.push(option.value.substring(2,5));
            }
        }
        for(let option of document.getElementById('listaEntidadesA??adir').options){
            if(option.selected){
                listaEntidadesA??adir.push(option.value.substring(2,5));
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
        if(listaPersonasA??adir.length != 0){
            for(let persona = 0 ; persona<listaPersonasA??adir.length ; persona++){
                if(("'" + listaPersonasA??adir[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonasA??adir[persona] + "'")].id){
                    Personas[buscarIndicePersona("'" + listaPersonasA??adir[persona] + "'")].borrarRelasProductos.push(idDelObjeto);
                }
                Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaPersonas.push(listaPersonasA??adir[persona]);
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
        if(listaEntidadesA??adir.length != 0){
            for(let entidad = 0 ; entidad<listaEntidadesA??adir.length ; entidad++){
                if(("'" + listaEntidadesA??adir[entidad] + "'") == Entidades[buscarIndiceEntidad("'" + listaEntidadesA??adir[entidad] + "'")].id){
                    Entidades[buscarIndiceEntidad("'" + listaEntidadesA??adir[entidad] + "'")].borrarRelasProductos.push(idDelObjeto);
                }
                Productos[buscarIndiceProducto("'" + idDelObjeto + "'")].listaEntidades.push(listaEntidadesA??adir[entidad]);
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
        let listaPersonasA??adir = [];
        let listaPersonasEliminar = [];

        for(let option of document.getElementById('listaPersonasA??adir').options){
            if(option.selected){
                listaPersonasA??adir.push(option.value.substring(2,5));
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
        if(listaPersonasA??adir.length != 0){
            for(let persona = 0 ; persona<listaPersonasA??adir.length ; persona++){
                if(("'" + listaPersonasA??adir[persona] + "'") == Personas[buscarIndicePersona("'" + listaPersonasA??adir[persona] + "'")].id){
                    Personas[buscarIndicePersona("'" + listaPersonasA??adir[persona] + "'")].borrarRelasEntidades.push(idDelObjeto);
                }
                Entidades[buscarIndiceEntidad("'" + idDelObjeto + "'")].listaPersonas.push(listaPersonasA??adir[persona]);
            }
        }
        alert("SE HA MODIFICADO LA ENTIDAD");
    }
    mostrarInfoObjeto(idDelObjeto);
}

function crearOptionsEditar(array1, array2, a??adir){
    let totalOptions = '';
    let optionIni = '<option>';
    let optionFin = '</option>';

    if(a??adir){
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


/* Encuentra el indice de un elemento determinado
<script>
let ages = ["'pr1'", "'pr3'", "'pr7'", "'pr2'"];

function checkAdult(age) {
	
  	return age == this;
}

function myFunction() {
  	console.log(ages.findIndex(checkAdult, "'pr3'"));
}
myFunction();
</script>
*/



//https://www.youtube.com/watch?v=R8rmfD9Y5-c Array methods