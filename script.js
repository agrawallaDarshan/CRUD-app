const table = document.getElementById("dataTable");
const Sname = document.getElementById("name");
const Sno = document.getElementById("regdno");
const Scgpa = document.getElementById("cgpa");
const Semail = document.getElementById("email");
let rowData;

document.getElementById("addbtn").addEventListener("click",()=>{
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = Sname.value;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = Sno.value;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = Scgpa.value;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = `<span>${Semail.value}</span>
    <button type="submit" class="btn btn-primary mx-2 my-1" onclick = "editData(this)">Edit</button>
    <button type="submit" class="btn btn-danger my-1" onclick = "deleteData(this)"><i class="fa fa-trash-o"></i></button>`;
    Sname.value = "";
    Sno.value = "";
    Scgpa.value = "";
    Semail.value = "";
});

function deleteData(x){
    table.deleteRow(x.parentElement.parentElement.rowIndex);
}

function editData(e){
    let element = e.parentElement.parentElement;
    rowData = element;
    Sname.value = element.getElementsByTagName("td")[0].innerHTML;
    Sno.value = element.getElementsByTagName("td")[1].innerHTML;
    Scgpa.value = element.getElementsByTagName("td")[2].innerHTML;
    Semail.value = element.getElementsByTagName("td")[3].getElementsByTagName("span")[0].innerHTML;
    document.getElementById("uptbtn").style.visibility = 'visible';
}

document.getElementById("uptbtn").addEventListener("click",()=>{
    rowData.getElementsByTagName("td")[0].innerHTML = Sname.value;
    rowData.getElementsByTagName("td")[1].innerHTML = Sno.value;
    rowData.getElementsByTagName("td")[2].innerHTML = Scgpa.value;
    rowData.getElementsByTagName("td")[3].getElementsByTagName("span")[0] = Semail.value;
    Sname.value = "";
    Sno.value = "";
    Scgpa.value = "";
    Semail.value = "";
    document.getElementById("uptbtn").style.visibility = 'visible';
});

