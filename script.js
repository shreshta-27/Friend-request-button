let a = document.getElementById("add")
let flag = 1

let c = document.querySelector("h5")

a.addEventListener("click",function(){
    if(flag == 1){
        a.style.backgroundColor= " rgb(73, 209, 73)"
        c.innerHTML= "Friends"
        c.style.color = "darkgreen"
        a.innerHTML = "Remove Friend"
        a.style.backgroundColor = "rgb(216, 77, 77)"
        flag = 0
    }
    else{
        a.style.backgroundColor= " cadetblue"
        a.innerHTML = "Add friend"
        c.style.color = "rgb(148, 25, 25)"
        c.innerHTML = "Stranger"
        flag = 1
    }
})

