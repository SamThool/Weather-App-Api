const cityName = document.getElementById("cityname")
const city_name = document.getElementById("city_name")
const temp_status = document.getElementById("temp_status")
const temprealval = document.getElementById("temprealval")
const submitBtn = document.getElementById(`submitBtn`);
const datahide = document.querySelector(".middle_layer");



// https://api.openweathermap.org/data/2.5/weather?q=wardha&appid=5196bd58741fafb240058a97f459af19
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal ===""){
        city_name.innerText=`pls enter the city name and search`
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=5196bd58741fafb240058a97f459af19`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temprealval.innerText= arrdata[0].main.temp;
            console.log(arrdata[0])
            city_name.innerText= `${arrdata[0].name},${arrdata[0].sys.country}`;
            const tempmood = arrdata[0].weather[0].main;
            if(tempmood==`Clear`){
                temp_status.innerHTML="<i class='fa fa-sun' style='color:yellow' aria-hidden='true'></i>"
            }else if(tempmood==`Clouds`){
                temp_status.innerHTML="<i class='fa fa-cloud' aria-hidden='true'></i>"
            }else if (tempmood==`Rain`){
                temp_status.innerHTML="<i class='fa fa-rain' aria-hidden='true'></i>"
            }else{
                temp_status.innerHTML="<i class='fa fa-cloud' aria-hidden='true'></i>"
            }
            datahide.classList.remove('data_hide');
            console.log(data);
        }catch{
            city_name.innerText=`pls enter the city name properly`
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener(`click`,getInfo);
