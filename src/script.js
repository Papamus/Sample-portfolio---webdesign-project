function popupFunction(){
    let popupText = "Sprawdź moją ofertę jeśli jesteś zainteresowany usługami, które oferuję! Kliknij 'OK' aby przejść do mojej oferty!";
    if (window.confirm(popupText)) 
    {
        window.location.href='dla-klienta.html';
    };
}
