var bar1=document.getElementById("bar1")
var bar2=document.getElementById("bar2")
var bar3=document.getElementById("bar3")
var navbar=document.getElementById("navbar")
var burgerbutton=document.getElementById("burgerbutton");

burgerbutton.addEventListener("click", toggleNav, false);
navbar.addEventListener("click", closeNavByClick, false);



function toggleNav () {
	
	
	if(navbar.className === "mob-nav") {
		bar1.classList.add("rotate-bar1");
		bar2.classList.add("hidebar2");
		bar3.classList.add("rotate-bar3");
		navbar.classList.add("show-nav");
	} else {
		bar1.classList.remove("rotate-bar1");
		bar2.classList.remove("hidebar2");
		bar3.classList.remove("rotate-bar3");
		navbar.classList.remove("show-nav");
	}
	
}




function closeNavByClick() {
	bar1.classList.remove("rotate-bar1");
	bar2.classList.remove("hidebar2");
	bar3.classList.remove("rotate-bar3");
	navbar.classList.remove("show-nav");
	
}