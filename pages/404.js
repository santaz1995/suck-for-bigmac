import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Не знайдено</Heading>
      <Text>Сторінку, яку ви шукаєте, не знайдено.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Повернутися додому</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
