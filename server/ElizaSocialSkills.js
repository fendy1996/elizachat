var commonGreetings =[
  "Hello","WHAT'S UP", "HOW ARE YOU"
];

var commonFarewells= [
  "Bye","See you", "See you", "Goodbye"
];

socialResponse = function(msg){
  var responseType = "";

  var upperCaseMsg = msg.toUpperCase();

  for (index=0 ;  index<commonGreetings.length ; index++)
  {

    var greeting = commonGreetings[index].toUpperCase();
    if(upperCaseMsg.indexOf(greeting) >-1)
    {
      responseType = "greetings";
      break;
    }
  }

   for (index= 0 ; index<commonFarewells.length; index++)
   {
     var farewell = commonFarewells[index].toUpperCase();
     if(upperCaseMsg.indexOf(farewell) >-1)
     {
       responseType = "farewells";
       break;
     }
   }



if(responseType === "greetings")
{
  return "Hi,Nice to meet you.";
  //多加一點回覆的GREETINGS
}
else if (responseType === "farewells")
{
  return "See you again!";
}
else
{
  return"";
}
};
