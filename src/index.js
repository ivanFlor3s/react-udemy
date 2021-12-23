const persona = {
    nombre: ' Raul ',
    apellido: ' Montanas',
    edad: 29
}
console.table(persona)


//Spread operator para en lugar de push
const arreglo = [1,2,3,4]
const arreglo2 = [...arreglo,5]
const arreglo3 = arreglo.map( x=> x + 1 )

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3);

//FETCH
const apikey = 'mz6MLpk2211YvtZTpqvkkQvHpLWkYvrg'

const peticion = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apikey}` )
    .then( resp => resp.json()) //concatena otra promesa
    .then( ({data}) => {
        console.log(data)
        console.log(data.images.original)
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        const h1tag = document.createElement('h1')
        h1tag.textContent = 'Hola mundo'

        document.body.append(h1tag)
        document.body.append(img)
    })
    .catch( console.warn)
