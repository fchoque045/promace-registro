import { PromaceLayout } from '../../components/layouts'
import React from 'react'
import { FormDNI } from '../../components/register'

const RegistroPage = () => {
  return (
    <PromaceLayout title={'Promace - Registro'} pageDescription={'Inscripciones a los cursos para docente JUJUY'}>
        <FormDNI />
  </PromaceLayout>
  )
}

export default RegistroPage