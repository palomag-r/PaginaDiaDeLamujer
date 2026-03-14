const datos = {
    BCN:{
        "Tecate":{ inicia:"Monumento a la Madre", hora:"12:00"},
        "San Quintín":{ inicia:"Afuera de Colegio América", hora:"07:30"},
        "Mexicali":{ inicia:"Monumento a Vicente Guerrero", hora:"15:00"},
        "Tijuana":{ inicia:"Glorieta Las Tijeras", hora:"13:00"},
    }, 
    BCS:{
        "San José del Cabo":{ inicia:"Plaza Patio ", hora:"16:30"},
        "La Paz":{ inicia:"Álvaro Obregón y Márquez de León", hora:"16:30"},
        "Loreto":{ inicia:"Plaza Central Juárez", hora:"16:00"},
    },
    CHS:{
        "Tuxtla Gutierrez":{ inicia:"UNACH del Boulevard Belisario Dominguez", hora:"16:00"},
        "Tapachula":{ inicia:"CEDECO Estación Ferroviaria", hora:"08:00"},
    },
    CHH:{
        "Ciudad Juárez":{ inicia:"Monumento a Benito Juárez", hora:"12:30"},
        "Chihuahua":{ inicia:"Glorieta de Pancho Villa", hora:"15:00"},
    },
    CDMX:{
        "CdMX":{ inicia:"Glorieta de las Mujeres que luchan", hora:"09:00"},
    },
    COA:{
        "Saltillo":{ inicia:"Explanada del Tec de Saltillo", hora:"16:00"},
    },
    COL:{
        "Colima":{ inicia:"Rotonda de las y los Desaparecidos", hora:"17:00"},
    },
    DUR:{
        "Durango":{ inicia:"Esquina H. Colegio Militar y 20 de Noviembre", hora:"17:00"},
        "Lerdo":{ inicia:"Parque Victoria", hora:"15:00"},
    },
    MEX:{
        "Ecatepec":{ inicia:"Puente de Fierro", hora:"12:00"},
        "Toluca":{ inicia:"Parque Vicente Guerrero", hora:"10:00"},
        "Tlanepantla":{ inicia:"Ayuntamiento de Tlanepantla", hora:"11:00"},
    },
    GTO:{"León":{ inicia:"Calzada de los Héroes", hora:"15:00"},},
    GRO:{
        "Acapulco":{ inicia:"Playa Tamarindo", hora:"16:00"},
    },
    HGO:{
        "Pachuca":{ inicia:"Plaza Juarez", hora:"14:00"},
    },
    JAL:{
        "Guadalajara":{ inicia:"Glorieta de los y las Desaparecidas", hora:"13:30"},
    },
    MIC:{
        "Morelia":{ inicia:"Monumento a Lázato Cárdenas", hora:"16:00"},
        "Pátzcuaro":{ inicia:"Plazuela de San Francisco", hora:"16:00"},
        "Valle de Zamora":{ inicia:"Plaza Principal de Zamora", hora:"16:00"},
        "Uruapan":{ inicia:"Glorieta de la Pepsi", hora:"16:00"},
    },
    MOR:{
        "Cuernavaca":{ inicia:"Gloriera de Tlaltenango", hora:"10:00"},
        "Puente de Ixtla":{ inicia:"Plaza del Maestro", hora:"16:00"},
    },
    NLE:{
        "Monterrey":{ inicia:"Palacio de Gobierno del Estado de Nuevo León", hora:"14:00"},
    },
    OAX:{
        "Oaxaca":{ inicia:"Fuente de las 8 regiones", hora:"14:30"},
        "Bahías de Huatulco":{ inicia:"Frente a Telmex", hora:"17:00"},
    },
    PUE:{
        "Puebla" :{inicia:"El Gallito, Paseo Bravo", hora:"16:00"},
    },
    QRO:{
        "Quéretaro":{ inicia:"Alameda Hidalgo", hora:"16:00"},
    },
    ROO:{
        "Playa del Carmen":{ inicia:"CTM con 5ta", hora:"17:30"},
        "Cancún":{ inicia:"Malecon Tajamar", hora:"16:00"},
    },
    SLP:{
        "San Luis Potosí":{ inicia:"Alameda", hora:"16:00"},
    },
    SIN:{
        "Culiacán":{ inicia:"Ayuntamiento", hora:"10:00"},
        "Mazatlán":{ inicia:"Glorieta del Venadito", hora:"15:00"},
    },
    SON:{
        "Nogales":{ inicia:"Calle Campillo, Col. Fundo Legal", hora:"13:30"},
        "Hermosillo":{inicia:"Escalinatas UNISON", hora:"16:30"},
        "Ciudad Obregón":{ inicia:"Callejon de la Republica", hora:"16:00"},
    },
    TAB:{
        "Villahermosa":{ inicia:"Parque Manuel Mastre", hora:"16:00"},
},
    YUC:{
        "Mérida":{inicia:"Parque de Mejorada", hora:"17:00"},
},
    //
    ZAC:{
        "Zacatecas": { inicia:"Máquina 3030", hora:"11:00"}
    }
    
}

// Cargar municipios de acuerdo al estado
function cargarMunicipios(){
    const estado = document.getElementById("estado").value;
    const municipioSelect = document.getElementById("municipio");

    municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';

    if(estado in datos){

        for(let municipio in datos[estado]){

            let opcion = document.createElement("option");
            opcion.value = municipio;
            opcion.text = municipio;

            municipioSelect.appendChild(opcion);
        }
    }

}

// Mostrar información
function mostrarInformacion(){

    const estado = document.getElementById("estado").value;  //optiene el estado
    const municipio = document.getElementById("municipio").value;

    const resultado = document.getElementById("resultado");

    if(estado && municipio){

        const info = datos[estado][municipio];

        resultado.innerHTML = `
        
        <h4><strong></strong> ${municipio}</h4>
        <p>Lugar: ${info.inicia}</p>
        <p>Hora:${info.hora}</p>
        `;
    }
}







