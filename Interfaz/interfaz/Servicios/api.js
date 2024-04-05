export function POST (ruta,contenido){
    console.log(contenido)
    return  fetch(ruta,{
        method:"POST",
        body: JSON.stringify({contenido}),
         headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    })
    .then(res => res.json())
}