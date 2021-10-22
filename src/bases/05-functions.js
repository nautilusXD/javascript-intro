const saludar = (nombre = 'Peter') => `Hola ${nombre}`

const nombre = 'Tony'

const getUser = () => ({ uid: 'ABC123', username: 'Tony001' })
console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman'
}, {
    id: 2,
    name: 'Superman'
}]

const existe = heroes.some((n) => {
        if (n.id === 1) return true
    })
    //Desestructurar {name, id}
console.log(existe)