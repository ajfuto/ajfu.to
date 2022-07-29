import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./theme-toggle"

class Header extends React.Component {
    render() {
        return (
            <div className="container py-5">
                <nav className="main-navbar d-flex flex-md-row flex-column navbar navbar-expand navbar-custom">
                <span className="navbar-brand main-color-title" style={{marginRight: 0}}>ajfu.to</span>
                    <div className="d-flex flex-row" style={{marginLeft: 1 + "em"}}>
                        <Link className="nav-link" to="/">/home</Link>
                        <Link className="nav-link" to="/tech-tips">/tech-tips</Link>
                        <Link className="nav-link" to="/contact">/contact</Link>
                        <a className="nav-link" href="../aj_futo_resume.pdf" target="_blank">/resume</a>
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header