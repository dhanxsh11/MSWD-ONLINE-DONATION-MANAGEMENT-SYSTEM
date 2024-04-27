import { Button } from "@mui/material";
import axios from 'axios';

function login({store}) {
    function handlelogin(event) {
        alert(document.getElementsByName ('un')[0].value);
        event.preventDefault();
        axios.post('http://localhost:8081/check',{
          un:document.getElementsByName('un')[0].value,
          pw:document.getElementsByName('pw')[0].value
}).then((response)=>{
    console.log(response.data);
    if(response.data!="failed");{
         store.dispatch({"type":"login",
         data:{"un":response.data.name,"role":response.data.role}})
    }
    })
    }
return (
    <div style={{width:'100%', height:'100%', background:'url("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG9rdXg1dWZ4ZHNxcGJ5ZWNta3o4ZWI3cHgxemxsOTBzM2pvbTg1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1TpGKApbHmkZa/giphy.gif")  no-repeat',backgroundSize:'cover'}}>

    <div className="login-parent">
    <div className="login-child">
    <p style = {{ textShadow: "1px 2px 3px yellow, -1px -2px 2px red", fontSize: "25px" }}> Login </p>
    <br></br>
    <form>
    <br></br>
        Username:<input type="text" name="un" /><br></br>
        Password:<input type="password" name="pw" /><br></br>
        <button onClick={handlelogin}>Login</button>
    </form>
    </div>
    </div>
    </div>

);
}
export default login