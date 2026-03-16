import getCountries from "./dataFetch.js";
const inputBox = document.getElementById("search_input");
const suggestionBox = document.querySelector(".suggestion_box");
const noResults = document.querySelector(".no_results");


const populateSuggestionBox = (countries)=>{
if(countries.length > 0){
suggestionBox.classList.add("visible");
noResults.classList.remove("visible");
const fragment = document.createDocumentFragment();
countries.forEach((countryName) =>{
    const li = document.createElement("li");
    li.textContent = countryName;
    fragment.appendChild(li);
});
suggestionBox.appendChild(fragment);
}else{
    suggestionBox.classList.remove("visible");
    noResults.classList.add("visible");
}
}


const handleSuggestion = async(e)=>{
try{
const val = e.target.value.trim();
if(val.length <= 2){
    suggestionBox.classList.remove("visible");
    noResults.classList.remove("visible");
    return;
}
let countryNameArr = await getCountries(val);
countryNameArr = countryNameArr.map((country) =>country?.name?.common);
populateSuggestionBox(countryNameArr);
}catch(err){
    console.log("Error while fetching data Handle Suggestion: ",err);
}
}

function debounce(fn,delay = 1000){
    let debounceToken;
return function(...args){
    if(debounceToken){
        clearTimeout(debounceToken);
    }
debounceToken =  setTimeout(() =>{
    fn(...args);
},delay);
}
}
inputBox.addEventListener("input",debounce(handleSuggestion,5000));

suggestionBox.addEventListener("click",(event)=>{
    const selectedCountry = event.target.textContent;
    inputBox.value = selectedCountry;
    suggestionBox.classList.remove("visible");
    noResults.classList.remove("visible");
});