function login()
{
  
  let u = username.value <br>
  let p = password.value <br>
  if (u == "bo" && p == "12345")
  {
   Window.open("home.html")
   document.getElementByid(compiler).style.display = "block"
  }
  else
   document.write("sai tên đăng nhập hoặc mật khẩu")
}
