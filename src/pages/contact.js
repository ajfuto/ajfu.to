import React from "react"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"

class Contact extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Contact" description="Feel free to contact me!" />
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <NavigationSpacer />
                    <div className="container flex-grow-1">
                            <div className="col-md-10 col-xl-8">
                                <h1>Contact</h1>
                                <p>Feel free to contact me through any of the following channels!</p>
                                    <p>
                                        Email me at <code class="language-text">me [at] ajfu [dot] to</code>.<br/>
                                        Check out some of my projects on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ajfuto">GitHub</a>.<br/>
                                        You can find me on Discord at <a target="_blank" rel ="noopener noreferrer" href="https://www.discord.com/users/178282932006420480">aj#0404</a>.<br/>
                                        Connect with me on <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/ajfuto">LinkedIn</a>.
                                    </p>
                            </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Contact