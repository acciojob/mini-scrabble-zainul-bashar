let count; 
document.getElementById("evaluatedText").value ="";
document.addEventListener("keyup",
						  function(){
							  count=
								  document.getElementById("evaluatedText").value;
							  document.querySelector("#lettercount").textCount=count.length;
						  });//your code here
