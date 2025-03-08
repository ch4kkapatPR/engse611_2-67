let img = document.getElementById("zoom");

        img.onclick = function() {
            img.classList.toggle("azoom"); 
        }

        document.addEventListener("DOMContentLoaded", function () {

            let buttons = document.querySelectorAll("table.table button");
        
        
            buttons.forEach((button, index) => {
                button.addEventListener("click", function () {
                    window.location.href = `../challenges/challenge${index + 1}.html`;
                });
            });
        });