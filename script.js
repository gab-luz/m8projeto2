const nameForm = document.querySelector('#nameField');
const phoneForm = document.querySelector('#phoneField');
const form = document.querySelector('#contactAddForm');
let tableBody = document.querySelector("#table-body");
let body2 = document.querySelector("table");
const contacts = [];
let lines = ''; //fica separado na memória da página


form.addEventListener('submit',function(e){
    e.preventDefault();
    //funções para rodar quando apertar submit:
    addContact();
    //updateTable();
});


function addContact(){
    if (!nameForm.value || !phoneForm.value){
        alert("Nenhum dos campos pode ficar vazio!");
        validForm = false;
    }else{
        validForm = true;
    };

    let phoneMask = /^[0-9]+$/;
    if((!phoneForm.value.match(phoneMask))){
        alert("O campo de telefone deve possuir apenas números.");
        validForm = false;
    }else{
        validForm = true;
    };

    if (validForm){
        let row = document.createElement('tr');
        let row_data = document.createElement('td');
        let row_data2 = document.createElement('td');
        row_data.innerHTML = nameForm.value;
        row_data2.innerHTML = phoneForm.value;
        row.appendChild(row_data);
        row.appendChild(row_data2);
        tableBody.append(row);
        console.log(tableBody);
    }
    
    clearFields();
};

function validation(){
    
}


function clearFields(){
    nameForm.value = ' ';
    phoneForm.value = ' ';
};