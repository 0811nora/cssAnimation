const sidederH3 = document.querySelector(".sideder-h3");
const sidederBtn = document.querySelector(".sideder-btn");
const sidederBtn_p = document.querySelector(".sideder-btn-p");





sidederBtn.addEventListener("click" , function(e){
    console.log("點擊")
    sidederH3.classList.toggle("open");
    sidederH3.classList.toggle("close");

    if(sidederH3.classList.contains("open")){
        sidederBtn_p.textContent = "CLOSE"
    }else{
        sidederBtn_p.textContent = "OPEN"
    }

})