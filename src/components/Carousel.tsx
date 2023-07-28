import { useState } from 'react';
import { CarouselElements } from '../utils/consts';

export const Carousel = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(0);

	const handleMouseDown = (event: any) => {
		setIsDragging(true);
		setStartX(event.clientX);
		setScrollLeft(event.currentTarget.scrollLeft);
		event.currentTarget.style.cursor = 'grabbing';
	};

	const handleMouseMove = (event: any) => {
		if (!isDragging) return;
		event.preventDefault();
		const x = event.clientX;
		const walk = (x - startX) * 3;
		event.currentTarget.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUp = (event: any) => {
		setIsDragging(false);
		event.currentTarget.style.cursor = 'grab';
	};

	return (
		<section className="image-carousel">
			<div style={{ position: 'absolute' }}>
				<div className="small-title">WHERE YOU NEED IT</div>
				<div className="big-title">when you need it.</div>
			</div>

			<div className="carousel-container" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
				{CarouselElements.map((element, index) => (
					<div
						onMouseEnter={() => {
							setIsHovered(true);
							setHoveredIndex(index);
						}}
						onMouseLeave={() => {
							setIsHovered(false);
						}}
            key={index}
					>
						<div className="image-wrapper">
							<img src={`/img/${element}.png`} alt="Images 1" />
							{isHovered && hoveredIndex === index && <p style={{ position: 'absolute', color: 'white', fontSize: '20px', marginTop: '300px' }}>{element}</p>}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
