import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NavigationSpacer from "../components/navigation-spacer"

class Home extends React.Component {
  render() {
    return (
      <div className="main-page h-100">
        <Seo title="Home" />
        <div className="container-fluid d-flex flex-column main-mh-100">
          <NavigationSpacer />
          <div className="container flex-grow-1">
            <h1>Hi there, I'm A.J.</h1>
              <p>I study Computer Science with a focus in cybersecurity at the University of Central Florida.</p>
              <p>I'm extremely honored to be one of <a target="_blank" rel="noopener noreferrer" href="https://www.ucf.edu/news/nsf-awards-ucf-2-9-million-to-train-next-generation-of-cybersecurity-defenders/">UCF's first</a> NSF Scholarship-for-Service students!</p>
              <p>I love hiking, solving fun and unique problems, and listening to music. Check out my <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/ajfuto">Spotify</a>!</p>
          </div>
          <Footer />
        </div>
      </div>
      
    )
  }
}

export default Home