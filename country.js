let flag = document.getElementById('flags');
const printCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => show(data))
}
printCountry();
const show = (country) => {
    country.forEach(country => {

        let countryCol = document.createElement('div');
        countryCol.classList.add('col-12');
        countryCol.classList.add('col-md-6');
        countryCol.classList.add('col-lg-4');
        countryCol.classList.add('col-xl-3');
        countryCol.classList.add('py-3');

        countryCol.innerHTML = `${country.name.common} <br/> <img class="shadow border" src="${country.flags.png}" alt="${country.name.common}">`;
        flag.appendChild(countryCol);
    });
}