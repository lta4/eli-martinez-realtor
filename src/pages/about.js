import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import * as styles from "../styles/about.module.css"

const About = () => (
    <Layout>
        <Seo title="About" />        
            <h1>About Eli'
                <p>Eli brings her years of construction contracting management to the team at Compass Highland Park. Experienced with a background of building permits, site walks and reading plans, she is ready to leverage these skills to the advantage of her buyers and sellers. Away from real estate, she can be found off trail with her partner and dogs working on their vacation rental property in Joshua Tree, CA. </p>
            </h1>
            <h2>Eli' loves
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </h2>
            <h3>Assistant
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </h3>
    </Layout>
)

export default About