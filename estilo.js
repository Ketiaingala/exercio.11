function carregar(){
    var txt1 = document.querySelector('div.txt1')
    var img = document.querySelector('img.image')
    var data = new Date()
    var hora = data.getHours()
    txt1.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'img1.jpg' 
    }
    else{
        if(hora >= 12 && hora < 18){
            img.src = 'img2.jpg'
        
        }
        else{
            img.src = 'img3.jpg'
            document.body.style.background = '#CEDEF2'
        }
        if (hora > 23 ){
          alert('[ERRO] isso não existe')
        }
    }
}