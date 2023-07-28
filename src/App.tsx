import './App.css';
import '../src/styles/_all.scss';

import { Navbar } from './components/Navbar';
import { MainSection } from './components/MainSection';
import { Carousel } from './components/Carousel';
import { SlideComponent } from './components/SlideComponent';
import { WipesSection } from './components/WipesSection';
import { VideoSection } from './components/VideoSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';

function App() {
	return (
		<div style={{ maxWidth: '100vw', position: 'relative' }}>
			<Navbar></Navbar>
			<div className="body">
				<MainSection></MainSection>
				<Carousel></Carousel>
				<SlideComponent></SlideComponent>
				<WipesSection></WipesSection>
				<VideoSection></VideoSection>
				<InstagramSection></InstagramSection>
        <Footer></Footer>
			</div>
		</div>
	);
}

export default App;
