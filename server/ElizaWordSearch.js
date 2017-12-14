wordSearch = function(msg, EngLexicon){
 var wordSearchResult = "";
 if(msg.indexOf("Which 10")> -1)
{
   var allMatches;
   if(msg.indexOf("verb")>-1)
   {
     allMatches = EngLexicon.find({POS: "verb"});
   }
  else if(msg.indexOf("noun")>-1)
  {
     allMatches = EngLexicon.find({POS: "noun"});
  }
  else if(msg.indexOf("adjective")>-1)
  {
     allMatches = EngLexicon.find({POS: "adjective"});
  }
  if(allMatches !== undefined)
  {
    allMatches = allMatches.fetch();
    for(index=0; index<10 ; index++)
    {
      var randomNum = Math.random();
      randomNum = randomNum*allMatches.length;
      randomNum = Math.floor(randomNum);

      wordSearchResult = wordSearchResult+allMatches[randomNum].Word+", ";
    }
    wordSearchResult = "There you go: "+ wordSearchResult
  }
  else
  {
    wordSearchResult = "Sorry, I got nothing for you."
  }
}
 return wordSearchResult;

};
