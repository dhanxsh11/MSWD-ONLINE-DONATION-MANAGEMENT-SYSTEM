import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Select, MenuItem, Box } from '@mui/material';

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    donationType: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:8081/submit-form'; // Ensure correct endpoint

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      console.log('Form data submitted successfully');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        donationType: '',
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div style={{width:'100%', height:'100%', background:'url("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWdwb2Niemt6d3pqMnRxeWZuNGRwcTN3dmh4dzFyejJyMnk3YWs5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p9qpzVIYDPTMF3MyHP/giphy.gif")  no-repeat',backgroundSize:'contain'}}>

    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Volunteer Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              fullWidth
              label="Donation Type"
              name="donationType"
              value={formData.donationType}
              onChange={handleChange}
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
  );
};

export default VolunteerRegistrationForm;