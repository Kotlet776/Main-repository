document.querySelector('html').onmouseup = changeColor;   
        
            function changeColor() {
                document.body.style.backgroundColor = "";
                document.body.style.color = "";
                return false;
            }   