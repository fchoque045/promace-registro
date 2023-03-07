import { Persona } from '../interface';
import { FC, PropsWithChildren, useReducer } from 'react';
import { DniContext, DniReducer } from './';
import { padronApi } from '../api';

export interface DniState {
    persona: Persona;
}

const Dni_INITIAL_STATE: DniState = {
    persona: {
        dni: '40154045',
        nombre: 'NOMBRE',
        apellido: 'APELLIDO'
    },
}

export const DniProvider:FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(DniReducer, Dni_INITIAL_STATE)

    const updateDni = async (dni: string) => {
        const resp = await padronApi.get<string>(`/persona/?dni=${dni}`)
        let newPersona:Persona = {
            dni,
            nombre: 'Nombre',
            apellido: 'Apellido'
        }
        if (resp.status == 200) {
            newPersona.nombre = resp.data[0]['nombre']
            newPersona.apellido = resp.data[0]['apellido']
        } else {
            newPersona.dni = 'No se encuentra'
        }
        
        dispatch({type: '[dni] - UpdateDni',  payload: newPersona})
    }

    return (
        <DniContext.Provider value={{
            ...state,

            // Methods
            updateDni,
        }}>
            {children}
        </DniContext.Provider>
    )
}