function validateForm() {
    var id = document.forms["myForm"]["id"].value;
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (id == "") {
      document.forms["myForm"]["id"].style.backgroundColor = "yellow";
      alert("Mã không được để trống");
      return false;
    } else {
      document.forms["myForm"]["id"].style.backgroundColor = "white";
    }
    
    if (name == "") {
      document.forms["myForm"]["name"].style.backgroundColor = "yellow";
      alert("Họ tên không được để trống");
      return false;
    } else {
      document.forms["myForm"]["name"].style.backgroundColor = "white";
    }
  
    if (email == "") {
      document.forms["myForm"]["email"].style.backgroundColor = "yellow";
      alert("Email không được để trống");
      return false;
    } else if (!emailRegex.test(email)) {
      document.forms["myForm"]["email"].style.backgroundColor = "yellow";
      alert("Email không đúng định dạng");
      return false;
    } else {
      document.forms["myForm"]["email"].style.backgroundColor = "white";
    }
  
    var gioitinh = false;
    var sothich = false;
    var quoctich = false;
  
    for (var i = 0; i < document.forms["myForm"]["re"].length; i++) {
      if (document.forms["myForm"]["re"][i].type == "radio" && document.forms["myForm"]["re"][i].checked) {
        gioitinh = true;
        break;
      }
    }
  
    for (var i = 0; i < document.forms["myForm"]["re"].length; i++) {
      if (document.forms["myForm"]["re"][i].type == "checkbox" && document.forms["myForm"]["re"][i].checked) {
        sothich = true;
        break;
      }
    }
  
    if (document.forms["myForm"]["select"].selectedIndex != 0) {
      quoctich = true;
    }
  
    if (!gioitinh) {
      alert("Vui lòng chọn giới tính");
      return false;
    }
  
    if (!sothich) {
      alert("Vui lòng chọn sở thích");
      return false;
    }
  
    if (!quoctich) {
      alert("Vui lòng chọn quốc tịch");
      return false;
    }
  
    var notesLength = document.forms["myForm"]["notes"].value.length;
  
    if (notesLength > 200) {
      document.forms["myForm"]["notes"].style.backgroundColor = "yellow";
      alert("Ghi chú phải ít hơn hoặc bằng 200 ký tự");
      return false;
    } else {
      document.forms["myForm"]["notes"].style.backgroundColor = "white";
    }
  }
function submitForm() {
  preventDefault();
  var successMessage=document.getElementById("success-mesage");
  successMessage.innerHTML="ĐĂNG KÝ THÀNH CÔNG";
}