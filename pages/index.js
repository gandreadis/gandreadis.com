import Head from "next/head";
import React from 'react';
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import style from '../styles/style.scss';

const Index = () => (
    <div>
        <Head>
            <title>Georgios Andreadis</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
            <meta name="description" content="Personal site of Georgios Andreadis"/>
            <meta name="author" content="Georgios Andreadis"/>
            <meta name="keywords" content="Georgios Andreadis gandreadis"/>

            <meta property="og:title" content="Georgios Andreadis"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="https://gandreadis.com/static/georgios-andreadis-portrait.png"/>
            <meta property="og:url" content="https://gandreadis.com"/>
            <meta property="og:description" content="Personal site of Georgios Andreadis."/>
            <meta property="og:locale" content="en_US"/>

            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
            <link rel="manifest" href="/static/manifest.json"/>
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            <meta name="msapplication-config" content="/static/browserconfig.xml"/>
            <meta name="theme-color" content="#1b15ee"/>

            <script src="https://use.fontawesome.com/9765839b42.js"/>
        </Head>

        <style dangerouslySetInnerHTML={ { __html: style } }/>

        <Navbar/>
        <section className="hero is-info is-fullheight">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <div className="content" style={ { marginTop: "2rem" } }>
                        <figure
                            className="image is-128x128 has-text-centered"
                            style={ { margin: "0 auto", borderRadius: "100%", overflow: "hidden" } }
                        >
                            <img src="/static/georgios-andreadis-portrait.png" alt="Georgios Andreadis"/>
                        </figure>
                    </div>
                    <h1 className="title">
                        👋 Hi there!
                    </h1>
                    <h2 className="subtitle">
                        I'm Georgios (Jorgos)
                    </h2>
                    <div style={ { padding: "2.5rem" } }/>
                    <Contact/>
                </div>
            </div>
        </section>

        <section className="hero is-medium is-success">
            <div className="hero-body">
                <div className="container">
                    <Bio/>
                </div>
            </div>
        </section>


        <section className="section is-medium" id="publications">
            <div className="container">
                <h2 className="title is-2 has-text-centered">Publications</h2>
                <Publications/>
            </div>
        </section>

        <section className="section is-medium" id="projects">
            <div className="container">
                <h2 className="title is-2 has-text-centered">Projects</h2>
                <Projects/>
            </div>
        </section>

        <Footer/>
    </div>
);

export default Index;

