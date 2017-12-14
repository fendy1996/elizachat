emotionChecker = function(msg){
 var emotion = "neutral";
 if (msg.indexOf("!") > -1)
{
  emotion = "emotional"
}
 else if(msg.indexOf("?") > -1)
 {
   emotion = "suspicious"
 }
 else{
   emotion = "neutral";
 }
return emotion;
}


//多一行判別情緒的lexicon
