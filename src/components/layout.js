import React from "react"
import Header from "./header.js"

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