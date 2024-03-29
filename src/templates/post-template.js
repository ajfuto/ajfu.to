import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"

const PostTemplate = ({ data, location }) => {
    const post = data.mdx
    const { previous, next } = data
    const postUrl = data.site.siteMetadata.siteUrl + post.fields.slug

    return (
        <div className="main-page h-100">
            <Seo
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
                image={post.frontmatter.image}
            />
            <section id="top" className="container-fluid d-flex flex-column main-mh-100">
                <NavigationSpacer />
                <div className="row justify-content-center">
                        <div className="d-none d-xl-block col-xl-2">
                        </div>
                        <div className="col-md-10 col-xl-8">
                            <p className="m-0 main-fade-in-animation">
                                <Link to="/tech-tips"><strong>../</strong></Link>
                            </p>
                            <article id="post-content" itemScope itemType="http://schema.org/Article">
                                <header>
                                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                                    <p>{post.frontmatter.date}</p>
                                    <hr></hr>
                                </header>
                                <section itemProp="articleBody">
                                    <MDXRenderer>{post.body}</MDXRenderer>
                                </section>
                                <hr />
                            </article>
                        </div>
                        <div className="d-none d-xl-block col-xl-2"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-xl-8">
                        </div>
                    </div>
                    <nav className="mb-5">
                        <div className="row justify-content-center">
                            <div className="col-6 col-md-5 col-xl-4 text-start">
                                {next && (
                                    <React.Fragment>
                                        <p className="m-0">← Newer</p>
                                        <Link to={next.fields.slug} rel="next">
                                            {next.frontmatter.title}
                                        </Link>
                                    </React.Fragment>
                                )}
                            </div>
                            <div className="col-6 col-md-5 col-xl-4 text-end">
                                {previous && (
                                    <React.Fragment>
                                        <p className="m-0">Older →</p>
                                        <Link to={previous.fields.slug} rel="prev">
                                            {previous.frontmatter.title}
                                        </Link>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </nav>
                <Footer />
            </section>
        </div>
    )
}

export default PostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        mdx(id: { eq: $id }) {
            id
            timeToRead
            excerpt(pruneLength: 160)
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                image
            }
            body
        }
        previous: mdx(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: mdx(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`