export const darkTime = (btnDark, classDark) => {
 
    const d = document;
    const local = localStorage;
    
    
    const $themeBtn = d.querySelector(btnDark);

    
      //asi seleccionamos atributos de una etiqueta que hallamos puesto
      const $selectors = d.querySelectorAll("[data-dark]");
      
      let moon = "🌙";
      let sun = "☀️"; 

       /**  creamos 2 funciones idependientes */
    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        //****** Creamos dos variables local storge***** */
        local.setItem("theme", "light");
    }

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        //****** Creamos dos variables local storge***** */
        local.setItem("theme", "dark");
    }


    d.addEventListener("click", (e) => {
        if (e.target.matches(btnDark)) {


            if ($themeBtn.textContent === moon) {
               darkMode();
            }else{
               lightMode();
            }
        }
    });



    
    /***usamos el localStorge para guardar las variables
     * y asignarlas a las clases :)
     */

    d.addEventListener("DOMContentLoaded", (e) => {
        

        if (local.getItem("theme") === null) {
            local.setItem("theme", "light");
        }


        if (local.getItem("theme") === "light") {
            lightMode();
        }


        if (local.getItem("theme") === "dark") {
            darkMode();
        }

    });


}