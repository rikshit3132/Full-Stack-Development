const getCountries = async(keyword)=>{
    try{
const response = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
const result = await response.json();
console.log(result);
return result;
    }catch(err){
        console.log("Error while fetching countries data:",err);
    }
};
export default getCountries;