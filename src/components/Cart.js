import {Link} from 'react-router-dom'

const cart = () => {
	return (
		<div>
		<Link to="/">Go to product list</Link>
			<h1 className="cart">Cart Page</h1>
		</div>
	)
}

export default cart