
let printBtn = document.getElementById('buttonPrint');

let flag = document.getElementById('flags');
const printCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => show(data))
}
printCountry();

const show = (country) => {
    let div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('p-1');

    country.forEach(country => {
        let divcol = document.createElement('div');
        divcol.classList.add('col-4');
        divcol.classList.add('col-md-2');
        divcol.classList.add('py-2');
        divcol.classList.add('text-center');
        divcol.innerHTML = `
        <a href="#details" class="btn btn-warning" onclick='clickLoad("${country.name.common}")'>${country.name.common}</a>
        `;

        div.appendChild(divcol);
    });
    printBtn.appendChild(div);

   
}

const clickLoad = (name) => {
    let details = `https://restcountries.com/v3.1/name/${name}`;
    fetch(details)
        .then(res => res.json())
        .then(data => printDetails(data))
}
const printDetails = (country) => {
    let currencies = country[0].currencies;
    console.log(currencies.value);

    let details = document.getElementById('details');
    details.innerHTML = `
    <div class="row align-items-center">
        <div class="col-12 col-md-3"><img class="img-fluid shadow border-4 rounded" src="${country[0].flags.png}" alt="${country[0].name.common}"></div>
        <div class="col-12 col-md-3">
        <h5>Country Name:</h5><h6>${country[0].name.common}</h6>
        <h5>City:</h5><h6>${country[0].capital}</h6>
        </div>
        <div class="col-12 col-md-3">
        <h5>Native Name:</h5><h6>${country[0].name.official}</h6>
        <h5>Population:</h5><h6>${country[0].population}</h6>
        </div>
        <div class="col-12 col-md-3">
        <h5>Currency:</h5><h6>${country[0].currencies.name}</h6>
        <h5>Region:</h5><h6>${country[0].region}</h6>
        </div>
    </div>
    `
}

