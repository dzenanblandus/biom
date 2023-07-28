import { MenuElements } from '../utils/consts';
import { MenuElement } from './MenuElement';

export const MainSection = () => {
	return (
		<>
			<section className="bg-section">
				<div className="text-container">
					<div className="big-text">
						So fresh. <br></br>So green.
					</div>
					<div className="small-text">
						We believe that a more eco-friendly everyday makes a happier you and me. We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and
						plastic-free.
					</div>
					<button className="btn">GET STARTED</button>
				</div>
			</section>
			<section className="dispenser-section">
				<div className="meet-biom-scroll">
					<p className="meet-biom">meet biom</p>
				</div>
				<img src="../img/Mask Group 12.png" className="bg-image" alt=""/>
				<div className="text-container-right">
					<p>THE BIOM DISPENSER</p>
					<h1>Redefine your experience of clean.</h1>
					<div className="small-text green">A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach.</div>
					{MenuElements.map((element, index) => (
						<MenuElement image={`/img/${element.icon} icon.png`} text={element.text} key={index}/>
					))}
					<button className="btn green-button">SHOP NOW</button>
				</div>
			</section>
		</>
	);
};
