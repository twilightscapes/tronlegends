/** @jsx jsx */
// import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"
import { StaticImage } from "gatsby-plugin-image"
// import SiteLogo from "../../static/assets/logo.svg"
import Countdown from 'react-countdown'

// const Completionist = () => ""

const Completionist = () => <span></span>
// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {

//     return <a href="https://memegenes.com/"><Completionist /></a>;
//   } else {

//     return (
//        <span>
//         Meme Genes
//       </span> 
//     )
//   }
// }

// const ViewIt = () => <span>Meme Genes - VIEW NOW!</span>
// const renderer1 = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <ViewIt />;
//   } else {
//     // Render a countdown
//     return (
//        <span>
//         Meme in {seconds} Seconds
//       </span> 
//     )
//   }
// }


const PostCard = ({ data }) => (

  



  <article
    className="post-card1"
    style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', height:'', position:'relative', background:'', padding:'2vh 0' }}
  >









    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image1"
          placeholder="blurred"
              // loading="eager"
    
              style={{position:'relative', zIndex:'1', maxHeight:'58vh', margin:'0 auto'}}
        />
      </Link>
      
    ) : (
      <Link  to={data.frontmatter.slug}><StaticImage className="featured-image" src="../../static/assets/default-og-image.jpg" alt="VidSock Default Image" style={{position:'relative', zIndex:''}} /></Link>
    )}











<div className="post-content" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', height:'', position:'relative', background:'', padding:'0', margin:'0 auto'}}>



{ data.frontmatter.nftdrop ? (
            
<div className="" style={{display:'flex', alignSelf:'center',  position:'absolute', bottom:'80px', width:'auto', margin:'0 auto', border:'0px solid blue', zIndex:'1', background:'rgba(0,0,0,0.6)', borderRadius:'12px' }}>

<div className="countdown" style={{display:'flex', justifyContent:'center', maxWidth:'600px',  margin:'0 auto', color:'#fff', textAlign:'center', padding:'0 2vw', fontSize:'200%', borderRadius:'12px', border:'0px solid #111', textShadow:'1px 2px 0px #000'}}>
  
<Countdown date={data.frontmatter.nftdrop}>
{/* <Countdown
date={Date.now() + 6000} className="countdown"> */}

<Completionist />
</Countdown>

{/* <Countdown date={Date.now() + 60000} renderer={renderer} /> */}
</div>

</div>

       
          ) : (

            ""
       
          )}


<div className="" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', height:'100%', textAlign:'left', padding:'1vh 1vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'8px', color:'#fff' }}>

<h2 className="title" style={{fontSize:'clamp(1rem, 2vw, 3rem)', }}>
  <Link 
    to={data.frontmatter.slug}
  >
    {data.frontmatter.title}
     {/* - <Countdown date={Date.now() + 60000} renderer={renderer} precision={0} intervalDelay={0} zeroPadTime={0} />  */}
    {/* <Countdown
date={Date.now() + 60000} className="countdown">
  date={Date.now() + 10000}
    intervalDelay={0}
    precision={3}
    zeroPadTime={0}
    renderer={props => ({ hours, minutes, seconds })}
<Completionist />
</Countdown> */}

  </Link>
</h2>


<p style={{minWidth:'', position:'', textAlign:'center', border:'0px solid red', fontSize:'70%'}}>
  <TimeAgo date={data.frontmatter.date}/>
</p>


</div>

{data.frontmatter.youtuber ? (
<Link to={data.frontmatter.slug} style={{}}>
  <div className="spotlight">

  <div style={{display:'grid', placeContent:'center', position:'relative'}}>
    


<div className="posticons" style={{fontWeight:'bold', padding:'1vh 2vw', width:'34vw', height:'', background:'rgba(0, 0, 0, 0.7)', borderRadius:'12px', position:'absolute', bottom:'15vh', left:'30vw', right:'30vw', margin:'0 auto'}}>

  


{/* <SiteLogo className="posticon" style={{margin:'0 auto', height:'20vh', width:'100%',}}/> */}

<div style={{display:'flex', justifyContent:'space-around', gap:'2vw'}}>

<FaImage className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />


    <ImPlay className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />

    
    <AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'100%', height:'5vh', fontSize:''}} />


{/* {data ? (
    ""
) : (
  ""
)} */}


</div>


Play Multimedia
</div>


</div>
</div>
</Link>
) : (
  ""
)}
</div>

  </article>

)

export default PostCard