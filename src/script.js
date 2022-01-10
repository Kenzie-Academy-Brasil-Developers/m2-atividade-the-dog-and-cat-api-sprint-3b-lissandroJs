
async function mostraDogs(){
    const dogs = await fetch("https://api.thedogapi.com/v1/images/search").then(value => value.json())
    
    return dogs.map(dog =>{
        
        imgDogs.src = dog.url
       
    })
}


async function mostraCats(){
    const cats = await fetch("https://api.thecatapi.com/v1/images/search").then(value =>value.json())
    return cats.map(cat =>{
        
        imgCats.src = cat.url
        
    })
}
