


function Question(x) {    
      var checked = false;
      if (x.firstElementChild.className == "faq_active" && !checked) {
            
            x.firstElementChild.classList.remove("faq_active");
            x.firstElementChild.classList.add("faq_hidden");
            console.log(x.firstElementChild.style.height);
          
            checked = true;
      }  
      if (x.firstElementChild.className == "faq_hidden" && !checked) {
            x.firstElementChild.classList.remove("faq_hidden");
            x.firstElementChild.classList.add("faq_active");
            checked = true;
      }
  }

function SuccessfulConnect() {
      var paragraph = document.getElementById("formularioConexion");
      var text = document.createTextNode("This just got added");

paragraph.appendChild(text);
}