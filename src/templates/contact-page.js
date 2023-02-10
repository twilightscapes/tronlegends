/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
// import { RiSendPlane2Line } from "react-icons/ri"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
import useSiteMetadata from "../hooks/SiteMetadata"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"
export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    } 
  }
`

const Contact = ({ data }) => {
  const { showNav } = useSiteMetadata()
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (


    <Layout className="contact-page">
      <Helmet>
  <body className="contactpage utilitypage scroll" />
</Helmet>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />





{showNav ? (
    <div className="spacer" style={{height:'60px', border:'0px solid yellow'}}></div>
        ) : (
          ""
        )}
      <div className="container panel" style={{ maxWidth:'1024px', margin:'0 auto',
    paddingTop:'20px'}}>






     
      <h1 className="headline">{frontmatter.title}</h1>

        <div className="wrapper" style={{padding:'0 10%', maxWidth:'900px', margin:'0 auto' }}>
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <input type="text" name="name" placeholder="Name" required />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
          </p>
          <p>
            <label>
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" placeholder="Your Message" required></textarea>
            </label>
          </p>
          <p className="text-align-right" style={{marginRight:'60px', color:'#fff'}}>
            <button
              className="button"
              
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                {/* <RiSendPlane2Line /> */}
              </span>
            </button>
          </p>
        </form>
      </div>
      </div>





<br />
<br />
<Footer />
</Layout>
  )
}

export default Contact


