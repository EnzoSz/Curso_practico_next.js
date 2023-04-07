import React, {useContext} from 'react';
import Link from 'next/link.js';
import OrderItem from '../components/OrderItem.jsx';
import AppContext from '../context/AppContext.js';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator,currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<img src= {arrow} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles['primary-button']} href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;