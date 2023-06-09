import React, {useContext} from 'react';
import Image from 'next/image.js';
import AppContext from '../context/AppContext.js';
import close from '../assets/icons/icon_close.png';
import styles from '../styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);
	const handleRemove = product => {
		removeFromCart(product);
	};
 	return (
		<div className={styles.OrderItem}>
			<figure>
				{product && <Image src={product?.images[0]} alt={product?.title} />}
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image src={close} alt="close" onClick={()=> handleRemove(product)} onKeyDown={()=> handleRemove(product)}  />
		</div>
	);
};

export default OrderItem;