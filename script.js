// Based tutorial from https://www.youtube.com/watch?v=FAOEAliMRIE&t=204s Responsive Design Portfolio | HTML CSS & Javascript | Filter Options - NoMoreHowTo Code
// select elements
let workBtns = document.querySelectorAll(".workBtn");
let allProjects = document.querySelectorAll(".project");
let artProjects = document.querySelectorAll(".art");
let logoProjects = document.querySelectorAll(".logo");
let videoProjects = document.querySelectorAll(".video");

// toggle workBtnActive
workBtns.forEach((workBtn) => {
    workBtn.addEventListener("click", () => {
        workBtns.forEach((workBtn2) => {
            workBtn2.classList.remove("workBtnActive");
        });
        workBtn.classList.add("workBtnActive");
        if (workBtn.classList.contains("art")) {
            allProjects.forEach((allProjects) => { allProjects.style = "display: none" });
            artProjects.forEach((artProjects) => { artProjects.style = "display: block" });
        }
        if (workBtn.classList.contains("logo")) {
            allProjects.forEach((allProjects) => { allProjects.style = "display: none" });
            logoProjects.forEach((logoProjects) => { logoProjects.style = "display: block" });
        }
        if (workBtn.classList.contains("video")) {
            allProjects.forEach((allProjects) => { allProjects.style = "display: none" });
            videoProjects.forEach((videoProjects) => { videoProjects.style = "display: block" });
        }
        if (workBtn.classList.contains("all")) {
            allProjects.forEach((allProjects) => { allProjects.style = "display: block" });
        }
    });
});
// Nav Collaspe toggle click
let navClose = document.querySelector(".navClose");
let navBar = document.querySelector("header ul");

navClose.addEventListener("click", () => {
    navBar.classList.toggle("ulOpen");
    navClose.classList.toggle("navCloseTrigger");
});

// Menu toggle
let menuItems = document.querySelectorAll(".menuItem");
// toggle navActive
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        menuItems.forEach((menuItem2) => { menuItem2.classList.remove("navActive") });
        menuItem.classList.add("navActive");
        navBar.classList.remove("ulOpen");
        navClose.classList.remove("navCloseTrigger");
    });
});