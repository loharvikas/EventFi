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
import { useState } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { forgetPassword } from '../../store/modules/user/slice';
import { showAlert } from '../../store/modules/common/slice';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordErrorMessage, setPasswordErrorMessage] =
        useState<string>('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (!validateInputs()) return;

        try {
            await dispatch(
                forgetPassword({
                    email: data.get('email') as string,
                    password: data.get('newPassword') as string,
                })
            ).unwrap();

            dispatch(
                showAlert({
                    message:
                        'Password has been reset successfully. Please login',
                    type: 'success',
                })
            );

            navigate('/signin');
        } catch (error: any) {
            dispatch(
                showAlert({
                    message:
                        error || 'Failed to reset password. Please try again.',
                    type: 'failure',
                })
            );
        }
    };

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const newPassword = document.getElementById(
            'newPassword'
        ) as HTMLInputElement;

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!newPassword.value || newPassword.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage(
                'Password must be at least 6 characters long.'
            );
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <Stack direction="column" justifyContent="space-between" mt="20vh">
            <EventFiCard variant="outlined">
                <BrandIcon />
                <Typography variant="h3">Reset Password</Typography>
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
                        <FormLabel htmlFor="email">Email</FormLabel>
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
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="newPassword">
                            New Password
                        </FormLabel>
                        <EventFiTextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="newPassword"
                            placeholder="••••••"
                            type="password"
                            id="newPassword"
                            autoComplete="new-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <EventFiButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={validateInputs}
                        label="Reset Password"
                    />
                </Box>
            </EventFiCard>
        </Stack>
    );
};

export default ForgotPassword;
