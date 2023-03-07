import { ChangeEvent, useState, useContext } from 'react';
import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, TextField, Typography, Unstable_Grid2 } from "@mui/material"
import { DniContext } from '../../context/DniContext';

export const FormDNI = () => {

    const [searchDni, setSearchDni] = useState("");
    const {updateDni} = useContext(DniContext)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchDni(event.target.value);
    }

    const onToggleDni = () => {
        updateDni(searchDni)
    }

    return (
        <Grid container display='flex' justifyContent='center' alignItems='center'>
            <Card className='form-card' sx={{width: 600}}>
                <CardContent>
                    <Box sx={{mt:3}}>
                        <Typography variant='h1' component='h1'>Inicio</Typography>
                        <Typography variant='subtitle2' component='h6'>Ingresá tu numero de DNI para comenzar tu registro.</Typography>
                    </Box>
                    <Box sx={{mt:5}}>
                        <TextField 
                            label='DNI' 
                            variant='outlined' 
                            fullWidth 
                            onChange={onTextFieldChanged}/>       
                    </Box>

                    <Box sx={{mt:5, my: 3}}>
                        <NextLink href='/registro/confirmar' passHref legacyBehavior>
                            <Link>
                                <Button 
                                    color='secondary' 
                                    className='circular-btn' 
                                    fullWidth
                                    onClick={onToggleDni}
                                >
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
