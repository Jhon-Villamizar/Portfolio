import AboutMe from "../components/aboutMe";
import Header from "../components/header";
import Layout from "../contents/layout";
import Skills from "../components/skills";
import React from "react";
import Proyects from "../components/proyects";
import Companies from "../components/companies";

const Index = () => (
  <Layout>
    <Header />
    <AboutMe />
    <Skills />
    <Proyects />
    <Companies />
  </Layout>
)

export default Index;
