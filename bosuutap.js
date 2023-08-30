var images = [];
var index = 0;
var sohinh = 9;
for (var i = 0; i < sohinh; i++) {
    images[i] = new Image();
    images[i].src = "images/" + i + ".jpg";
}

function next() {
    index++;
    if (index >= images.length) index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    var vitri = index + 1;
    var inVitri = 'Ảnh ' + vitri + '/9';
    document.getElementById("vitri").innerText = inVitri;
}

function prev() {
    index--;
    if (index < 0) index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    var vitri = index + 1;
    var inVitri = 'Ảnh ' + vitri + '/9';
    document.getElementById("vitri").innerText = inVitri;
}
var vitri = document.getElementById("vitri");
vitri.innerHTML = "Vị trí: " + (index + 1) + "/" + images.length;

