import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, FormControl, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography, Unstable_Grid2 } from "@mui/material"
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

export const FormRegister = () => {

    const [depa, setDepa] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setDepa(event.target.value as string);
    };

    return (
        <Grid container display='flex' justifyContent='center' alignItems='center'>
            <Card className='form-card' sx={{width: 700}}>
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
                    <Grid container display='flex' justifyContent='space-between' spacing={2}>
                        <Grid item sx={{mt:3}} xs={12} sm={6} >
                            <TextField label='Correo electronico' variant='outlined' fullWidth/>       
                        </Grid>

                        <Grid item sx={{mt:3}} xs={12} sm={6}>
                            <TextField label='Confirmar correo electronico' variant='outlined' fullWidth/>       
                        </Grid>
                        
                        <Grid item sx={{mt:3}} xs={12}>
                            <TextField label='Nombre de Escuela' variant='outlined' fullWidth/>       
                        </Grid>

                        <Grid item sx={{mt:3}} xs={12} sm={6}>
                            <TextField label='Telefono' variant='outlined' fullWidth/>       
                        </Grid>

                        <Grid item sx={{mt:3}} xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Departamento</InputLabel>
                                <Select
                                    variant='outlined'
                                    label='Departamento'
                                    value={depa}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Dr. Manuel Belgrano</MenuItem>
                                    <MenuItem value={2}>Cochinoca</MenuItem>
                                    <MenuItem value={3}>El Carmen</MenuItem>
                                    <MenuItem value={4}>Humahuaca</MenuItem>
                                    <MenuItem value={5}>Ledesma</MenuItem>
                                    <MenuItem value={6}>Palpalá</MenuItem>
                                    <MenuItem value={7}>Rinconada</MenuItem>
                                    <MenuItem value={8}>San Antonio</MenuItem>
                                    <MenuItem value={9}>San Pedro</MenuItem>
                                    <MenuItem value={10}>Santa Bárbara</MenuItem>
                                    <MenuItem value={11}>Susques</MenuItem>
                                    <MenuItem value={12}>Tilcara</MenuItem>
                                    <MenuItem value={13}>Tumbaya</MenuItem>
                                    <MenuItem value={14}>Valle Grande</MenuItem>
                                    <MenuItem value={15}>Yavi</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>

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
