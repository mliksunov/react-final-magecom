import { createAction } from '../helpers';
import * as cnt from './constants';

export const toggleBrand = createAction(cnt.BRAND_TOGGLE);
export const changePrice = createAction(cnt.CHANGE_PRICE);
export const filteringRequest = createAction(cnt.FILTERING_REQUEST);