import React from "react"
import Seo from "./seo"
import { Link } from 'gatsby'
// import { ModalRoutingContext } from '@decantyme/gatsby-plugin-modal-routing'
// import { AiOutlineClose } from "react-icons/ai"
import "../assets/scss/reset.scss"
import "../assets/scss/global.scss"
import "../assets/scss/styles.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { StoreContext } from "../context/store-context"
// import { Toast } from "./toast"
// import Bug from "../../static/assets/logo.svg"
// import SiteLogo from "../../static/assets/logo.svg"
import { Helmet } from "react-helmet"
import Theme from "./theme"
// import { CartButton } from "./cart-button"
// import SearchIcon from "../../static/assets/search"
import useSiteMetadata from "../hooks/SiteMetadata"
// import ss from "../../static/assets/pagebg.webp"
// import { Link } from "gatsby-plugin-anchor-links"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import SignUp from "../components/newssign"
// import Install from './install-discount'
// import { navigate } from "gatsby";
const Layout = ({ children }) => {

  


const { companyname } = useSiteMetadata()
const { iconimage } = useSiteMetadata()

const { image } = useSiteMetadata()

const { showNav } = useSiteMetadata()
const { showNav2 } = useSiteMetadata()
const { showInfo } = useSiteMetadata()
// const { showFeature } = useSiteMetadata()
const { showPosts } = useSiteMetadata()
const { showResume } = useSiteMetadata()
// const { showSocial } = useSiteMetadata()
const { showSkills } = useSiteMetadata()
// const { showCover } = useSiteMetadata()
// const { showfooter } = useSiteMetadata()
const { showPopup } = useSiteMetadata()
const { menu1 } = useSiteMetadata()
const { menu2 } = useSiteMetadata()
const { menu3 } = useSiteMetadata()
const { menu4 } = useSiteMetadata()
const { font1 } = useSiteMetadata()

const navStyle = {
  bg: "",
}

const fontUrl = "https://fonts.googleapis.com/css?family=" + font1 + "&display=swap"


  return (
    <div style={{display:''}}> 
<>




<Helmet>
<link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
{ !font1 ? (
''
  ) : (
    <link id="yyy" rel="stylesheet"
          href={fontUrl} />
  )} 
</Helmet>

<Seo />


{/* <ModalRoutingContext.Consumer >
{({ modal, closeTo }) => (
<div style={{overflow:''}}>
  {modal ? (

    <div style={{display:'', position:'fixed', top:'10%', right:'3%', padding:'0px', fontSize:'2rem', background:'#111 !important', opacity:'1 !important', zIndex:'55 !important', filter:' drop-shadow(0px 4px 3px #000)', color:'#fff'}}>
    <Link state={{noScroll: true }} to={closeTo} style={{fontSize:'2rem',  textDecoration:'none', lineHeight:'', display:'flex', flexDirection:'column', color:'#fff', cursor:'pointer'}}>
      <AiOutlineClose />
    </Link>
    </div>

  ) : (
''
  )}

</div>
)}
</ModalRoutingContext.Consumer> */}





{showNav ? (

<ul sx={navStyle} id="menu" className="menu print" style={{position:'fixed', width:'100vw', top:'0', zIndex:'10', display:'flex', justifyContent:'space-around', fontSize:'clamp(.8rem, 2.3vw, 2.5rem)', gap:'10px', textAlign:'center',  color:'', boxShadow:'0 0 24px rgba(0,0,0,.9)', padding:'0 .5rem', alignItems:'center', minHeight:'70px', background:'', }}>
      
<li className="grad logo" style={{position:'relative', maxHeight:'60px', width:'auto', display:'flex', justifyContent:'center'}}>
            <AnchorLink to="/#top" name="homereturn" style={{position:'', display:'block', maxWidth:'150px', height:'60px', border:'0px solid'}}  aria-label="Link to Top" title="Back to Top">
            {iconimage ? (
      <img className="" src={iconimage} alt={companyname} style={{maxHeight:'60px', border:'none'}} />
                ) : (
                  <div style={{fontWeight:'bold',}}>{companyname}</div>
                )}
            </AnchorLink>
          </li>
      
      
{/* <li>
   <ul className="has-app" style={{position:'', right:'1rem', top:'80px', display:'flex', flexDirection:'column', gap:'4px'}}>
            <li className="has-app1" style={{position:'relative', display:''}}>
            <Link to="/login" className="" style={{color:'#fff',fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)',  width:'', justifyContent:'center', fontWeight:'', }}>Admin</Link>
              </li>




      <li className="has-app" order="5" style={{display:'',}}>
 <Link state={{modal: true}} to="/notes" className="" style={{fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)',}}>Notes</Link>
 </li>
</ul>
</li>     */}





      





{/* <li className="has-app" order="5" style={{display:'none',}}>
 <Link state={{modal: true}} to="/posts" className="navbar-item" style={{paddingRight:'',}}>{menu2}</Link>
 </li> */}


      {showPosts ? (
            <li className="" style={{position:'relative',}}>
            <AnchorLink ariaLabel="Menu 2" className="navbar-item" to="/archive/2" style={{paddingRight:'',}}>
            {menu2}
            </AnchorLink>
            </li>
            ) : (
  ""
)}



{showInfo ? (
            <li className="" style={{position:'relative',}}>
              <AnchorLink aria-label="Menu 1" className="navbar-item" to="/#info" style={{paddingRight:'',}}>
              {menu1}
              </AnchorLink>
              </li>
) : (
  ""
)}



       
{showResume ? (
            <li className="" style={{position:'relative',}}>
              <AnchorLink ariaLabel="Menu 3" className="navbar-item" to="/#resume" style={{paddingRight:'',}}>
              {menu3}
              </AnchorLink>
              </li>
            ) : (
              ""
            )}



{showSkills ? (
              <li className="" style={{position:'relative',}}>
              {/* <AnchorLink to="/#contact" className="navbar-item" style={{paddingRight:'',}}>
                Contact <span className="mobilehide">Me</span>
              </AnchorLink> */}
      
              <AnchorLink className="navbar-item" to="/#skills" style={{paddingRight:'',}}>{menu4}</AnchorLink>
              </li>

              ) : (
  ""
)}


<li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)' }}>
  
  <Theme  style={{padding:'0'}} />
  </li>
            
           
      
            </ul>


) : (
  ""
)}



<header id="top" name="pagetop" style={{}} >



{showNav2 ? (

<>
<input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
<>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>

<label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">
<div style={{textAlign:'center', opacity:'1', textShadow:'2px 2px 10px 2px #000', maxWidth:'500px', color:'#fff', fontWeight:'bold', border:'0px solid blue'}}>

{/* <Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'1', margin:'0 0 0 0', width:'100%', display:'none' }}/>  */}
{iconimage ? (
      <img className="" src={iconimage} alt={companyname} style={{maxHeight:'60px', maxWidth:'120px', border:'none'}} />
                ) : (
                  <div style={{fontWeight:'bold', color:'yellow'}}>companyname</div>
                )}

</div>
  </label>

  





   <div id="sidebarMenu" style={{minWidth:'', width:'',}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}

  

    <ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>

    <li className="grad" style={{position:'relative', maxHeight:'100px', width:'auto', display:'flex', justifyContent:'center'}}>
            <AnchorLink to="/#top" name="homereturn" style={{position:'', display:'block', maxWidth:'150px', height:'60px', border:'0px solid'}}  aria-label="Link to Top" title="Back to Top">
            {iconimage ? (
      <img className="" src={iconimage} alt={companyname} style={{maxHeight:'60px', border:'none'}} />
                ) : (
                  <div style={{fontWeight:'bold'}}>companyname</div>
                )}
            </AnchorLink>
          </li>
      
      

   
            

      {showPosts ? (
            <li className="" style={{position:'relative',}}>
            <AnchorLink className="navbar-item" to="/archive/2" style={{paddingRight:'',}}>
            {menu2}
            </AnchorLink>
            </li>
            ) : (
  ""
)}




          
          {showInfo ? (
            <li className="no-app" style={{position:'relative',}}>
              <AnchorLink className="navbar-item" to="/#info" style={{paddingRight:'',}}>
              {menu1}
              </AnchorLink>
              </li>
) : (
  ""
)}
      




       
{showResume ? (
            <li className="" style={{position:'relative',}}>
              <AnchorLink className="navbar-item" to="/#resume" style={{paddingRight:'',}}>
              {menu3}
              </AnchorLink>
              </li>
            ) : (
              ""
            )}



{showSkills ? (
              <li className="" style={{position:'relative',}}>
              {/* <AnchorLink to="/#contact" className="navbar-item" style={{paddingRight:'',}}>
                Contact <span className="mobilehide">Me</span>
              </AnchorLink> */}
      
              <AnchorLink className="navbar-item" to="/#skills" style={{paddingRight:'',}}>{menu4}</AnchorLink>
              </li>

              ) : (
  ""
)}



<li className="has-app" order="5" style={{display:'none',}}>
 <Link state={{modal: true}} to="/notes" className="navbar-item" style={{paddingRight:'',}}>Notes</Link>
 </li>

 <li className="has-app" style={{position:'relative', display:'none'}}>
            <Link to="/login" className="navbar-item" style={{color:'#fff', fontSize:'clamp(1.2rem, 1.5vw, 3.4rem)', width:'', justifyContent:'center',fontWeight:'bold', }}>Admin</Link>
              </li>


      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'center', verticalAlign:'center', padding:'5px 0 0 0' , background:'rgba(0,0,0,0)', color:'red !important' }}>
      <Theme  style={{color:'red !important'}} />
   {/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link>
   <CartButton quantity={quantity} /> */}
        </li>

    </ul>

  </div>
  </>

) : (
  ""
)}




