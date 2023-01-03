import React from "react"
import Seo from "../components/seo"

class Resume extends React.Component {
    render () {
        return (
            <div>
                <Seo title="Resume" description="AJ Futo's resume."/>
                <meta http-equiv="Refresh" content="0; url='../aj_futo_resume.pdf'" />
            </div>
        )
    }
}

export default Resume