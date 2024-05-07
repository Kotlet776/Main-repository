document.querySelector('html').onmousedown = changeColor;   
        
            function changeColor() {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                return false;
            }   