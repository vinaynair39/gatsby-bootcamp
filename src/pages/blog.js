import React from "react"
import Layout from '../components/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                node{
                    frontmatter{
                    title,
                    date,
                    },
                    fields{
                        slug
                    }
                }
            }
        }
    }`)
    return (
        <div>
            <Layout>
                <ol>
                    {data.allMarkdownRemark.edges.map(blog => {
                        return <li><Link to={`blog/${blog.node.fields.slug}`}><h1>{blog.node.frontmatter.title}</h1></Link><p>{blog.node.frontmatter.date}</p></li>;
                    })}
                </ol>
            </Layout>
        </div>
    );
};

export default BlogPage;