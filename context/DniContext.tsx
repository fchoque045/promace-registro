import { Persona } from '../interface';
import { createContext } from 'react';

interface ContextProps {
    persona: Persona;

    updateDni: (dni: string) => void;
}

export const DniContext = createContext({} as ContextProps)