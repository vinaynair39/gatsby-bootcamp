import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
    query GetBlog($slug: String!){
    markdownRemark(fields: {slug:{eq:$slug}}){
      frontmatter{
        title,
        date
      }
      html
    }
  }

`
const Blog = (props) => {
    return (
        <Layout>
            {console.log(props)}
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )

}

export default Blog;