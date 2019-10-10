import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { brands, title } from '../selectors';

const filtersSelector = createSelector(
    [brands, title],
    (brands, title) => ({
        brands,
        title,
    })
);

export const filtersConnector = connect(filtersSelector);