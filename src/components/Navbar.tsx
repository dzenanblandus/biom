export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left-items">
				<div>SHOP</div>
				<div>WHY BIOM</div>
				<div>SCENTS</div>
			</div>
			<div className="logo">
				<img src="logo.png" alt="Logo" />
			</div>
			<div className="right-items">
				<div>SIGN IN</div>
				<div>CART</div>
				<img src="cart.png" alt="" className="cart" />
			</div>
		</div>
	);
};
