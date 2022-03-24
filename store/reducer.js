const initialState = {
    on: true, // true:on false:off
    auto: true, // true:auto false:manual
    luces: 0, // 0:off 1:on 2:nocturno 3:auto
    temperatura: 15,
    horas: 1,
    cal1: 0,
    cal2: 0,
    dif: 0,
    set: 0
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
        case 'INCREMENT_C1':
            return {
                ...state,
                cal1: state.cal1 + 1
            };
        case 'DECREMENT_C1':
            return {
                ...state,
                cal1: state.cal1 - 1
            };
        case 'INCREMENT_C2':
            return {
                ...state,
                cal2: state.cal2 + 1
            };
        case 'DECREMENT_C2':
            return {
                ...state,
                cal2: state.cal2 - 1
            };
        case 'INCREMENT_D':
            return {
                ...state,
                dif: state.dif + 1
            };
        case 'DECREMENT_D':
            return {
                ...state,
                dif: state.dif - 1
            };
        case 'INCREMENT_S':
            return {
                ...state,
                set: state.set + 1
            };
        case 'DECREMENT_S':
            return {
                ...state,
                set: state.set - 1
            };
        case 'CTRL_CHANGE':
            return {
                ...state,
                on: !state.on
            };
        case 'MODO_CHANGE':
            return {
                ...state,
                auto: !state.auto
            };
        case 'LUCES_CHANGE':
            return {
                ...state,
                luces: action.payload
            };
        default:
            return state;
    }
}