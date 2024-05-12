import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
// import blogImage from './blog-image.jpg'; // Import your blog image

const BlogPage = () => {
    const blogImage = 'https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/5ae0699267182400199e473f/files/how-to-enjoy-yourself-and-have-fun-while-traveling-alone-main-image-hd-op.webp'
  return (
    <Container maxWidth="lg">
      {/* Blog Image */}
      <img src={blogImage} alt="Blog" style={{ width: '100%', display: 'block', margin: 'auto' }} />

      {/* Content */}
      <Grid container spacing={4} style={{ marginTop: '40px' }}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to Our Blog
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur diam a nisi aliquet, ac mollis libero vehicula. Cras pulvinar convallis nisi, eu ullamcorper est bibendum eu. Quisque quis tincidunt lectus. Sed in turpis non risus tristique aliquam.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Vivamus nec justo vel mi vehicula consequat. Phasellus commodo urna et nulla volutpat, a ullamcorper sem vestibulum. Aliquam sollicitudin velit id ultrices molestie. Nam ac elit eu sapien elementum venenatis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
