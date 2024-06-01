import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const services = [
  { icon: <BeachAccessIcon fontSize="large" />, title: 'Beach Holidays' },
  { icon: <FlightTakeoffIcon fontSize="large" />, title: 'Flights' },
  { icon: <HotelIcon fontSize="large" />, title: 'Hotels' },
  { icon: <LocalActivityIcon fontSize="large" />, title: 'Activities' },
  { icon: <RestaurantIcon fontSize="large" />, title: 'Restaurants' },
];

const ServicesSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center" marginTop={3}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box>{service.icon}</Box>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              {service.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
