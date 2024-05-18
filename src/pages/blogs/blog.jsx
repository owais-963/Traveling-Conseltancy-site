import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import bolgImg from '/blog.webp';

const BlogPage = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: 'justify', padding: '0 16px' }}>
      {/* Blog Title */}


      {/* Blog Image */}
      <Grid container justifyContent="center">
        <Grid item>
        <img src={bolgImg} alt="Blog" style={{ maxWidth: '100%', height: 'auto', marginTop:20 }} />
        </Grid>
  
      </Grid>

      {/* Blog Content */}
      <Grid sx={{margin: '40px 0'}}>
      <Typography variant="h3" gutterBottom>
        Blog Title
      </Typography>
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam a nisi aliquet, ac mollis libero vehicula. Cras pulvinar convallis nisi, eu ullamcorper est bibendum eu. Quisque quis tincidunt lectus. Sed in turpis non risus tristique aliquam. Vivamus nec justo vel mi vehicula consequat. Phasellus commodo urna et nulla volutpat, a ullamcorper sem vestibulum. Aliquam sollicitudin velit ultrices molestie. Nam ac elit eu sapien elementum venenatis.
      </Typography>
      </Grid>
    </Container>
  );
}

export default BlogPage;
