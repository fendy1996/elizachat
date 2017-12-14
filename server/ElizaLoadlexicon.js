loadEnglexicon = function(EngLexicon){

EngLexicon.remove({});

 var lexiconList = Assets.getText("engLexicon_1000.csv");
 lexiconList = lexiconList.split("\r\n");

 for(index=0 ; index<lexiconList.length ; index++)
 {
   lexiconList[index] = lexiconList[index].split(",");
 }
 //切下去以後變陣列
 var colNames = lexiconList[0];
 for(row=1; row<lexiconList.length; row++)
 {
   var word = {};
   for (col= 0; col<lexiconList[row].length; col++)
   {
     var colName = colNames[col];
     word[colName] = lexiconList[row][col];
   }
   EngLexicon.insert(word);
}
}
