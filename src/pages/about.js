import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout';

const AboutPage = () => (
    <div>
        <Layout>
            <h1>ABOUT</h1>
            <p>Tamiser Advisors Pvt Ltd., is an expert-level consulting organization providing comprehensive services and solutions to clients. Headquartered in Mumbai, India, Tamiser was founded by ex-BFSI & Technology professionals with 25+ years of experience in practice building businesses,  Technology consulting and business solutions. Our proven competency in implementing varied solutions and commitment to excellence enables us to build trusted and lasting relationships with our clients and partners.</p>
            <h3>The TAMISER effect</h3>
            <p>The word “Tamiser” is borrowed from a term used to define a process of distinguishing, as if separating with a sieve. Professionals are continually striving to achieve the best possible results by eliminating the unwanted and retaining what is required for the business. An effective sift requires Research, Scrutiny, Trust, Communication, Excellence and, above all, Collaboration. At Tamiser, we use these values as the foundation of our business.</p>
            <h3>Our Philosophy</h3>
            <p>We believe in delivering business results in our clients’ challenging technical environments by leveraging our Technology & Business expertise with a deep-rooted passion for excellence.We help foster innovation with our clients' environments by delivering simple enterprise solutions to complex business problems and optimizing processes to maximize efficiency.</p>
            <p><Link to="contact">contact us</Link></p>
        </Layout>
    </div>
);
export default AboutPage;