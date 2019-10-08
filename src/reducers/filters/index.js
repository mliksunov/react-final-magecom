const initialState = {
    name: 'Pres'
};

export const filters = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case 'TASK_ADD':
            return {
                data: [
                    ...state,
                    payload
                ]
            };
        default:
            return state;
    }
};

export default filters;