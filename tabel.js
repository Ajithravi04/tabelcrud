var selectRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formDate = readFormData();
    if(selectRow === null){
        insertNewRecord(formDate);
    }
    else{
        updateRecord(formDate);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var FormData ={};
    FormData["studentname"] = document.getElementById("studentname").value;
    FormData["age"] = document.getElementById("age").value;
    FormData["collegename"] = document.getElementById("collegename").value;
    FormData["yearofpassing"] = document.getElementById("yearofpassing").value;
    return FormData;
}

//insert the data
function insertNewRecord(data){
    var table= document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    var call1=newRow.insertCell(0);
        call1.innerHTML= data.studentname;
    var call2=newRow.insertCell(1);
        call2.innerHTML= data.age;
    var call3=newRow.insertCell(2);
        call3.innerHTML= data.collegename;
    var call4=newRow.insertCell(3);
        call4.innerHTML= data.yearofpassing;
    var call5=newRow.insertCell(4);
        call5.innerHTML= `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)' >Delete</button>`  ;
}

//edit the data
function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById("studentname").value = selectRow.cells[0].innerHTML;
    document.getElementById("age").value = selectRow.cells[1].innerHTML;
    document.getElementById("collegename").value = selectRow.cells[2].innerHTML;
    document.getElementById("yearofpassing").value = selectRow.cells[3].innerHTML;

}

function updateRecord(formDate){
    selectRow.cells[0].innerHTML= formDate.studentname;
    selectRow.cells[1].innerHTML= formDate.age;
    selectRow.cells[2].innerHTML= formDate.collegename;
    selectRow.cells[3].innerHTML= formDate.yearofpassing;
}

//delete the data
function onDelete(td){
    if(confirm("Do you want to delete value")){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset tha data
function resetForm(){
    document.getElementById("studentname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("collegename").value = "";
    document.getElementById("yearofpassing").value ="";
}