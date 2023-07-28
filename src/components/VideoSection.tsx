export const VideoSection = () => {
	return (
		<div className="video-section">
			<div className="video-section-text-wrapper">
				<div style={{ letterSpacing: '2.1px' }}>CLEANING OUR OCEANS WITH EVERY WIPE</div>
				<div style={{ fontSize: '32px' }}>Wipes have plastic in them. We don’t.</div>
				<div>We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</div>
				<div className="learn-more">LEARN MORE</div>
			</div>
			<video className="video-background" autoPlay loop muted>
				<source src="/video/ocean.mp4" type="video/mp4" />
			</video>
		</div>
	);
};
