import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"
import Contact from "components/Contact"
import EP from "components/EP"
import Videos from "components/Videos"
import Shop from "components/Shop"
import sprayLogo from "assets/images/sash-spray-logo.png"
import ShopButtonBase from "components/ShopButton"

const ShopButton = styled(ShopButtonBase)`
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    padding: 3rem 0;
    overflow-y: auto;
    text-align: center;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    align-items: center;

    & > div {
      margin: 2rem 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.5rem;
    }
  }
`

const Title = styled.img.attrs({ src: sprayLogo })`
  z-index: 2;
  height: 12rem;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;

  @media screen and (max-width: 800px) {
    position: relative;
    margin-bottom: 2rem;
    transform: none;
    left: unset;
    top: unset;
  }
`

const TopRow = styled(Row)`
  height: 60%;
`

const BotRow = styled(Row)`
  height: 40%;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

export default function Main(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Background />
      <Container>
        <Title />
        <TopRow>
          <EP />
          <ShopButton />
          <Videos />
        </TopRow>
        <BotRow>
          <Contact />
          <Shop />
        </BotRow>
      </Container>
    </>
  )
}
