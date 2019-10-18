import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { brands, price, priceRange, title } from '../selectors';
import {toggleBrand, changePrice, filteringRequest} from '../actions';

const filtersSelector = createSelector(
    [brands, price, priceRange, title],
    (brands, price, priceRange, title) => ({
        brands,
        price,
        priceRange,
        title,
    })
);

export const filtersConnector = connect(
    filtersSelector,
    {
        toggleBrand,
        changePrice,
        filteringRequest
    }
);