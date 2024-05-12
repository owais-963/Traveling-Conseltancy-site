import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import '../home/home.css'
// import { CenterFocusStrong } from '@mui/icons-material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const RecipeReviewCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  
  React.useEffect(()=>{
    setData([1,2]);
  }, [])


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showBlog = (title) =>{
    navigate(`/blog/${title}`);
  }

  return (
    <>
    <Typography variant="h2" gutterBottom sx={{textAlign: 'center'}}>
    Blogs
    </Typography>
    <Grid container justifyContent="center" sx={{width:"100%"}}>
        <Grid container spacing={2} justifyContent="center" sx={{  marginBottom: 15, width:"100%" }}>
          {data.map((index) => (
            <Grid key={index} item xs={12} sm={6} md={3} sx={{width:"100%"}}>
              <Card sx={{  marginTop: 7, maxWidth: {xs: '85%', sm:"400px", md:"360px"}}}>
                {/* <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                /> */}
                <CardMedia
                  component="img"
                  height="194"
                  image="https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/16:9/w_2560%2Cc_limit/Debate_GettyImages-585587819.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                <Typography variant='h5' gutterBottom textAlign='left'>
                  Trip to Switzerland
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                  {/* </div> */}
                </CardContent>
                <CardActions disableSpacing sx={{display:'flex !important', justifyContent:'space-between !important'}}>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton> */}
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <div onClick={()=>{showBlog('cooking')}} className='linkDiv'>
                  <Typography variant='link' color='InfoText'>
                    Read more
                  </Typography>
                  <IconButton
                    // sx={{
                    //   '&:hover': {
                    //     cursor: 'pointer',
                    //     backgroundColor: '#D2D5CF', // Background color on hover
                    //     color: 'white', // Text color on hover
                    //   },
                    // }}

                    // onClick={()=>{
                    //   showBlog('traveling')
                    // }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                  </div>
                </CardActions>
                {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse> */}
              </Card>
            </Grid>
          ))}
        </Grid>
    </Grid>
    </>
  );
}

export default RecipeReviewCard;