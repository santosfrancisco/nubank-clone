import React from 'react'
import { Container, Top, Title, Logo } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '~/assets/Nubank_Logo.png'

export default () => (
  <Container>
    <Top>
      <Logo source={logo} />
      <Title>Francisco</Title>
    </Top>
    <Icon name='keyboard-arrow-down' size={20} color='#fff' />
  </Container>
)
