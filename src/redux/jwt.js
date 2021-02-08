import { JWT } as Actions from './Actions';

export const JWT = (state = null, action) => {
    switch (action.type) {
        case Actions.JWT:
            return action.payload;
        default:
            return state;
    }
}
