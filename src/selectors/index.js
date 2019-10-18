import { createSelector } from 'reselect'

export const filters = createSelector(
    state => state.filters,
    filters => filters
);

export const price = createSelector(
    filters,
    filters => filters.price
);

export const priceRange = createSelector(
    filters,
    filters => filters.price.range
);

export const brands = createSelector(
    filters,
    filters => filters.brands
);

export const title = createSelector(
    filters,
    filters => filters.title
);