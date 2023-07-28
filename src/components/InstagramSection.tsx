import { InstagramSectionElements } from "../utils/consts";

export const InstagramSection = () => {
  return (

    <div>
    <div style={{display:'flex', justifyContent:'center', fontSize:'36px', fontWeight:'bold', marginBottom:'48px'}}>#cleanwithbiom</div>
   
    <div className="slider">
	  <div className="slide-track">
     {InstagramSectionElements.map((element, index) => (
            <div key={index} 
               className="slide"
               style={index % 2 === 0 ? {marginTop:'16px'}: {}}
            >
              <img src={`/img/instagram/${element}.png`} alt={`Images ${index + 1}`} />
            </div>
         ))}
	</div>

</div>
<div style={{ display: 'flex', justifyContent:'center', backgroundColor:'white' }}>
					<div className="button-border"  style={{borderTopRightRadius:'0', borderBottomRightRadius:'0'}}>FOLLOW US ON INSTAGRAM</div>
					<div className="button-border" style={{borderTopLeftRadius:'0', borderBottomLeftRadius:'0', borderLeft:0}}><img src={'/img/instagram.svg'} alt=""></img></div>
				</div>

</div>
  )
}
