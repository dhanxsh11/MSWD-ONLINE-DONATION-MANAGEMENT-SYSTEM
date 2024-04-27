import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function BasicTextFields() {
  const [formData, setFormData] = React.useState({
    name: '',
    mobileNumber: '',
    email: '',
    billingAddress: '',
    amount: '',
    donationType: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:8081/api/donate', { // Replace with your server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      console.log('Form submitted successfully');
      // ...
    } else {
      console.error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error occurred while submitting form:', error);
  }
};

  return (
    <div style={{width:'100%', height:'100%', background:'url("https://i.pinimg.com/564x/14/63/24/146324cf553d05d82a596e492ba3d5ed.jpg") right no-repeat', backgroundSize:'contain' }}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="center">
        <h2 className="white-text">DONATE</h2>
      </div>
      <br />
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        onChange={handleChange}
        value={formData.name}
      />
      <TextField
        id="mobileNumber"
        label="Mobile number"
        variant="outlined"
        onChange={handleChange}
        value={formData.mobileNumber}
      />
      <br />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        style={{ width: '44%', marginBottom: '20px' }}
        inputProps={{ style: { fontSize: 20 } }}
        onChange={handleChange}
        value={formData.email}
      />
      <br />
      <TextField
        id="billingAddress"
        label="Billing address"
        variant="outlined"
        style={{ width: '44%', marginBottom: '20px' }}
        inputProps={{ style: { fontSize: 20 } }}
        onChange={handleChange}
        value={formData.billingAddress}
      />
      <br />
      <TextField
        id="amount"
        label="Amount"
        variant="outlined"
        onChange={handleChange}
        value={formData.amount}
      />
      <br />
      <Select
        id="donationType"
        value={formData.donationType}
        label="Elect"
        onChange={handleChange}
        style={{ width: '44%', marginBottom: '20px' }}
      >
        <MenuItem value={1}>Select</MenuItem>
        <MenuItem value={3}>Food donation</MenuItem>
        <MenuItem value={4}>Organ donation</MenuItem>
        <MenuItem value={5}>Blood donation</MenuItem>
        <MenuItem value={6}>Hair donation</MenuItem>
        <MenuItem value={7}>Clothes donation</MenuItem>
      </Select>
      <br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
    </div>
  );
}