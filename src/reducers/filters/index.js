import * as cnt from '../../actions/constants';

const initialState = {
    title: 'Filters',
    brands: [
        {id: 1, name: 'Sony', isActive: false},
        {id: 2, name: 'Apple', isActive: true},
        {id: 3, name: 'Bose', isActive: false},
        {id: 4, name: 'Dell', isActive: false},
        {id: 5, name: 'LG', isActive: false},
        {id: 6, name: 'Samsung', isActive: false},
        {id: 7, name: 'Huawei', isActive: false},
        {id: 8, name: 'HP', isActive: false},
    ],
    price: {
        minValue: 0,
        maxValue: 100,
        range: {
            min: 28,
            max: 73
        }
    }
};

export const filters = (state = initialState, action ) => {
    const {type, payload} = action;

    switch (type) {
        case cnt.BRAND_TOGGLE:
            return {
                ...state,
                brands: payload
            };
        case cnt.CHANGE_PRICE:
            return {
                ...state,
                price: {
                    ...state.price,
                    range: payload
                }
            };
        case cnt.FILTERING_REQUEST:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default filters;