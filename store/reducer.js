const initialState = {
    temperatura: 15,
    horas: 1,
    auto: true
}
export const counterReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'INCREMENT_T':
            return {
                ...state,
                temperatura: state.temperatura + 1
            };
        case 'DECREMENT_T':
            return {
                ...state,
                temperatura: state.temperatura - 1
            };
        case 'INCREMENT_H':
            return {
                ...state,
                horas: state.horas + 1
            };
        case 'DECREMENT_H':
            return {
                ...state,
                horas: state.horas - 1
            };
        default:
            return state;
    }
}