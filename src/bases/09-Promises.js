import { getHeroById } from './08-imp-exp'
// new Promise((resolve, reject) => {
//         resolve('Promesa resuelta')
//     })
//     .then(msg => console.log(msg))
//     .catch(console.log)

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if (hero) {
                resolve(hero)
            } else {
                reject('Heroe no existe')
            }
        }, 1000)
    })
}

getHeroByIdAsync(1)
    .then(heroe => {
        console.log(`El Heroe es: ${heroe.name}`)
    })
    .catch(console.log)