{showPopup ? (
//  <ScrollAnimation className="signup" animateIn="bounceInDown" delay={5000} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute', top:'15vh', zIndex:'1', margin:'0 auto', padding:'',  width:'100vw', textAlign:'',}}>
//  <div style={{position:'relative', bottom:'', margin:'70px auto 0 auto', padding:' 0',  maxWidth:'500px', zIndex:'', textAlign:'', borderRadius:'12px',}}>
//  <SignUp />
//    </div>
//  </ScrollAnimation>

<div className="signup popper"
  style={{
  position:'fixed',
  top:'15vh',
  left:'20vw',
  right:'20vw',
  zIndex:'1',
  margin:'70px auto 0 auto',
  padding:' 0',
  maxWidth:'500px',
  borderRadius:'12px',
  // display:'grid',
  // placeSelf:'center',
  }}>
<SignUp />
  </div>

      ) : (
        ""
      )}
     

</header>

<div style={{maxWidth:'100vw', overflowX:'hidden', position:'relative'}}>
{children}
</div>
      
<img className="backimage" src={image} alt="Default Background" style={{height:'100vh', width:'100vw', position:'fixed', zIndex:'-2', top:'0', objectFit:'cover',}} width="10" height="10" />
      
      {/* <Consent /> */}
     {/* <Install /> */}
      {/* <Footer /> */}
      
      </>
    </div>
    
    );
  };
  
  export default Layout;