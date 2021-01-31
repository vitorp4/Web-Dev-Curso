function contar(){
    var eStart = window.document.querySelector('input#start')
    var eEnd = window.document.querySelector('input#end')
    var eStep = window.document.querySelector('input#step')

    var eRes = window.document.querySelector('div#count')

    if (eStart.value.length == 0 || eEnd.value.length == 0 || eStep.value.length == 0) 
        window.alert('[ERRO] Preencha todos os dados!')
    else {
        var start = Number(eStart.value)
        var end = Number(eEnd.value)
        var step = Number(eStep.value)

        var str = 'Contando:<br/>'
        
        if (start <= end && step > 0) {
            for(i=start ; i<=end ; i+=step)
                str += i + '\u{1F449}'
            eRes.innerHTML = str + '\u{1F3c1}'
        }
        else if (start >= end && step < 0) {
            for(i=start ; i>=end ; i+=step)
                str += i + '\u{1F449}'
            eRes.innerHTML = str + '\u{1F3c1}'
        }
        else if (step == 0)
            window.alert('[ERRO] Forneça um passo diferente de zero!')
        else if (step > 0)
            window.alert('[ERRO] Forneça um passo menor que zero!')
        else
            window.alert('[ERRO] Forneça um passo maior que zero!')

    }


}