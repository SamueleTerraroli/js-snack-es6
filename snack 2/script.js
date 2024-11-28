/* Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

/* *pseudo codice*
1. dichiaro un' array di oggetti --
2. popolo l'array con oggetti i quali hanno come proprietà nome, punti fatti e falli subiti
3. creo un ciclo che mostri tutti gli oggetti e ad ogni ciclo genero randomicamente il valore delle proprietà falli subiti e punti fatti
4. porto tutto in un nuovo array senza la proprietà punti fatti.
*/
const squadre =[
    {nome: 'Brescia', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Atalanta', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Roma', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Torino', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Salernitana', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Verona', puntiFatti: 0, falliSubiti: 0},
] 

for( let squadra of squadre){
    squadra.puntiFatti = getRandomNumber (0,77);
    squadra.falliSubiti= getRandomNumber (1, 100)
}
console.log(squadre);

const newClassifica = [];

for(let squadra of squadre){
    const newSquadra ={
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti,
    }
    newClassifica.push(newSquadra);

}
console.log(newClassifica);


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
