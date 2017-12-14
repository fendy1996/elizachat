weatherInfo = function(msg){
  var time = "present";
  var weatherRegex = /(weather|temperature).*in (\w+\s*\w+)/i;

 var timeRegex = /will|tomorrow/ig;
 var weatherRequest = msg.match(weatherRegex);
 //這是一個陣列裡面mathch出來會有3筆資料
 if(weatherRequest === null)
  {
    return "";
  }
  else
  {
    if(msg.match(timeRegex) !== null)
    {
      time = "future";
    }
    var lastArrayPos = weatherRequest.length-1;
    var targetCity= weatherRequest[lastArrayPos];

    var APIkey = "0f9acd286be670dbec09507843f8f78b";
    var weatherInfo;

    if(time === "present")
    {
      wtInfoURL= "http://api.openweathermap.org/data/2.5/weather?APPID="+APIkey+"&q="+targetCity+"&units=metric";
    }
    else
    {
     wtInfoURL= "http://api.openweathermap.org/data/2.5/forecast?APPID="+APIkey
      +"&q="+targetCity+"&units=metric&cnt=24";

    }
      /*var wtData = HTTP.get(wtInfoURL);
      console.log(wtData)
      wtData = wtData.data;
      var wtDataMsg ="It is"+wtData.weather[0].description+", and the cuurent temperature is "+wtData.main.temp
      +"C"+", and the highest temperature is "+wtData.main.temp_max+"C"
      +", and the lowest temperature is "+wtData.main.temp_min+"C"
      +". BTW, the wind speed is "+wtData.wind.speed+"meter/sec";
      return wtDataMsg;
      */
     var wtData, wtDataMsg

      try {
        wtData = HTTP.get(wtInfoURL);
        wtData = wtData.data;
      if(time === "present") {
        wtDataMsg = "It is "+wtData.weather[0].description+", and the cuurent temperature is "+wtData.main.temp
         +"C"+", and the highest temperature is "+wtData.main.temp_max+"C"
         +", and the lowest temperature is "+wtData.main.temp_min+"C."
       ;
      }
      else{
       wtData = wtData.list[23];

       wtDataMsg = "It is "+wtData.weather[0].description+" tommorow, and the expected temperature is "+wtData.main.temp
        +"C"+", and the highest temperature is "+wtData.main.temp_max+"C"
        +", and the lowest temperature is "+wtData.main.temp_min+"C.";
      }
        return wtDataMsg;

      } catch (error)
      {
        if(error.response.data.cod === "404")
        {
          return"Sorry, I don't know this city."
        }
        else {
         return"Sorry, your internet connection is wrong."
        }
      }
  }

     // HTTP.get(weatherInfoURL,processWtData)
};



/*var  processWtData= function(error, result){
  var wtData;

if(error !== null)
  {
    wtData = error.response.data;
   if (wtData.cod === "404")
   {
     console.log("Sorry, I don't know this city.")
     return"Sorry, I don't know this city.";
   }
   else{
     console.log("Sorry, your internet connection is wrong.")
    return"Sorry, your internet connection is wrong."
  }
 }
else
  {
    wtData = result.data;
    var wtresponse = wtData.weather[0].description+", and the cuurent temperature is "+wtData.main.temp
    +"C"+", and the highest temperature is "+wtData.main.temp_max+"C"
    +", and the lowest temperature is "+wtData.main.temp_min+"C"
    +". BTW, the wind speed is "+wtData.wind.speed+"meter/sec"
   console.log (wtresponse);
   return "There you go:"+ wtresponse;

  }
};
*/
