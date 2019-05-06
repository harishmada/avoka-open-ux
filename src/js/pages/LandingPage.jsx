import React from 'react';
import PropTypes from 'prop-types';
import { usePageContext } from '@transact-open-ux/react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import driversLicenseImg from '../../assets/images/idCard.svg';

const styles = theme => ({
  root: {
    minHeight: '45vh',
    position: 'relative',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      background: theme.mixins.gradient(
        theme.palette.secondary.light,
        theme.palette.secondary.main
      ),
    },
  },
  h5: {
    color: '#FFFFFF',
    fontSize: '1.8rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  },
  title: {
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 40,
    paddingBottom: 40,
    ...theme.mixins.container,
    [theme.breakpoints.down('lg')]: {
      paddingTop: 20,
      paddingBottom: 20,
      ...theme.mixins.gutters(),
    },
  },
  instructions: {
    background: '#FFFFFF',
    color: theme.palette.primary.main,
  },
  instructionsContent: {
    display: 'flex',
    paddingTop: 70,
    paddingBottom: 70,
    [theme.breakpoints.down('lg')]: {
      ...theme.mixins.gutters(),
    },
    ...theme.mixins.container,
  },
  mobileImgContainer: {
    height: 50,
  },
  mobileImgCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF',
    borderRadius: '100%',
    position: 'absolute',
    boxShadow: '0 2px 6px 1px #00000069',
    width: 100,
    height: 100,
  },
  startBtn: {
    alignSelf: 'center',
    background: 'none',
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    position: 'absolute',
    marginTop: 10,
    bottom: 20,
    [theme.breakpoints.up('sm')]: {
      color: '#FFFFFF',
      borderColor: '#FFFFFF',
      marginLeft: 'auto',
      position: 'relative',
    },
  },
});

const LandingPage = ({ classes }) => {
  const { navigate } = usePageContext();

  return (
    <div className={classes.root}>
      <div className={classes.description}>
        <Typography variant="h5" className={classes.h5}>
          Deposit Account
        </Typography>
        <div className={styles.descriptionContent}>
          <p>
            Product description..... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus malesuada lectus non leo molestie, ac consectetur mi mollis. Nunc sagittis
            efficitur enim non vulputate. Fusce dapibus enim nibh, sed venenatis sem ullamcorper
            vestibulum. Etiam maximus at odio sed eleifend. Aenean varius ligula a nibh cursus
            aliquam.
          </p>
        </div>
        <Button onClick={() => navigate()} className={classes.startBtn}>
          get started
        </Button>
      </div>
      <Hidden smUp>
        <Grid container justify="center" className={classes.mobileImgContainer}>
          <div className={classes.mobileImgCircle}>
            <img width="60" height="60" src={driversLicenseImg} alt="drivers licence" />
          </div>
        </Grid>
      </Hidden>
      <div className={classes.instructions}>
        <Grid className={classes.instructionsContent} container>
          <Grid item sm={8}>
            <Typography variant="h6" className={classes.title}>
              You are just 3 steps away from an instant decision
            </Typography>
            <Typography component="div" variant="body2" className={styles.info}>
              <p>For this application you with need:</p>
              <div>
                <ol>
                  <li>Your Driver&#39;s License</li>
                  <li>Social Security Number</li>
                  <li>About 5 minutes of your time</li>
                </ol>
              </div>
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid sm={4} item container justify="center">
              <img width="150" height="150" src={driversLicenseImg} alt="drivers licence" />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(LandingPage);
