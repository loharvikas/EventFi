import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import EventFiCard from '../../components/EventFiCard/EventFiCard';
import EventFiTextField from '../../components/EventFiTextField/EventFiTextField';
import EventFiButton from '../../components/EventFiButton/EventFiButton';
import { BrandIcon } from '../../assets/icons/BrandLogo';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { loginUser } from '../../store/modules/user/slice';


export default function Signin(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await dispatch(loginUser(
      {
        email: data.get('email') as string,
        password: data.get('password') as string,
      }
    ))
    navigate('/')
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
      <Stack direction="column" justifyContent="space-between" mt='20vh'>

        <EventFiCard variant="outlined">
          <BrandIcon />
          <Typography
            variant="h3"
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email" >Email</FormLabel>
              <EventFiTextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <a
                  href='/'
                  onClick={() => console.log('')}
                >
                  Forgot your password?
                </a>
              </Box>
              <EventFiTextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>

            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <EventFiButton
              type="submit"
              fullWidth
              variant="outlined"
              onClick={validateInputs}
              label='Sign in'
              
            />
             
            <Typography sx={{ textAlign: 'center',  }}>
              Don&apos;t have an account?{' '}
              <span >
                <Link
                  to='/signup'
                >
                  Register
                </Link>
              </span>
            </Typography>
          </Box>
        </EventFiCard>
      </Stack>
  );
}