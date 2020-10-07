import React from 'react'
import styled from 'styled-components'
import user from '../app/user'

export default function SocialNetworks() {

  return (
    <SocialNetworksContainer>
      <div>
        <a href={user.facebook} target="_blank">
          <img src='https://www.flaticon.com/svg/static/icons/svg/145/145802.svg' style={{ marginRight: 12 }} />
        </a>
        <a href={user.likedin} target="_black">
          <img src='https://www.flaticon.com/svg/static/icons/svg/145/145807.svg' style={{ marginLeft: 12 }} />
        </a>
      </div>
    </SocialNetworksContainer>
  )
}

const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    height: 32px;
    width: 32px;
  }
`