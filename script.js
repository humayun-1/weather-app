const input = document.querySelector('.input');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const atmosphere = document.querySelector('.atmosphere');
const icon = document.querySelector('.icon')

let data = {
    key: '6c485f7914d83f71af41a929a2231d9a',
    api: `api.openweathermap.org/data/2.5/weather?q={input.value}&appid={data.key}`
}


input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        async function main() {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${data.key}`);
            response = response.json();
            response.then(data => {
                weather(data);
            }).catch(err => {
                input.style.cssText = `border:2px solid red;`
                input.value = '';
            })

        }
        main();
        function weather(data) {
            input.style.cssText = `border:none;`
            city.innerText = data.name;
            temp.innerText = Math.floor(data.main.temp - 273.15);
            country.innerText = data.sys.country;
            atmosphere.innerText = data.weather[0].main;
            wind.innerText = data.wind.speed;
            humidity.innerText = data.main.humidity;
            icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" style="width: 30%;" />`;
            input.value = '';
        }
    }
})


// console.log("before async");
// async function GetData() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
//     resp.json().then(data => console.log(data))
// }
// GetData()
// console.log("after async");


// input.addEventListener('keydown', (e) => {
//     if (e.key == 'Enter') {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api.key}`)
//             .then((response) => response.json())
//             .then(data => {
//                 main(data);
//             })
//         function main(data) {
//             console.log(data);
//         }
//     }
// })