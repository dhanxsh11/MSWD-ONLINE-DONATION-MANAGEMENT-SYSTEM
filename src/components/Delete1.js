import { Button } from "@mui/material";
import axios from 'axios';

function Delete() {
    function handledel(event) {
        alert(document.getElementsByName ('un')[0].value);
        event.preventDefault();
        axios.post('http://localhost:8081/delete',{
          un:document.getElementsByName('un')[0].value,
          pw:document.getElementsByName('pw')[0].value
}).then((response)=>{
    console.log(response.data);
    })
    }
return (
<center>
    <form>
    <br></br>
        Username:<input type="text" name="un" /><br></br>
        Password:<input type="password" name="pw" /><br></br>
        <Button onClick={handledel}>Delete</Button>
    </form>
</center>
);
}
export default Delete