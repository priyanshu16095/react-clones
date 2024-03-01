import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt='cta-logo-one' width={'620rem'} />
                <Signup>GET ALL THERE</Signup>
                <Description>Get Premier Access to Raye and the Last Dragon for an additional fee with a Disney+ subscription. As of 20/01/2024, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                <CTALogoTwo src='/images/cta-logo-two.png' alt='cta-logo-two' width={'500rem'} />
            </CTA>
        </Content>
        <BgImage></BgImage>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    place-items: center;
    height: 100vh;
`
const Content = styled.div`
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
const CTA = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 45rem;
    margin: 0 auto;
`
const CTALogoOne = styled.img`
    margin-bottom: 10px;
    display: block;
    max-width: 800px;
`
const CTALogoTwo = styled.img`
    margin-top: 10px;
`
const Signup = styled.a`
    margin-bottom: 10px;
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 23px;
    padding: 16.5px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0483ee;
    }
`
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 17px;
`
export default Login
