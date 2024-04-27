import axios from 'axios';
import { useState } from 'react';

function Show() {
  const [res, setRes] = useState(null);

  if (res === null) {
    axios.get('http://localhost:8081/showall', {})
      .then((response) => {
        console.log(response.data);
        setRes(JSON.stringify(response.data, null, 2)); // Use JSON.stringify with space parameter
      });
  }

  return (
    <div>
      <pre>{res}</pre>  {/* Wrap in a pre tag for better formatting */}
    </div>
  );
}

export default Show;
