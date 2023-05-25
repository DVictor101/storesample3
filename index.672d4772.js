//SELECTING THE HTM L FEATURES WITH ID
const homeList = document.getElementById("store_home");
const featuresList = document.getElementById("store_features");
const servicesList = document.getElementById("store_services");
const contactList = document.getElementById("store_contact");
const helpList = document.getElementById("store_help");
const targetService = document.getElementById("services_list");
const targetContact = document.getElementById("contact_target");
const targetFeature = document.getElementById("target_features");
//SORTING OUT SMOOTH SCROLLING TO EACH PAGE NECESSARY
function handleScrollEvent(clickedLink, targetLink) {
    clickedLink.addEventListener("click", ()=>{
        targetLink.scrollIntoView({
            behavior: "smooth"
        });
    });
}
handleScrollEvent(servicesList, targetService);
handleScrollEvent(contactList, targetContact);
handleScrollEvent(featuresList, targetFeature);
handleScrollEvent(helpList, targetContact);
//THE ADD LOGIN TAB AND REMOVE LOG IN TAB
//SELECTING THE LOG IN BUTTON AND LOGIN TAB VARIABLE
const loginList = document.getElementById("store_login");
const loginTab = document.getElementById("login_tab");
const realSihnIn = document.getElementById("signin_realcont");
//CONTROLLING THE LOG IN TAB
loginList.addEventListener("click", function() {
    loginTab.classList.remove("hidden");
    realSihnIn.classList.remove("hidden");
});
loginTab.addEventListener("click", function() {
    loginTab.classList.add("hidden");
    realSihnIn.classList.add("hidden");
});

//# sourceMappingURL=index.672d4772.js.map
