const initialState = {
    title: 'Filters',
    brands: [
        {id: 1, name: 'Sony', isActive: false},
        {id: 2, name: 'Apple', isActive: true},
        {id: 3, name: 'Bose', isActive: false},
        {id: 4, name: 'Dell', isActive: false},
        {id: 5, name: 'Huawei', isActive: false},
        {id: 6, name: 'Alpine', isActive: false},
    ]
};

export const filters = (state = initialState, action ) => {
    const {type} = action;

    switch (type) {
        default:
            return state;
    }
};

export default filters;