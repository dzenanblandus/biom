export const MenuElement = (props: any) => {
	return (
		<div style={{ display: 'flex', marginBottom: '50px' }}>
			<img src={props.image} alt="" style={{ width: '69px', height: '69px', marginRight: '20px' }}></img>
			<p>{props.text}</p>
		</div>
	);
};