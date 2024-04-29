

async function fetchAPI(city) {
    const key = 'fed496d92ff667b65118c859a99d4885'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const dados = await fetch(url)
        .then(response => response.json())
    exibirResultados(dados)
}
function getValue() {
    const city = document.querySelector("#floatingInputGrid").value
    fetchAPI(city)
}

// exibindo no body
function exibirResultados(dados){
    const titulo = document.querySelector("body > div > div > div:nth-child(2) > div > div > div.card-header")
    const temperatura = document.querySelector("body > div > div > div:nth-child(2) > div > div > div.card-body > p > span")
    const max = document.querySelector("body > div > div > div:nth-child(2) > div > div > div.card-footer.text-body-secondary > span:nth-child(1)")
    const min = document.querySelector("body > div > div > div:nth-child(2) > div > div > div.card-footer.text-body-secondary > span:nth-child(2)")
    const description = document.querySelector("body > div > div > div:nth-child(2) > div > div > div.card-body > p:nth-child(3)")
    const container = document.querySelector("body > div > div > div:nth-child(2)")

    container.classList.remove("d-none")
    titulo.innerHTML = `${dados.name}, ${dados.sys.country}` 
    temperatura.innerHTML = `${Math.round(dados.main.temp)}`
    description.innerHTML = `${dados.weather[0].main}: ${dados.weather[0].description}`
    max.innerHTML = `Temperatura máxima: ${Math.round(dados.main.temp_max)}°C`
    min.innerHTML = `Temperatura mínima: ${Math.round(dados.main.temp_min)}°C`
}
