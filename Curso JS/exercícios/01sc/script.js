function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.innerHTML = '<img src = "manha.png">'
        document.body.style.background = '#edddbb'
    } else if (hora >=12 && hora <= 18){
        //Boa tarde!
        img.innerHTML = '<img src = "tarde.png">'
        document.body.style.background = '#e48c5c'
    } else{
        //Boa noite!
        img.innerHTML = '<img src = "noite.png">'
        document.body.style.background = '#151a20'
    }
}



