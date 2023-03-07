import { PromaceLayout } from '../../components/layouts'
import React from 'react'
import { FormRegister } from '../../components/register';

const RegistroConfirmarPage = () => {
  return (
    <PromaceLayout title={'Promace - Registro'} pageDescription={'Inscripciones a los cursos para docente JUJUY'}>
        <FormRegister />
  </PromaceLayout>
  )
}

export default RegistroConfirmarPage