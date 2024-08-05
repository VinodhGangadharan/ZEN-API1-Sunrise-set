async function getDetails()
{

    //get selected location value 
    let locationDetails;
        let selectedItem = document.getElementById("location");
        let value =  selectedItem.options[ selectedItem.selectedIndex].value;
        if(value!="")
        {
            try {
                document.getElementById("toggle").style.display = 'block';
                let locationDetails;
                let selectedItem = document.getElementById("location");
                let value =  selectedItem.options[ selectedItem.selectedIndex].value;
        
                    locationDetails=value;

                    //Pass location value to api to fetch details of Sunrise and Sunset

                    let data = await fetch(`https://api.sunrise-sunset.org/json?${locationDetails}&date=today&tzid=Asia/Kolkata`);
                    let weatherData = await data.json();
                  
            
                    //Display values of the location in card 

                    let today = new Date().toLocaleDateString()            
                      let date = document.getElementById("Date");
                      date.innerHTML=` <h2><i class="bi bi-calendar-week-fill"></i> <span><i> Today : ${today}</i></span></h2>`;
                    
                    let sunnrise = document.getElementById("sunrise");
                    sunnrise.innerHTML=` <h2><i class="bi bi-sunrise-fill"></i>  <span><i>SunRise : ${weatherData.results.sunrise}</i></span></h2>`;
            
                    let firstlight = document.getElementById("firstlight");
                    firstlight.innerHTML=`<h2><i class="bi bi-sunrise"></i> <span><i> First Light: ${weatherData.results.civil_twilight_begin}</i></span></h2>`;
            
                    let sunset = document.getElementById("sunset");
                    sunset.innerHTML=`<h2><i class="bi bi-sunset-fill"></i> <span><i> SunSet : ${weatherData.results.sunset}</i></span></h2>`;
            
                    let lastlight = document.getElementById("lastlight");
                    lastlight.innerHTML=`<h2><i class="bi bi-sunset"></i> <span><i> Last Light : ${weatherData.results.civil_twilight_end}</i></span></h2>`;
            
                    let daylength = document.getElementById("daylength");
                    daylength.innerHTML=`<h2><i class="bi bi-brightness-high"></i><span><i>  Day Length: ${weatherData.results.day_length}</i></span></h2>`;
                }
                
                //catch block for API

                catch (error) {
                    document.getElementById("error").innerText=`Error Message: ${error}`;
                }
            }
         
            else
            {
                // Toggle card area hide/show based on location 

                document.getElementById("toggle").style.display = 'none';
                let date = document.getElementById("Date");
                date.innerHTML="";
                let sunnrise = document.getElementById("sunrise");
                sunnrise.innerHTML="";
                let firstlight = document.getElementById("firstlight");
                firstlight.innerHTML="";
                let sunset = document.getElementById("sunset");
                sunset.innerHTML="";
                let lastlight = document.getElementById("lastlight");
                lastlight.innerHTML="";
                let daylength = document.getElementById("daylength");
                daylength.innerHTML="";
            }            
}

window.onload = function() {
    document.getElementById("toggle").style.display = 'none';
  };
