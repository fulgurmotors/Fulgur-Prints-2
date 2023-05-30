import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupPage = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your signup logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignupPage;
