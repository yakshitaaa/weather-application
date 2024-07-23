
function getData(){
    const city=search.value;
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location='+city+'&format=json&u=f';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd4a2b01ed7msh65ce219f2282792p141079jsn907da754b8fe',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse response body as JSON

        // Extracting specific data
        const currentObservation = data.current_observation;
        const temperature = currentObservation.condition.temperature;
        const windSpeed = currentObservation.wind.speed;
        const humidity = currentObservation.atmosphere.humidity;

        // Displaying data in HTML elements
        document.getElementById('temp').textContent = temperature;
        document.getElementById('ws').textContent = windSpeed + ' mph';
        document.getElementById('hmdty').textContent = humidity + '%';
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
}
