export const hamburger = (panelBtn, panel, menuLink) => {
   
    document.addEventListener("click", (e) => {
        console.log(e.target.matches(panelBtn));
        if (e.target.matches(panelBtn)|| e.target.matches(` ${panelBtn} * `)) {
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(panelBtn).classList.toggle("is-active");
        
        }



        if (e.target.matches(menuLink)) {
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(panelBtn).classList.remove("is-active");
        
        }
    })
} 