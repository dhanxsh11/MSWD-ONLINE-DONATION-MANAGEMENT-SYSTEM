import { Button } from "@mui/material";
import axios from 'axios';

function Update() {
    function handleupdate(event) {
        alert(document.getElementsByName ('un')[0].value);
        event.preventDefault();
        axios.post('http://localhost:8081/update',{
          un:document.getElementsByName('un')[0].value,
          pw:document.getElementsByName('pw')[0].value,
          ro:document.getElementsByName('ro')[0].value,
          em:document.getElementsByName('em')[0].value


}).then((response)=>{
    console.log(response.data);
    })
    }
return (
<center>
    <form>
    <br></br>
        Username:<input type="text" name="un" /><br></br><br></br>
        Password:<input type="password" name="pw" /><br></br><br></br>
        Role:<input type="text" name="ro" /><br></br><br></br>
        Email:<input type="text" name="em" /><br></br><br></br>
        <button onClick={handleupdate}>Update</button>
        
    </form>
</center>
);
}
export default Update