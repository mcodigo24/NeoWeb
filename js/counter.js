function Contar() 
{    
    document.getElementById('parrafo').innerHTML = 'Cantidad de caracteres: ' + document.getElementById('stringBox').value.length    
}

function btnLimpiar()
{
    document.getElementById('stringBox').value = ""    
    document.getElementById('stringBox').focus()    
    document.getElementById('parrafo').innerHTML = 'Cantidad de caracteres: 0'
}

function btnCopiar()
{
    var copyText = document.getElementById('stringBox')
    
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    
    document.execCommand("copy")
}
