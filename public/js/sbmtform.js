function denetim()
{




    var email = document.getElementById("email").value;
  
    var message = document.getElementById("message").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;
    if ( email === ""  || message === "") 
    {
        alert("Lütfen tüm alanları doldurun!");
        return false;
    }
    if (!emailPattern.test(email)) 
    {
        alert("Geçerli bir e-posta adresi girin!");
        return false;
    }
 
    alert("Form başarıyla dolduruldu!");
    return true;


}