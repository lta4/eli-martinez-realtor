/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { silentAuth } from "./src/utils/auth"
import "./src/styles/global.css"

class SessionCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    handleCheckSession = () => {
        this.setState({ loading: false })
    }

    componentDidMount() {
        silentAuth(this.handleCheckSession)
    }

    render() {
        return (
            this.state.loading === false && (
                <React.Fragment>{this.props.children}</React.Fragment>
            )
        )
    }
}

export const wrapRootElement = ({ element }) => {
    return <SessionCheck>{element}</SessionCheck>
}