import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { breakpoints } from './breakpoints'

import {
  Button,
  Card,
  Accordion,
  Link,
  Text,
  Textarea,
  Tabs,
  StackDivider,
  Input,
} from './components'

import '@fontsource/advent-pro'
import '@fontsource/atomic-age'
import '@fontsource/poppins'

export const baseTheme = extendTheme({
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
  fontSizes: {
    h1: '24px',
    h2: '20px',
    h3: '18px',
    h4: '16px',
  },
  colors,
  breakpoints,
  components: {
    Button,
    Tabs,
    StackDivider,
    Card,
    Accordion,
    Link,
    Text,
    Textarea,
    Input,
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
})
