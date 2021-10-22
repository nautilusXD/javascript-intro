import superHeroes from "./data/heroes"

const getHeroById = (id) => superHeroes.find(hero => hero.id === id)
console.log(getHeroById(2))

const geroHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
console.log(geroHeroByOwner('DC'))