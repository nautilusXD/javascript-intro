import superHeroes from "../data/heroes.js"

export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)