import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import bannerImage from '/banner.jpg'; // Import your banner image
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RecipeReviewCard from '../card/card';
import ContactForm from '../contactForm/contactUs';
import About from '../About/aboutUs';
// Styled components for Banner
const img ='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D';
const BannerContainer = styled('div')({
  position: 'relative',
  background: `url(${img}) no-repeat center center`,
  backgroundSize: 'cover',
  height: '60vh',
  width: '100%',
  margin: 0,
  padding: 0, // Adjust the height as needed
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(78, 145, 253, 0.5)', // Bluish overlay color
});

const Content = styled('div')({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  color: '#fff', // Text color
  paddingTop: '22vh', // Adjust the top padding to center the text vertically
});

const ExploreButton = styled(Button)({
  borderRadius: '20px', // Round border radius
  padding: '10px 20px', // Adjust padding as needed
});

// Styled components for About sectio

// Main component
const BannerWithAbout = () => {
  return (
    <>
      <BannerContainer>
        <Overlay />
        <Content>
          <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, marginBottom:5}}>
            SEE THE WORLD IN A UNIQUE WAY
          </Typography>
          <ExploreButton variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
            Explore
          </ExploreButton>
        </Content>
      </BannerContainer>
      <About />
      <RecipeReviewCard />
      <ContactForm />
    </>
  );
};

export default BannerWithAbout;
