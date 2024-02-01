import React from 'react'
import { PRODUCTS } from '../../products'
import Product from '../../components/product'
import './shop.css';
import { ShopContext } from '../../context/shop-context';
const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Gustavo Dutra Shop</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map(
                    (product) => <Product data={product} />)}
            </div>
        </div>
    )
}

export default Shop