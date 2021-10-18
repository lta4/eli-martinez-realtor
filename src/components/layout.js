/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import Header from "./header"
 import Footer from "./footer"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
 import { 
   faFacebookSquare, 
   faLinkedin, 
   faTwitterSquare 
  } from "@fortawesome/free-brands-svg-icons"
 import "./layout.css"
 import "./header.css"
//  import * as styles from "../styles/home.module.css"
 import "../styles/global.css"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: 960,
           padding: `0 1.0875rem 1.45rem`,
         }}
       >
         <main>{children}</main>
         <footer className="footerContainer">
          <div className="icons">
            {/* <link rel="stylesheet" href="www.linkedin.com/in/andrewarias4" icon={faLinkedin}></link> */}
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitterSquare} />
          </div>
           <Footer />
           © {new Date().getFullYear()}, Built with
           {` `}
           Gatsby by <a href="https://capstone-anxiety-app.netlify.app" className="andrewLink">Andrew Arias</a>
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 