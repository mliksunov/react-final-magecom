import React from 'react';
import InputRange from 'react-input-range';

export const Filters = props => {
    const {
        title,
        brands,
        toggleBrand,
        price,
        priceRange,
        changePrice,
        filteringRequest
    } = props;

    const toggleActive = (e) => {
        let id = parseInt(e.target.getAttribute('data-id'));

        let setActive = brands.map( item => {
            if (item.id === id) {
                return {
                    ...item,
                    isActive: !item.isActive
                };
            }

            return item;
        });

        toggleBrand(setActive);
    };

    const handleOnChangeSlider = (val) => {
        changePrice(val);
    };

    const handleOnChangeMin = (e) => {
        changePrice({...priceRange, min: parseInt(e.target.value)});
    };

    const handleOnChangeMax = (e) => {
        changePrice({...priceRange, max: parseInt(e.target.value)});
    };

    const clearAllFilters = () => {
        let clearActive = brands.map( item => {
            return {
                ...item,
                isActive: false
            };
        });

        toggleBrand(clearActive);
        changePrice({min: price.minValue, max: price.maxValue});
    };

    const sendFiltersRequest = () => {
        let activeBrands = brands.filter(item => item.isActive === true).map(item => item.id);

        filteringRequest({
            brands: activeBrands,
            price: {from: priceRange.min, to: priceRange.max}
        });
    };

    return (
        <div className='filters'>
            <div className="filters-heading">
                <h4>{title}</h4>
                <div onClick={clearAllFilters}>Clear all</div>
            </div>
            <div className='brands-wrapper'>
                <h4>Brand:</h4>
                <ul className="brands-list">
                    {brands.map( brand => <li
                        className={brand.isActive ? 'active' : ''}
                        key={brand.id} data-id={brand.id}
                        onClick={toggleActive}>{brand.name}</li>
                    )}
                </ul>
            </div>
            <div className="price-wrapper">
                <h4>Price range:</h4>
                <div className='slider-inputs'>
                    <div className='control'>
                        <label htmlFor="price_minval">From</label>
                        <input id='price_minval' type="number" value={priceRange.min} min={price.minValue} max={priceRange.max} onChange={handleOnChangeMin}/>
                    </div>
                    <div className='control'>
                        <label htmlFor="price_maxval">To</label>
                        <input id='price_maxval' type="number" value={priceRange.max} min={priceRange.min} max={price.maxValue} onChange={handleOnChangeMax}/>
                    </div>
                </div>
                <div className='slider-wrapper'>
                    <InputRange
                        maxValue={price.maxValue}
                        minValue={price.minValue}
                        value={priceRange}
                        onChange={handleOnChangeSlider}
                        formatLabel={v => `$${v}`}
                    />
                </div>
            </div>
            <div className="button-holder">
                <button type='button' onClick={sendFiltersRequest}>Apply Filters</button>
            </div>
        </div>
    );
};