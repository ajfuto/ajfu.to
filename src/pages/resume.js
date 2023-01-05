import React from "react"
import Seo from "../components/seo"
import NavigationSpacer from "../components/navigation-spacer"
import Footer from "../components/footer"


class Resume extends React.Component {
    render () {
        return (
            <div className="main-page h-100">
                <meta http-equiv="Refresh" content="0; url='../aj_futo_resume.pdf'" />
                <Seo title="Resume" description="AJ Futo's resume."/>
                <div className="container-fluid d-flex flex-column main-mh-100">
                    <NavigationSpacer />
                    <div className="container flex-grow-1">
                        <p>You should automatically be redirected to my resume. If not, please click <a href='../aj_futo_resume.pdf'>here</a>.</p>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Resume