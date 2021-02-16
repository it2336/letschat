function addUser()
{
   
    user_name=document.getElementById("user_name").value;


   if(user_name==""){
     document.getElementById("user_name").placeholder="cannot login without username"
   }
   else{ 
    localStorage.setItem("user_name",user_name);

    window.location="room.html"}

}