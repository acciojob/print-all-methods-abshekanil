//your JS code here. If required.
function allMethods() {
  //write your code here
	const methodNames = Object.getOwnPropertyNames(Math);

	const result = methodNames.join(", ");
	return result;
}

alert(allMethods()); 
