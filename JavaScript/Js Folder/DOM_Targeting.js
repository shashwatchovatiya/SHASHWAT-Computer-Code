// Other Dom Targeting method 

var shashwat;

// shashwat = document
// shashwat = document.all
// shashwat = document.documentElement 
// shashwat = document.head
// shashwat = document.links
// shashwat = document.images
// shashwat = document.all[15]
// shashwat = document.links
// shashwat = document.doctype
// shashwat = document.URL
// shashwat = document.domain
shashwat = document.baseURI
// shashwat = URL
console.log(shashwat);






// Main Dom targeting Methode 




var rajat;
// rajat = document.getElementById("content");
// rajat = document.getElementsByClassName("flex")

// rajat = document.getElementsByClassName("Shashwat");

console.log(rajat);







// DOM Get Value




var raj;
// raj = document.getElementById("footer").innerHTML;
// raj = document.getElementById("footer").getAttribute("class")
// raj = document.getElementById("content").getAttributeNode("class");
// raj = document.getElementById("content").getAttributeNode("class").value; 
raj = document.getElementById("content").attributes[0].name;


console.log(raj);



// Dom Set Value

var dhrumil;
document.getElementById("header").innerHTML=`<h1 class="text-5xl">Rajat</h1>`;
dhrumil= document.getElementById("header").innerHTML;
console.log(dhrumil);