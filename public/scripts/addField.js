 document.querySelector("#add-time")
 .addEventListener('click', cloneField)

 function cloneField() {

    //Seleciona os campos para duplicar     
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos
    const fields = newFieldContainer.querySelectorAll('inputs')


    //Limpar cada campo
    fields.forEach(function(field) {
        
        fields.value = ""        
    })



    document.querySelector('#schedule-items').appendChild(newFieldContainer)



 }