import { useState } from 'react';
import { dispenserColors } from '../utils/consts';

const Slide = (props: any) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			style={{ width: '25%' }}
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
		>
			<img
				src={`/img/${props.dispenser.color}.png`}
				alt=""
				style={isHovered ? { position: 'absolute', transform: 'translateX(20%)', WebkitTransition: 'all .5s ease' } : { position: 'absolute' }}
			></img>
			{isHovered && (
				<div style={{ position: 'relative', top: '100%' }}>
					<p className="subtitle-1">Biom Dispenser</p>
					<p className="subttile-2">{props.dispenser.name}</p>
				</div>
			)}
		</div>
	);
};

export const SlideComponent = () => {
	return (
    <>
		<section className="slide-section">
			<div style={{ width: '30%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<p className="ready-title">Ready to start wiping out waste?</p>
				<div style={{ display: 'flex' }}>
					<div className="button-border"  style={{borderTopRightRadius:'0', borderBottomRightRadius:'0'}}>CHOOSE YOUR VESSEL COLOR</div>
					<div className="button-border" style={{borderTopLeftRadius:'0', borderBottomLeftRadius:'0', borderLeft:0}}><img src={'/img/arrow.svg'} alt=""></img></div>
				</div>
			</div>
			{dispenserColors.map((element, index) => (
				<Slide dispenser={element}></Slide>
			))}
		</section>
    <section className='gray-section'>
      <div className='gray-section-text-wrapper'>
      <div style={{letterSpacing:'2.1px'}}>WHAT PEOPLE ARE SAYING</div>
      <div style={{fontSize:'25px', fontFamily: 'Lora', fontWeight:'bold', lineHeight:'1.8'}}>“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”</div>
      <div>-RACHAEL H.</div>
      <div className='dots'>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
      </div>
    </section>
    </>

	);
};
