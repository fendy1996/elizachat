
//how to response more specific?//
var randomResponses = {
  neutral:
  [
    "Could You tell me more about %=%?",
    "Let me think about it."
    /*"I'm afraid that it's not a good idea.",
    "Hmmm, you can say that again.",
    "OK...It seems so interesting.",
    */
  ],
  emotional:
  [
   "Well, you seems a bit emotional while talking about %=%?"
   /*"I love you too.",
   "Cheer up!",
   "Don't give up!",
   "Tell me more!"*/
  ],
  suspicious:
  [
  "%=% is very tricky."
  /*"I can understand your anxiety.",
  "I'm not interested in this question.",
  "Is this you question?",
  "Oh please, tell me more details."*/
  ]
};



chooseRandomResponse = function(msg, msgWordsPOS, emotion, EngLexicon) {
  var finalChoice="", keyword="", synonym= "";
  var emotionResponses = randomResponses[emotion];

  var msgWords = msg.split(" ");
  for (index= msgWordsPOS.length-1;index>-1; index--)
  {
      if(msgWordsPOS[index] === "noun")
      {
        keyword = msgWords[index];
      //相同陣列的字儲存到kayword
        var searchResults = EngLexicon.findOne({Word: keyword});
        //內含四個欄位word pos synonym....
        if (searchResults !== undefined)
        {
         synonym = searchResults.Synonym;
         break;
        }
    }
  }




  var numOfChoices = emotionResponses.length;
  var randomNum = Math.random();
  randomNum = randomNum*numOfChoices;
  randomNum = Math.floor(randomNum);
  finalChoice = emotionResponses[randomNum];


  if(synonym !== "")
  {
    finalChoice = finalChoice.replace("%=%", synonym);
  }
  else
  {
     finalChoice = finalChoice.replace("%=%", "this")
  }


 console.log(finalChoice)
  return finalChoice;
};
