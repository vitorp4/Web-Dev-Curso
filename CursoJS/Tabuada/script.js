function gerarTabuada() {
    var eNum = window.document.querySelector('input#num')
    var eArea = window.document.querySelector('textarea#tarea')

    if (eNum.value.length == 0)
        window.alert('[ERRO] Digite o número!')
    else {
        var num = Number(eNum.value)

        var str = ''

        for(i=1 ; i<=10 ; i++){
            str += `${num} x ${i} = ${num*i}\n`
        }

        eArea.innerHTML = str
    }
}