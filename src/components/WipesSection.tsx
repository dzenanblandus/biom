import { WipesMenuElements } from "../utils/consts"
import { MenuElement } from "./MenuElement"

export const WipesSection = () => {
 return (
  <div className="wipes-section">
  <img alt="" src="/img/stockimage.png" style={{flex:'0.3'}}></img>
  <img src="/img/refill.png" style={{position:'absolute'}} alt="" className="refill"></img>

  <div className="wipes-section-green-wrapper">
  <div className="text-container-right" style={{paddingLeft: '350px'}}>
					<p>BIOM WIPES</p>
					<h1>Better for you, and the planet.</h1>
					<div className="small-text green">The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home.</div>
          {WipesMenuElements.map((element, index) => (
						<MenuElement image={`/img/${element.icon}icon.png`} text={element.text} key={index}/>
					))}
					<button className="btn green-button" style={{position:'absolute', marginTop:'-16px'}}>SUBSCRIBE NOW</button>
				</div>
  </div>
  </div> 
  ) 
}