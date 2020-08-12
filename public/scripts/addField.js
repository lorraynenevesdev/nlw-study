// Procurar o botao
document.querySelector("#add-time")
// Qundo clicar no botao
.addEventListener("click" , cloneField) 

//Executa a ação
function cloneField() {
    //Duplica os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(fieldAtual) {
        //pegar o fields do momento e limpa ele 
        fieldAtual.value = ""
    })
    

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
