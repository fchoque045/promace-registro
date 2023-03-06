import type {NextPage} from 'next'
import { Typography } from '@mui/material'
import { PromaceLayout } from '../components/layouts'

const Home: NextPage = () => {
    return (
        <PromaceLayout title={'Promace - Registro'} pageDescription={'Inscripciones a los cursos para docente JUJUY'}>
          <Typography variant='h1' component={'h1'}>Formulario</Typography>
        </PromaceLayout>
    )
}

export default Home