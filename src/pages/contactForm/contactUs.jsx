import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const countries = [
  { name: 'Afghanistan' },
  { name: 'Canada' },
  { name: 'UAE' },
  // Add more countries here
];

const packages = [
  { name: 'Honeymoon Package' },
  { name: 'Tourism' },
  { name: 'Business Tour' },
];

const ContactForm = () => {
  const handleSort = (list, property) => {
    list.sort((a, b) => {
      const valueA = a[property].toLowerCase();
      const valueB = b[property].toLowerCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    return list;
  };

  return (
    <>
      <Typography variant="h2" gutterBottom textAlign={'center'}>
        Contact Us
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
        <Grid container spacing={2} justifyContent="center" width={'85%'}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone#" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={handleSort([...packages], 'name')}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="You Looking for" fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={handleSort([...countries], 'name')}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="You want to travel" fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} fullWidth>
                    <DatePicker label="Date" sx={{width: "50%"}}/>
                </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Additional Notes"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ContactForm;
