import { Persona } from '@/interface';
import { DniState } from './'

type DniActionType = 
| {type: '[dni] - UpdateDni', payload: Persona}

export const DniReducer = (state: DniState, action: DniActionType): DniState => {
    switch (action.type) {
        case '[dni] - UpdateDni':
            return {
                ...state,
                persona: action.payload

            }

        default:
            return state;
    }
}