import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PayPalIcon from '../../assets/paypal.png'; // Import payment logos
import VisaIcon from '../../assets/mastercard.png';
import MasterCardIcon from '../../assets/stripe.png';
import StripeIcon from '../../assets/visa.png';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#4e91fd', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading travel and tourism agency offering a variety of tour packages to cater to your needs. Experience the world in a unique way with our customized tours.
            </Typography>
          </Grid>
          
          {/* Quick Links Section */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="#packages-section" color="inherit" underline="hover">
                Packages
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#services-section" color="inherit" underline="hover">
                Services
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#pricing-section" color="inherit" underline="hover">
                Pricing
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#blog-section" color="inherit" underline="hover">
                Blog
              </Link>
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2">
              Mobile: (098) 765-4321
            </Typography>
            <Typography variant="body2">
              Fax: (111) 222-3333
            </Typography>
            <Typography variant="body2">
              Email: info@flier.com
            </Typography>
            <Typography variant="body2">
              Address: 123 Travel St, Adventure City, World
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook" component="a" href="https://facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter" component="a" href="https://twitter.com">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram" component="a" href="https://instagram.com">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn" component="a" href="https://linkedin.com">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Payment Partners Section */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Supported Payment Partners
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={PayPalIcon} alt="PayPal" style={{ margin: '0 10px', height: 40 }} />
            <img src={VisaIcon} alt="Visa" style={{ margin: '0 10px', height: 40 }} />
            <img src={MasterCardIcon} alt="MasterCard" style={{ margin: '0 10px', height: 40 }} />
            <img src={StripeIcon} alt="Stripe" style={{ margin: '0 10px', height: 40 }} />
          </Box>
        </Box>

        {/* Footer Copyright */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Flier. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
