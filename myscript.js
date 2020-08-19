function toggleMobileMenu(){
    let mobileMenu = document.querySelector("#mobile-menu");
    let mobileMenuStyle = getComputedStyle(mobileMenu);
    if (mobileMenuStyle.display == "none"){
        mobileMenu.style.display = "inline-block";
    }
}

function untoggleMobileMenu(){
    let mobileMenu = document.querySelector("#mobile-menu");
    let mobileMenuStyle = getComputedStyle(mobileMenu);
    if (mobileMenuStyle.display == "block"){
        mobileMenu.style.display = "none";
    }
}

function funAnimation(){
    let dot = document.querySelector(".dot");
    let fun = document.querySelector("#fun");
    let smiley = document.querySelector(".smiley");
    dot.classList.remove("dot-animated");
    fun.classList.add("dot-expand-animation");
    dot.innerHTML = "";
    setTimeout(function(){
        smiley.style.display = "inline-block";
    }, 1980);

}