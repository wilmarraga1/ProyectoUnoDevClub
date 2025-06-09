/**Que es fetch se hacen de manera asincrona es una api  */


const convertButton=document.querySelector(".convert-button")
const convertButtonuno=document.getElementById("convert-buttoninv")
const currentselect=document.querySelector(".currency-select")
const currentselect1=document.querySelector(".currency-select1")
const tazaEl=document.getElementById('taza')
const cambioEl=document.getElementById('cambio')

function convertValues(){
    console.log("convertir A")
    const inputCurrencyValue=document.querySelector(".input-current").value
    const currencyValueToConvert=document.querySelector(".currency-value-to-convert")//valor real 
    const currencyValueConvert=document.querySelector(".currency-value") //otras monedas
    
    const pesoToday=1200
    const dolarToday=4600
    const euroToday=4900
    const libraToday=5100
    const bitcoinToday=9000
    const realToday=3500
    
    if(currentselect.value =="peso"){
        currencyValueConvert.innerHTML=new Intl.NumberFormat("es-CO",{
            style:"currency",
            currency:"COP"
        }).format(inputCurrencyValue/pesoToday)
        
    }
    
    
    if(currentselect.value =="real"){
        currencyValueConvert.innerHTML=new Intl.NumberFormat("en-BR",{
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue/realToday)
        
    }
    if(currentselect.value =="dolar"){
        currencyValueConvert.innerHTML=new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue/dolarToday)
        
    }
    if(currentselect.value =="euro"){
        currencyValueConvert.innerHTML=new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue/euroToday)
        
    }
    if(currentselect.value =="libra"){
        currencyValueConvert.innerHTML=new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue/libraToday)
        
    }
    if(currentselect.value =="bitcoin"){
        currencyValueConvert.innerHTML=new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue/bitcoinToday)
        
    }
    currencyValueToConvert.innerHTML=new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)   
}

function convertValuesinvertido(){
    
    console.log("convertir de")
    const inputCurrencyValue=document.querySelector(".input-current").value
    const currencyValueToConvertv=document.querySelector(".currency-value-to-convert")//valor real 
    const currencyValueConvertv=document.querySelector(".currency-value") //otras monedas
    
    const pesoToday=1.3
    const dolarToday=5.2
    const euroToday=6.2
    const libraToday=10.2
    const bitcoinToday=10.2
    const realToday=8.2
    
    if(currentselect.value =="peso"){
        currencyValueToConvertv.innerHTML=new Intl.NumberFormat("es-CO",{
            style:"currency",
            currency:"COP"
        }).format(inputCurrencyValue/pesoToday)
        
    }
    
    if(currentselect1.value =="real"){
        currencyValueToConvertv.innerHTML=new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue/realToday)
        
    }
    if(currentselect1.value =="dolar"){
        currencyValueToConvertv.innerHTML=new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue/dolarToday)
        
    }
    if(currentselect1.value =="euro"){
        currencyValueToConvertv.innerHTML=new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue/euroToday)
        
    }
    if(currentselect1.value =="libra"){
        currencyValueToConvertv.innerHTML=new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue/libraToday)
        
    }
    if(currentselect1.value =="bitcoin"){
        currencyValueToConvertv.innerHTML=new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue/bitcoinToday)
        
    }
    
}
function changeCurrency(){
    curreyName=document.getElementById("currency-name")
    currencyImage=document.querySelector(".currency-img")
    
    if(currentselect.value =="peso"){
        curreyName.innerHTML="Peso Colombiano"
        currencyImage.src="./assets/banderacol.png"
        
    }
    
    if(currentselect.value =="real"){
        curreyName.innerHTML="Real"
        currencyImage.src="./assets/brasil.png"
        
    }
    if(currentselect.value =="dolar"){
        curreyName.innerHTML="Dolar americano"
        currencyImage.src="./assets/estadosunidos.png"
        
    }
    if(currentselect.value =="euro"){
        curreyName.innerHTML="Euro"
        currencyImage.src="./assets/euro.png"
        
    }
    if(currentselect.value =="libra"){
        curreyName.innerHTML="Libra"
        currencyImage.src="./assets/libra.png"
        
    }
    if(currentselect.value =="bitcoin"){
        curreyName.innerHTML="Bitcoin"
        currencyImage.src="./assets/bitcoin.png"
        
    }
    convertValues()
    
}
function changeCurryuno(){
    curreyName=document.getElementById("currency-nameuno")
    currencyImage=document.querySelector(".currency-imguno")
    
    
    if(currentselect1.value =="peso"){
        curreyName.innerHTML="Peso Colombiano"
        currencyImage.src="./assets/banderacol.png"
        
    }
    if(currentselect1.value =="real"){
        curreyName.innerHTML="Real"
        currencyImage.src="./assets/brasil.png"
        
        
    }
    
    if(currentselect1.value =="dolar"){
        curreyName.innerHTML="Dolar americano"
        currencyImage.src="./assets/estadosunidos.png"
        
        
    }
    if(currentselect1.value =="euro"){
        curreyName.innerHTML="Euro"
        currencyImage.src="./assets/euro.png"
        
        
    }
    if(currentselect1.value =="libra"){
        curreyName.innerHTML="Libra"
        currencyImage.src="./assets/libra.png"
        
        
    }
    if(currentselect1.value =="bitcoin"){
        curreyName.innerHTML="Bitcoin"
        currencyImage.src="./assets/bitcoin.png"
        
    }
    convertValuesinvertido()
}
currentselect1.addEventListener("change",changeCurryuno)
currentselect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)
convertButtonuno.addEventListener("click",convertValuesinvertido)

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');



// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();