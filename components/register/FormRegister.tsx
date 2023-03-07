import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, TextField, Typography, Unstable_Grid2 } from "@mui/material"

export const FormRegister = () => {
    return (
        <Grid container display='flex' justifyContent='center' alignItems='center'>
            <Card className='form-card' sx={{width: 600}}>
                <CardContent>
                    <Box sx={{mt:3, my:3}}>
                        <Typography variant='h1' component='h1'>Registro</Typography>
                        <Typography>Confirmá tus datos tal como figuran en tu DNI y completá los que faltan para continuar tu registro.</Typography>
                        <Typography>Si ves algún dato erróneo, por favor envia tu dni a centrodeayuda@promace.jujuy.edu.ar.</Typography>

                        <Typography sx={{mt:3}} >Datos obtenidos.</Typography>
                    </Box>
                    
                    <Divider sx={{my:1}}/>
                    {/* <Box sx={{mt:5}}>
                        <TextField label='DNI' variant='outlined' fullWidth/>       
                    </Box> */}
                    <Box >
                        <Grid item xs={12} sm={8} sx={{mt:1}} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography>DNI: </Typography>
                            <Typography variant='subtitle1'>40154045</Typography>
                        </Grid>

                        <Grid item xs={12} sm={8} sx={{mt:1}} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography>Nombre: </Typography>
                            <Typography variant='subtitle1'>FABIAN GUILLERMO</Typography>
                        </Grid>

                        <Grid item xs={12} sm={8} sx={{mt:1}} display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography>Apellido: </Typography>
                            <Typography variant='subtitle1'>CHOQUE</Typography>
                        </Grid>
                    </Box>

                    <Divider sx={{my:1}}/>

                    <Box sx={{mt:5, my: 3}}>
                        <NextLink href='/registro' passHref legacyBehavior>
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
