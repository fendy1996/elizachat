posIdentifier = function(msg,EngLexicon){
  var msgWords = msg.split(" ");
  var msgWordsPOS = [];

  for(index=0; index< msgWords.length; index ++)
  {
    var currentWord = msgWords[index];
    var wordInfo = EngLexicon.findOne({Word: currentWord});
    if(wordInfo !== undefined)
    {
      msgWordsPOS.push(wordInfo.POS);
    }
    else
    {
      msgWordsPOS.push("na");
    }
  }

  return msgWordsPOS;
};
