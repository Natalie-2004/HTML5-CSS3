fetch("https://swapi.dev/api/people/1/") // it returns a promise
.then(res => {
    console.log("RESOLVED", res)
    return res.json();
})
.then((data) => {
    console.log(data)
    return fetch("https://swapi.dev/api/people/2/")
})
.then((res) => {
    console.log("SECOND REQUEST RESOLVED")
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch(e => {
    console.log("ERROR", e);
})

// const loadStarWarsPeople = async () => {
//     try {
    //     const res = await fetch("https://swapi.dev/api/people/1/");
    //     const data = await res.json();
    //     console.log(data);
//     } catch (e) {}
// }

// loadStarWarsPeople()