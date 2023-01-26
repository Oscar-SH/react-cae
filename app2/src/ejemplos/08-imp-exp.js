import  heroes, { owners }  from '../data/heroes'

//console.log( owners )

//Usar find 
export const getHeroeById = (id) => { return heroes.find( (heroe) => heroe.id === id ); }

//console.log( getHeroeById(2) );

//Usar Filter
export const getHeroesByOwner = (owner) => { return heroes.filter( (heroe) => heroe.owner === owner ); }

//console.log( getHeroesByOwner('Marvel') );