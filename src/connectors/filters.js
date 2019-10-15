import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { brands, title } from '../selectors';
import {toggleBrand} from '../actions';

const filtersSelector = createSelector(
    [brands, title],
    (brands, title) => ({
        brands,
        title,
    })
);

export const filtersConnector = connect(filtersSelector, { setBrand: toggleBrand });