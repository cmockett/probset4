var addNumbers = function(str){
	var strArray = str.split("")
	// console.log(strArray)
	for(var i = 0; i<strArray.length; i++){
		var parsed = parseInt(strArray[i], 10)
		if(parsed !== NaN){
			console.log(parsed)
		}	
	}



}