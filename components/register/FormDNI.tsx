import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, TextField, Typography, Unstable_Grid2 } from "@mui/material"

export const FormDNI = () => {
    return (
        <Grid container display='flex' justifyContent='center' alignItems='center'>
            <Card className='form-card' sx={{width: 600}}>
                <CardContent>
                    <Box sx={{mt:3}}>
                        <Typography variant='h1' component='h1'>Inicio</Typography>
                        <Typography variant='subtitle2' component='h6'>Ingresá tu numero de DNI para comenzar tu registro.</Typography>
                    </Box>
                    <Box sx={{mt:5}}>
                        <TextField label='DNI' variant='outlined' fullWidth/>       
                    </Box>

                    <Box sx={{mt:5, my: 3}}>
                        <NextLink href='/registro/confirmar' passHref legacyBehavior>
                            <Link>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Continuar
                                </Button>
                            </Link>
                        </NextLink>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}
