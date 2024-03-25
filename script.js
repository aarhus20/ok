
document.addEventListener("DOMContentLoaded", function(){
var MenuItem = document.querySelectorAll("social-liv");
var contentSections = document.querySelectorAll(".content-section");
var indretningstipsMenuItem = document.getElementById("indretningstips");
var eventsMenuItem = document.getElementById("events");
var omOsMenuItem = document.getElementById("om-os");
var kontaktMenuItem = document.getElementById("kontakt");


var socialLivContent = document.getElementById("social-liv");
var indretningstipsContent = document.getElementById("indretningstips");
var eventsContent = document.getElementById("events");
var omOsContent = document.getElementById("om-os");
var kontaktContent = document.getElementById("kontakt");


socialLivMenuItem.addEventListener("click", function() {
    hideAllContent();
    socialLivContent.style.display = "block";
});


indretningstipsMenuItem.addEventListener("click", function() {
    hideAllContent();
    indretningstipsContent.style.display = "block";
});

eventsMenuItem.addEventListener("click", function() {
    hideAllContent();
    eventsContent.style.display = "block";
});

omOsMenuItem.addEventListener("click", function() {
    hideAllContent();
    omOsContent.style.display = "block";
});

kontaktMenuItem.addEventListener("click", function() {
    
    hideAllContent();
    kontaktContent.style.display = "block";
});


function hideAllContent() {
    socialLivContent.style.display = "none";
    indretningstipsContent.style.display = "none";
    eventsContent.style.display = "none";
    omOsContent.style.display = "none";
    kontaktContent.style.display = "none";
}
});
