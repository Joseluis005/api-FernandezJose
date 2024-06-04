const content= document.getElementById("content")
const fetchData = async () =>{
    try{
        const answer = await fetch("https://rickandmortyapi.com/api/character")
        const dato = await answer.json()
        const ask = dato.results

        ask.forEach(question => {
            const item = document.createElement("div")
            item.className = "thing"
            item.innerHTML+=`
            <h1>${question.name}</h1>
            <img src="${question.image}">
            `;
            content.appendChild(item)
        });

    } catch(error){
        console.error("¡Error al cargar la página!")
    }
}
fetchData()