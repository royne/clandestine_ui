import React, { Fragment } from "react";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./Header";
import Banner from "./Banner";
import NavMenu from "./NavMenu";

const DivContainer = styled.div`
  width: 100%;
  max-height: 100vh;
`

const Main = styled.main`
  width: 100%;
  height: ${(props) => props.calHeigth ? "calc(100vh - 300px)" : "calc(100vh - 220px)"};
  padding: 2%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--purple1);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: var(--purple2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--purple1);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    background: var(--purple2);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track:hover,
  ::-webkit-scrollbar-track:active {
    background: var(--purple2);
  }
  @media (min-width: 576px) {
    padding: 3% 10%;
  }
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --purple1: #461319; /* morado oscuro*/
            --purple2: #B65B76; /* morado medio*/
            --purple3: #DAA89F; /* morado claro*/
            --black: #000000; /* negro */
            --white: #ffffff;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            background-color: var(--black);
            color: var(--white);
            margin: 0;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "arial", serif;
            font-weight: 700;
          }
          h3 {
            font-family: "helvetica", sans-serif;
          }
          p {
            font-family: "helvetica", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
        `}
      ></Global>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="content-language" content="es"></meta>
        <title key="title">Clandestino</title>
        <meta name="theme-color" content="#461319" />
      </Head>
      <DivContainer>
        <Header />
        {props.showBanner && <Banner />}
        <Main calHeigth={props.showBanner}>{props.children}</Main>
        <NavMenu />
      </DivContainer>
    </Fragment>
  );
}

export default Layout;