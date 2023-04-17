import React, { useContext} from 'react';
import Image from "next/image.js";
import AppContext from '../context/AppContext.js';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import styles from '../styles/ProductItem.module.scss';
const ProductItem = ({ product }) => {
	const {addToCart} = useContext(AppContext);
	const handleClick = item => {
		addToCart(item);
	}; 
	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width={240} height={240}/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure  className={styles['more-clickable-area']} onClick={() => handleClick(product)} onKeyPress={() => handleClick(product)} role="presentation">
					<Image src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;