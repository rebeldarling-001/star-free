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