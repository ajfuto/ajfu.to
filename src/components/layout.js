import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"

export default function Layout({ children }) {
    return (
        <span>
            <Header />
            <span>
                {children}
            </span>
        </span>
    )
}