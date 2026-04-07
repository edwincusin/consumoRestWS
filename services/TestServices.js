//SERVICIO PARA RECUPERAR POSTS 
export const getAllPostsService = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
};

//SERVICIO PARA INSERTAR UN POST NUEVO 
export const createPostService = (post,fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigoTipoDocumento: post.codigoTipoDocumento,
            descripcion: post.descripcion
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch("http://192.168.1.8:8080/inventarios-1.0.0/rest/tiposdocumento/insertar", config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json);fnExito();});
};

//SERVICIO PARA ACTUALIZAR UN POST
export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 2, // dato no real solo simula, ya que toma el dato del url y lo actualiza  
            title: "MENSAJE FINAL",
            body: "HASTA LA VISTA BABY",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch("https://jsonplaceholder.typicode.com/posts/3", config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
};

//CONSUMIR EL SERVICIO DE FILTRAR POSTS POR USUARIO
export const getByUserIdService = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=3")
        .then((response) => { return response.json(); })
        .then((json) => { console.log(json); });
};

/*============================================================================================
            CON SERVICIO PLUBLICO : pokemon
=============================================================================================*/
export const getAllPostService1 = () => {
    fetch("https://dummyjson.com/todos") //url del servicio
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
};

export const createPostService1 = () => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: "EDWIN CUSIN CODER DE MOVILIS",
            body: "Estoy aprendiendo POST",
            userId: 10
        }),
        headers: { 'Content-type': 'application/json' }
    };
    fetch("https://dummyjson.com/posts/add", config)
        .then((response) => { return response.json(); })
        .then((json) => { console.log(json) })
};


export const updatePostService1 = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 2, // dato no real solo simula, ya que toma el dato del url y lo actualiza  
            title: "EDWIN CUSIN CODER DE KRAKEDEV >>>>>>>>>>>>>>>>>>",
            body: "Estoy aprendiendo POST",
            userId: 10
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch("https://dummyjson.com/posts/1", config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
};

/*============================================================================================
                            UTILIZAR SERVICIOS DEL PROYECTO INVENTARIOS
=============================================================================================*/
export const getDocumentTypesServices=()=>{
    fetch("http://192.168.1.8:8080/inventarios-1.0.0/rest/tiposdocumento/recuperar")
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
};