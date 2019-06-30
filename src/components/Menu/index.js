import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import QRCode from 'react-native-qrcode'

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

export default ({ translateY }) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode
          value='https://santosfrancisco.github.io'
          size={80}
          fgColor='#FFF'
          bgColor='#8B10AE'
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#FFF' />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name='person-outline' size={20} color='#FFF' />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name='attach-money' size={20} color='#FFF' />
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <Icon name='smartphone' size={20} color='#FFF' />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}
