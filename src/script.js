function popupFunction(){
    let popupText = "Sprawdź moją ofertę jeśli jesteś zainteresowany usługami, które oferuję! Kliknij 'OK' aby przejść do mojej oferty!";
    if (window.confirm(popupText)) 
    {
        window.location.href='dla-klienta.html';
    };
}

function updateTextInput(val){
    document.getElementById('textInput').value = val;
}

function countMyMoney(){
    let frontendMoney = 50;
    let backendMoney = 50;
    let seoMoney = 30;
    let fcheckbox = document.getElementById('flexCheckFirst');
    let scheckbox = document.getElementById('flexCheckSecond');
    let tcheckbox = document.getElementById('flexCheckThird');

    if (fcheckbox.checked){
        if (scheckbox.checked){
            if(tcheckbox.checked){
                let multiplicator = document.getElementById('textInput').value;
                document.getElementById('finalValue').value = (frontendMoney+backendMoney+seoMoney)*multiplicator*4;
            }
            else{
                let multiplicator = document.getElementById('textInput').value;
                document.getElementById('finalValue').value = (frontendMoney+backendMoney)*multiplicator*4;
            }
        }
        else if(tcheckbox.checked){
            let multiplicator = document.getElementById('textInput').value;
            document.getElementById('finalValue').value = (frontendMoney+seoMoney)*multiplicator*4;
        }
        else{
            let multiplicator = document.getElementById('textInput').value;
            document.getElementById('finalValue').value = frontendMoney*multiplicator*4;
        }
        
    }
    if (scheckbox.checked){
        if (fcheckbox.checked){
            if(tcheckbox.checked){
                let multiplicator = document.getElementById('textInput').value;
                document.getElementById('finalValue').value = (frontendMoney+backendMoney+seoMoney)*multiplicator*4;
            }
            else{
                let multiplicator = document.getElementById('textInput').value;
                document.getElementById('finalValue').value = (frontendMoney+backendMoney)*multiplicator*4;
            }
        }
        else if(tcheckbox.checked){
            let multiplicator = document.getElementById('textInput').value;
            document.getElementById('finalValue').value = (seoMoney+backendMoney)*multiplicator*4;
        }
        else{
            let multiplicator = document.getElementById('textInput').value;
            document.getElementById('finalValue').value = backendMoney*multiplicator*4;
        }
        
    }
    if (tcheckbox.checked){
        if (fcheckbox.checked){
            if(scheckbox.checked){
                let multiplicator = document.getElementById('textInput').value;
                document.getElementById('finalValue').value = (frontendMoney+backendMoney+seoMoney)*multiplicator*4;
            }
            else{
                let multiplicator = document.getElementById('textInput').value;
                document.getElementById('finalValue').value = (frontendMoney+seoMoney)*multiplicator*4;
            }
        }
        else if(scheckbox.checked){
            let multiplicator = document.getElementById('textInput').value;
            document.getElementById('finalValue').value = (seoMoney+backendMoney)*multiplicator*4;
        }
        else{
            let multiplicator = document.getElementById('textInput').value;
            document.getElementById('finalValue').value = seoMoney*multiplicator*4;
        }
        
    }
    if (fcheckbox.checked == false && scheckbox.checked == false && tcheckbox.checked == false){
        document.getElementById('finalValue').value = "Zaznacz usługę!";
    }
}


