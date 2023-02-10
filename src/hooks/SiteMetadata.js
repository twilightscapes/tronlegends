import { useStaticQuery, graphql } from "gatsby"
 const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
          title
          titleDefault
          siteUrl
          description
          image
          twitterUsername
          iconimage
          companyname
          comments
          showfooter
          showInfo
          showCover
          showFeature
          showPosts
          showResume
          showSocial
          showSkills
          showNav
          showNav2
          showPopup
          showDates
          menu1
          menu2
          menu3
          menu4
          font1
          }
        }
      }
    `
  )
  return site.siteMetadata
}
export default useSiteMetadata