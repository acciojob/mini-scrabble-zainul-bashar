let count=document.getElementById("evaluatedText").value="";
document.addEventListener("keyup",function(){
	count=document.getElementById("evaluatedText").value;
	document.querySelector("#letterCount").textContent=count.length;
})
//your code here
