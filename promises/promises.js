// JS is a async language.
// async?
// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },0)
// console.log("3");
const request = require('request');
const apiBaseUrl = 'http://api.themoviedb.org/3';
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
// const castUrl = `${apiBaseUrl}`
// get now playing movies.
    // get, from the movie data, the cast data
        // get, from the cast data, an individual actor
            // get, individual actor, highest grossing movie

// let movieData = '';

// a promise is a constructor/class. It's built into JS.
// make a new one with the "new" keyword
// it takes 1 arg: a callback
// that callback takes 2 args:
// 1. resolve
// 2. reject
const moviePromise = new Promise((resolve, reject)=>{
    request.get(nowPlayingUrl,(err, response, body)=>{
        // when we call reject, the outside world will
        // know, our promise has failed.
        if(err){
            reject(err);
        }
        const parsedBody = JSON.parse(body);
        // console.log(parsedBody)
        // when we call resolve, the outside world
        // will know the promise is done
        resolve(parsedBody);
    });
})

// a promie has a then. The then will run whenever
// resolve is called inside the promise
// then = Promise!!!!
moviePromise.then((dataGivenToResolve)=>{
    return new Promise((resolve, reject)=>{
        // console.log(dataGivenToResolve)
        const id = dataGivenToResolve.results[0].id
        const castUrl = `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
        console.log(castUrl)
        request.get(castUrl,(err,response,body)=>{  
            const parsedBody = JSON.parse(body)
            resolve(parsedBody);
            // console.log(parsedBody);
        })
    })
}).then((actorData)=>{
    console.log(actorData)
    const actorid = actorData.cast[0].id;
    const peopleUrl = `${apiBaseUrl}/person/${actorid}?api_key=${apiKey}`;
    console.log(peopleUrl)
    request.get(peopleUrl,(err,response,body)=>{
        const parsedData = JSON.parse(body);
        console.log(parsedData)
    })
})

// .catch((dataGivenToReject)=>{
//     // if reject is called...then catch runs
//     console.log("ERROR")
//     console.log(dataGivenToReject)
// })

// const castUrl = `${apiBaseUrl}/${movieData.results[0].id}/credits?api_key=${apiKey}`
// request.get(castUrl,(err, response, body)=>{
//     // console.log(parsedBody)
// })

// console.log(moviePromise);