import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

interface UserType {
    firstName: string,
    lastName: string,
    email: string,
    contact: string,
    address1: string,
    address2: string,
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    contact: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),
})

const Form = () => {

    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const handleFormSubmit = (values: UserType) => {
    }
    return (
        <Box m='20px'>
            <Header title='CREATE USER' subtitle='Create a New User Profile' />
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display='grid'
                            gap='30px'
                            gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                            sx={{
                                '& > div:': { gridColumn: isNonMobile ? undefined : 'span 4' }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='First Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name='firstName'
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && typeof errors.firstName}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Last Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name='lastName'
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && typeof errors.lastName}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name='email'
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && typeof errors.email}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Contact Number'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name='contact'
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && typeof errors.contact}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Addres 1'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name='address1'
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && typeof errors.address1}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Addres 2'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name='address2'
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && typeof errors.address2}
                                sx={{ gridColumn: 'span 4' }}
                            />
                        </Box>
                        <Box display='flex' justifyContent='flex-end' mt='20px'>
                            <Button type='submit' color='secondary' variant='contained'>
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>

    )
}

export default Form;
