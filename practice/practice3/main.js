const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: 'c8e7c03d86d8086043dc5d0fa9943de4'
}

const dateBuilder = (d) => {
    d = new Date()
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
};

const input = document.querySelector('.searchbar');
const container = document.querySelector('.location-container');

let city = localStorage.getItem('city') || 'Yekaterinburg';
let store = {};

input.addEventListener('keyup', (e) => {
    const value = e.target.value;

    if (e.key === 'Enter' && value) {
        city = value;
        localStorage.setItem('city', city)
        fetchData();
        e.target.value = '';
    }
})

const fetchData = async () => {
    getLoader();
    const response = await fetch(`${api.base}weather?q=${city}&appid=${api.key}`).then(res => res.json());
    const {name, weather, main: {temp}, sys: {country}} = response;
    store = {
        name,
        weather: weather[0].main,
        temp,
        country
    };
    renderComponent()
}

const getLoader = () => {
    container.innerHTML = `<span class="loader"></span>`;
}

const renderComponent = () => {
    container.innerHTML = getContent();
}

const getContent = () => {
    const {name, weather, country} = store;
    const temp = Math.round(store.temp) - 273;

    return `<div class="location-box">
                    <div class="location">
                        ${name}, ${country}
                    </div>
                    <div class="date">${dateBuilder(new Date())}</div>
                </div>
                
                <div class="weather-box">
                    <div class="temp">${temp}°C</div>
                    <div class="weather">${weather}</div>
                </div>
            `
}

fetchData();