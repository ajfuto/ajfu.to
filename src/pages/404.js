import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from"../components/seo"

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="404 Not Found"/>
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <NavigationSpacer />
                    <div className="container flex-grow-1">
                                <h1>404 Not Found</h1>
                                <p>Sorry! The page you requested could not be found for one (or more) of the following reasons:</p>
                                <ul>
                                    <li>It doesn't exist.</li>
                                    <li>I'm a bad programmer.</li>
                                    <li>You're trying to break my website.</li>
                                </ul>
                                <Link to="/">Go back to safety.</Link>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default ErrorPage