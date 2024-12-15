// profilePicture
// selectedImage
const fileSelector = document.getElementById("profilePicture");
const selectedImage = document.getElementById("selectedImage");
fileSelector.onchange = e => {
    const file = e.target.files[0];
    if(file){
        const url = URL.createObjectURL(file)
        console.log(url);
        selectedImage.style.backgroundImage = `url(${url})`;
    }
}