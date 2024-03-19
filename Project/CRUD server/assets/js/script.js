const myForm=document.getElementById("myForm");
const user=document.getElementById("name");
const email=document.getElementById("email");
const result=document.querySelector("#result");

let users=[
    {
        id: "1",
        name: "html",
        email:"html@gmail.com",
    },
    {
        id: "2",
        name: "css",
        email:"css@gmail.com"
    },
    {
        id: "2",
        name: "js",
        email:"js@gmail.com"
    },
];

// read users id
const URL = "https://localhost:3000";

let editable = false;
let userId = "";

//generate random id
const getElementById = () => {
    let randomId = Math.floor(Math.random()*1000);
    console.log(randomId);
};
//getRandomId();

//submit form
myForm.addEventListener("submit", function (e){
    e.preventDefault();

    if(editable === false) {
        //create new user
    let id =getRandomId();
    const data = {
        id,
        name: user.value,
        email: email.value,
    };
    console.table(data);
    createUser(data);
}else{
    //update existing user
    const data ={
        name: user.value,
        email: email.value,
    };
    updateUser(data, userId)
}
});

//creating user data 
function createUser(user){
    //console.log("user prarameter =", user);
    let extitem = users.find((item) => item.email === user.email);
    //console.log("extitem =", extitem);

    if(extitem){
        alert("user is already registered, Email exists");
    }else{
        fetch(`${URL}/users`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(users),
        })
        .then((res) => {
            alert("users created successfully");
            setTimeout(() => {
                window.location.reload();

            }, 3000);
        })
        .catch((error) =>{
            console.log(error.message);
        });
    }
}

//get all data
const getUsers = async () =>{
    await fetch(`${URL}/users)`,{
        method: "GET",
    })
    .then((out) => out.json())
    .then((res) => {
        console.table(res);
        printInTable(res);

    })
    .catch();
};
//self invoke function
(function(){
    getUsers();
})();
//printing in table
function printInTable(users){
    console.log("printing", users);

    users.forEach((item) => {
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        let name = document.createElement("td");
        let email = document.createElement("td");
        let action = document.createElement("td");

        id.textContent = item.id;
        name.textContent = item.name;
        email.textContent = item.email;
        action.innerHTML = `<button class='edit' onclick='edit(this)'><Edit</button> <button class='delete' onclick='deleteUser(${item.id})'>Delete</button>`;

        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(email);
        tr.appendChild(action);
        result.appendChild(tr);
    });
}

//edit user
function edit(e){
    // console.log("edit", e);
    // console.log("edit",typeof e);

    editable = true;

    let selUser = e.parentElement.parentElement;
    /*console.log("edit", e);
    console.log("edit",typeof e);*/

    let userId = selUser.children[0].innerHTML;

    user.value = selUser.children[1].innerHTML; //value taking from first child element of tr
    email.value = selUser.children[2].innerHTML;

}

//update user
const updateUser = async (data, id)=>{
    // console.log("update data=",data);
    // console.log("update id= ",id);

    await fetch(`${URL}/ users/${id}`,{
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data),
    })
    .then((res)=>{
        printInTable(users);
        alert("user updated sucessfully");
        window.location.reload();

    })
    .catch((error) => console.log(error.message));
};

//delete user
function deleteUser(id){
    console.log("delete user id =",id);

    /*let index = users.findindex((item) => item.id === id);
    console.log("index =",index);*/

    if(window.confirm(`are you sure to delete user id =${id}`)){
        fetch(`${URL}/users/${id}`,{
            method: "DELETE",
        })
        .then((out) => out.json())
        .then((res) =>{
            printInTable(users);
            alert("deleted successfully");
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
    }
}


