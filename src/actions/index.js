import { createAction } from '../helpers';
import * as cnt from './constants';

export const toggleBrand = createAction(cnt.BRAND_TOGGLE);