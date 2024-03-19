const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");

//inserting data

document.getElementById("btninsert").onclick = function(){
    const key = inputKey.value;
    const value = inputValue.value;

    if(key && value){
        localStorage.setItem(key,value);
        window.location.reload();
        inputKey.value = "";
        inputValue.value ="";
    }else{
        alert("must enter value");
    }
};
if(localStorage.length !==0){
    document.getElementById(
        "availRecords"
    ).innerHTML = `records available in storage`;
}
if(localStorage.length===0){
    document.getElementById("btnalldelete").style.display = "none";
    document.getElementById("autofill"
    ).innerHTML =`add some key - value records using insert box`;
    document.getElementById("availRecords").style.display = "none"
}
//read all the values
for(let index = 0; index < localStorage.length; index++){
    const key = localStorage.key(index);
    const value =localStorage.getItem(key);

    document.getElementById(
    "isOutput"
    ).innerHTML+= `<br><hr><br> key is : ${key}<br> value is : ${value}<br><br>`;
}
//delete all data

document.getElementById("btnalldelete").onclick = function(){
    localStorage.clear();
    location.reload();
};

//read single data

document.getElementById("btnreaderdata").onclick =function(){
    const inputreaddatakeynew = document.getElementById("inputreaddatakey").value;

    const readdata = localStorage.getItem(inputreaddatakeynew);

    if(inputreaddatakeynew){
        document.getElementById("readdatahere").innerHTML = `data value of requested key is : ${readdata}`;
    }
};

//delete single data

document.getElementById("btndelete").onclick = function(){
    const keyname = document.getElementById("inputdelkey").value;
    if(keyname){
        localStorage.removeItem(keyname);
        location.reload();
    }
};