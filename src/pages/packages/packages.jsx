import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MosqueIcon from '@mui/icons-material/Mosque';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';

const packages = [
  { icon: <FavoriteIcon fontSize="large" />, title: 'Honeymoon Tour', description: 'Enjoy a romantic getaway with our exclusive honeymoon packages.' },
  { icon: <PublicIcon fontSize="large" />, title: 'World Tour', description: 'Explore the world with our comprehensive world tour packages.' },
  { icon: <BusinessCenterIcon fontSize="large" />, title: 'Business Tour', description: 'Tailored business tours to meet your professional needs.' },
  { icon: <MosqueIcon fontSize="large" />, title: 'Hajj', description: 'Join our well-organized Hajj pilgrimage packages.' },
  { icon: <MosqueIcon fontSize="large" />, title: 'Umrah', description: 'Experience a peaceful Umrah journey with our packages.' },
  { icon: <FlightTakeoffIcon fontSize="large" />, title: 'Pilgrimage', description: 'Join various pilgrimage tours for spiritual fulfillment.' },
];

const PackagesSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Packages
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {packages.map((pkg, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia sx={{ mt: 2 }}>
                {pkg.icon}
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div">
                  {pkg.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pkg.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PackagesSection;
