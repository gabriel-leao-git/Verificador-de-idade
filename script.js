function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/homem-c.png')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem-j.png')
            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'imagens/homem-a.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-v.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/mulher-c.png')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher-j.png')
            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-a.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-v.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}