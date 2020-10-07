import React from 'react'
import styled from 'styled-components'
import user from '../app/user'

export default function Whatsapp() {

  return (
    <WhatsappContainer href={user.whatsapp} target="_blank">
      <WhatsappIcon src='/static/whatsapp-logo.png' />
    </WhatsappContainer>
  )
}

const WhatsappContainer = styled.a`
  background-color: #3abf4c;
  position: fixed;
  z-index: 999999;
  right: 20px;
  bottom: 20px;
  padding: 12px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.4);
  cursor: pointer;
  @media(min-width: 600px) {
    right: 40px;
    bottom: 40px;
    padding: 15px;
  }
`
const WhatsappIcon = styled.img`
  z-index: 999999;
  height: 30px;
  width: 30px;
`