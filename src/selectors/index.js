import { createSelector } from 'reselect'

export const filters = createSelector(
    state => state.get('filters'),
    filters => filters
);

export const brands = createSelector(
    filters,
    filters => filters.brands
);

export const title = createSelector(
    filters,
    filters => filters.title
);