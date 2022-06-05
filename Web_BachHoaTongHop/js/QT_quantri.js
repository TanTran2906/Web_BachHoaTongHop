function resetInput(){
    document.getElementById("tensp").value = ""
    document.getElementById("dm").value = ""
    document.getElementById("giasp").value = ""
    document.getElementById("slg").value = ""
    document.getElementById("chitiet").value = ""
}

function validateInput(){
    let formElement = document.querySelector(".form");
    let inputElement = formElement.querySelectorAll(".form-input");
    for(let i=0; i< inputElement.length; i++){
        if(inputElement[i].value === ""){
            inputElement[i].parentElement.querySelector(".error-message").innerHTML = 
                `Please enter your ${inputElement[i].id}`
        }
        else
            inputElement[i].parentElement.querySelector(".error-message").innerHTML = ``
    }
}
//thêm
function add(){
    validateInput();
    let formElement = document.querySelector(".form");
    let errorElement = formElement.querySelectorAll(".error-message");
    let arrError = [];
    for (let i = 0; i < errorElement.length; i++) {
    arrError.push(errorElement[i].innerText);
        
    }
    let checkError = arrError.every(value => value === "");
    if(checkError){
        //lưu data
        let tensp = document.getElementById("tensp").value;
        let dm = document.getElementById("dm").value;
        let giasp = document.getElementById("giasp").value;
        let slg = document.getElementById("slg").value;
        let chitiet = document.getElementById("chitiet").value;
        let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : [];
        listItem.push({tensp:tensp, dm:dm, giasp:giasp, slg:slg, chitiet:chitiet});
        localStorage.setItem("list-item", JSON.stringify(listItem));
        render();
        resetInput();
    }
}
//in
function render(){
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : [];
    let item = `<tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Loại sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Chi tiết</th>
                <th></th>
            </tr>`
    listItem.map((value, index) =>{
        item += `<tr>
                <td>${index + 1}</td>
                <td id="tensp">${value.tensp}</td>
                <td id="dm">${value.dm}</td>
                <td id="giasp">${value.giasp}</td>
                <td id="slg">${value.slg}</td>
                <td id="chitiet">${value.chitiet}</td>
                <td>
                    <button class="btn btn-info" onclick="edit(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>  
                </td>
            </tr>`
    })
    document.getElementById("tableContent").innerHTML = item;
    
}

//sửa
function edit(index){
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : [];
    
    document.getElementById("tensp").value = listItem[index].tensp;
    document.getElementById("dm").value = listItem[index].dm;
    document.getElementById("giasp").value = listItem[index].giasp;
    document.getElementById("slg").value = listItem[index].slg;
    document.getElementById("chitiet").value = listItem[index].chitiet;

    document.getElementById("index").value = index;
    document.getElementById("save").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
}

function change(){
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : [];
    let index = document.getElementById("index").value;
    listItem[index] = {
        tensp:document.getElementById("tensp").value,
        dm:document.getElementById("dm").value,
        giasp:document.getElementById("giasp").value, 
        slg:document.getElementById("slg").value,
        chitiet:document.getElementById("chitiet").value
    }
    localStorage.setItem("list-item", JSON.stringify(listItem))
    render();
    document.getElementById("save").style.display = "inline-block";
    document.getElementById("update").style.display = "none";
    resetInput();
}

function deleteItem(index){
    let listItem = localStorage.getItem("list-item") ? JSON.parse(localStorage.getItem("list-item")) : [];
    if(confirm("Are you sure?")){
        listItem.splice(index, 1);
    }
    localStorage.setItem("list-item", JSON.stringify(listItem));
    render();
}