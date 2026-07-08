function changeAvatar(src) {
    document.getElementById("selectedAvatar").src = src;
}

const fileInput = document.getElementById("profileScreenshot");
const fileName = document.getElementById("fileName");

fileInput.addEventListener("change", function () {

    if (this.files.length > 0) {

        fileName.textContent = this.files[0].name;

    } else {

        fileName.textContent = "No file selected";

    }

});

document.getElementById("profileScreenshot").addEventListener("change", function(e){

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function(){
        let box = document.querySelector(".screenshot-box");
        box.innerHTML = `<img src="${reader.result}" style="width:100%;border-radius:12px;">`;
    }

    reader.readAsDataURL(file);
});

document.getElementById("saveProfile").addEventListener("click", function(){

    let name = document.getElementById("realName").value;
    let uid = document.getElementById("gameUid").value;

    if(!name){
        alert("Please enter real name");
        return;
    }

    if(!uid){
        alert("Please enter game UID");
        return;
    }

    alert("Profile Ready to Save 🚀");
});