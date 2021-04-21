function validate(){
    event.preventDefault();
    var user = document.getElementById("name").value;
    var pwd = document.getElementById("password").value;
    let mobileno=document.getElementById("mobileno").value;
    let wrong = document.getElementById("invalid");
    
    if(username.length>0 && mobileno.length==10 && password.length==8)
    {
        if(mobileno.charAt(0)=='0' || mobileno.charAt(0)=='1' || mobileno.charAt(0)=='2' || mobileno.charAt(0)=='3' || mobileno.charAt(0)=='4' || mobileno.charAt(0)<='5')
        {
            alert("Invalid Data");
        }
        else{
            alert("Registered successfully")
            window.location="LoginPage.html";   
        }   
    }
    else{
      wrong.style.visibility="visible";
    }
  return false;
  }
