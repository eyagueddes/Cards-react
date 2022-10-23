import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>Photo Album </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm' style={{ marginTop: '100px' }}>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album{' '}
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textPrimary'
              paragraph
            >
              {' '}
              hello everyone
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random'
                      title='title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5' gutterBottom>
                        Heading
                      </Typography>
                      <Typography variant='h5' gutterBottom>
                        This is a media card.you can use it to describe content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          You can contact me
        </Typography>
      </footer>
    </>
  );
};

export default App;
