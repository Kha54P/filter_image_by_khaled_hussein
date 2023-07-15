var saturate = document.getElementById('saturate');
var contrast = document.getElementById('contrast');
var brightness = document.getElementById('brightness');
var sepia = document.getElementById('sepia');
var grayscale = document.getElementById('grayscale');
var blur = document.getElementById('blur');
var hueRotate = document.getElementById('hue-rotate');
var download = document.getElementById('download');
var upload = document.getElementById('upload');
var img = document.getElementById('img');
var reset = document.querySelector('span');
var imgBox = document.getElementById('box-img');

var canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// onload
window.onload = function(){
    download.style.display='none';
    reset.style.display='none';
    imgBox.style.display='none';
}
// resetValue 
function resetValue(){
    img.style.filter='none';
    saturate.value='100'
    contrast.value='100'
    brightness.value='100'
    sepia.value='0'
    grayscale.value='0'
    blur.value='0'
    hueRotate.value='0'
}
// upload 
upload.onchange = function(){
    resetValue();
    download.style.display='block';
    reset.style.display='block';
    imgBox.style.display='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result;
    }
}
img.onload = function(){
    canvas.width = img.width;
    canvas.height  = img.height ;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none';
}
// filters 
var filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>{
    filter.addEventListener('input' , function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
})

// download 
download.onclick = function(){
    download.href = canvas.toDataURL();
}