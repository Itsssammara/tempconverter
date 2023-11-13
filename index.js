const cel = document.getElementById('cel');
        const kal = document.getElementById('kal');
        const far = document.getElementById('far');
        const reset = document.getElementById('reset');
        
        
        cel.addEventListener('keydown', function (e){
            if (e.keyCode == 13) {
                if (!isNaN(cel.value) && cel.value >= -273.15) {
                    kal.value = (parseFloat(cel.value) + 273.15).toFixed(2);
                    far.value = (parseFloat(cel.value) * 9/5 +32).toFixed(2);
                    document.querySelector('p').innerHTML = "";
                }
                else if (cel.value < -273.15) {
                    kal.value="";
                    far.value="";
                    document.querySelector('p').innerHTML = "Temperature below 0 absolute";
                }
                else {
                    clear();
                    document.querySelector('p').innerHTML = "Please enter the correct value";
                }
            }
        });

        kal.addEventListener('keydown', function (e){
            if (e.keyCode == 13) {
                if (!isNaN(kal.value) && kal.value >= 0) {
                    cel.value = (parseFloat(kal.value) - 273.15).toFixed(2);
                    far.value = (parseFloat(kal.value) * 9/5 -459.67).toFixed(2);
                    document.querySelector('p').innerHTML = "";
                }
                else if (kal.value < 0) {
                    cel.value="";
                    far.value="";
                    document.querySelector('p').innerHTML = "Temperature below 0 absolute";
                }
                else {
                    clear();
                    document.querySelector('p').innerHTML = "Please enter the correct value";
                }
            }
        });

        far.addEventListener('keydown', function (e){
            if (e.keyCode == 13) {
                if (!isNaN(far.value) && far.value >= -459.67) {
                    kal.value = ((parseFloat(far.value) + 459.67) * 5/9).toFixed(2);
                    cel.value = ((parseFloat(far.value) - 32) * 5/9).toFixed(2);
                    document.querySelector('p').innerHTML = "";
                }
                else if (far.value < -459.67) {
                    kal.value="";
                    cel.value="";
                    document.querySelector('p').innerHTML = "Temperature below 0 absolute";
                }
                else {
                    clear();
                    document.querySelector('p').innerHTML = "Please enter the correct value";
                }
            }
        });

        reset.addEventListener('click', clear);
        
        function clear() {
            cel.value="";
            kal.value="";
            far.value="";

            document.querySelector('p').innerHTML = "";
        }