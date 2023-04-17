let cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", () =>{
        window.open("services.html", "_parent")
    })
}


window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('nav');
    const whatsapp = document.querySelector('.position-fixed');
    if(window.pageYOffset>0){
      nav.classList.add("shadow");
      whatsapp.style.bottom = "15px"
    }else{
      nav.classList.remove("shadow");
      whatsapp.style.bottom = "auto"
    }
  });




  