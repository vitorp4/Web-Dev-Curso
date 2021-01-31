var array = []
var eStats = window.document.querySelector('div#stats')
var eSel = window.document.querySelector('select#sel')

function inlist(list, value){
    if(list.indexOf(value) == -1)
        return false
    else
        return true 
}

function adicionar(){
    let eNum = window.document.querySelector('input#num')

    let num = Number(eNum.value)
    
    if (eNum.value.length == 0)
        window.alert('[ERRO] Insira um número!')
    else if(inlist(array, num))
        window.alert('[ERRO] O número já está na lista!')
    else {
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado`
        item.value = `Num${num}`

        eSel.appendChild(item)

        array.push(num)
    }

    eNum.value = ''
    eNum.focus()
}

function finalizar(){
    array.sort()

    if (array.length == 0)
        window.alert('[ERRO] Adicione pelo menos um número!')
    else {
        eStats.innerHTML = `Ao todo, temos ${array.length} números cadastrados.<br/><br/>
                            O maior valor informado é ${array[array.length-1]}.<br/><br/>
                            O menor valor informado é ${array[0]}.<br/><br/>
                            Somando todos os valores, temos ${array.reduce((total,num) => total+num)}.<br/><br/>
                            A média dos valores digitados é ${array.reduce((total,num) => total+num)/array.length}.`
    }
}

function clean(){
    eSel.innerHTML = ''
    eStats.innerHTML = ''
    array = []
}
