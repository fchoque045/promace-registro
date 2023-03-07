import type {NextPage} from 'next'
import { Typography } from '@mui/material'
import { PromaceLayout } from '../components/layouts'
import { FormDNI } from '../components/register';

const Home: NextPage = () => {
    return (
        <PromaceLayout title={'Promace - Registro'} pageDescription={'Inscripciones a los cursos para docente JUJUY'}>
          {/* <Typography variant='h1' component={'h1'}>Formulario</Typography> */}
          <FormDNI />
        </PromaceLayout>
    )
}

export default Home