/* Objectives: research http requests
    Make a request to Pokeapi.co
    Receive some data about a pokemon of your choice 
    Console Log the pokemon's name, weight and height 
    Bonus: Console log the pokemon's type/s */

import https from "https";

//Practice with borrowed code from: https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js/
/*
https.get('https://jsonplaceholder.typicode.com/users', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    res.on('data', chunk => {
        data.push(chunk);
    });

    res.on('end', () => {
        console.log('Response ended: ');
        const users = JSON.parse(Buffer.concat(data).toString());

        for (let user of users) {
            console.log(`Got user with id: ${user.id}, name: ${user.name}`);
        }
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});
*/

//for the poke encyclopedia pokeapi.com
/*
https.get("https://pokeapi.co/api/v2/pokemon/ditto", res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);
    console.log(res.body);


}); */

//using fetch

fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
    });


/* another method: 
  et urlAPI = 'https://pokeapi.co/api/v2/pokemon/snorlax'
let pokeAPIresponse = await fetch(urlAPI);
let pokeData = await pokeAPIresponse.json();
//console.log(pokeData) - read with jsonviewer 
console.log(*my console log here*)
*/