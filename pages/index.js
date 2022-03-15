import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  Input,
  Select,
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { Form, Formik, Field } from 'formik';

const Home = () => {
  function validateRequired(value) {
    let error
    if (!value) {
      error = 'Поле обов\'язкове для заповнення'
    }
    return error
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Російський військовий корабель. Іди нахуй
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Вітання. Ми волонтери з України
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Навіщо ми зробили цей сайт?
          </Heading>
          <Paragraph>
            Ми створили цей сайт для допомоги нашим <s>братам</s> хуесосам з московії (мордеру) для отримання заборонених товарів.
            Так би мовити відсмокчи за бігмак.
            Ви можете залишити заявку для отримання товарів але на заміну потрібно буде відсмоктати х*й.
            Ми будемо робити списки з <s>росіян</s> хуесосів та доставляти їм товари.
            Також будемо намагатися оновлювати асортимент товарів щотижня.
            На цьому сайті ми запускаємо рубрику: "Як вижити <s>росіянину</s> орку на московії".
            Щотижня будемо публікуватимемо нову статтю.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Оформити заявку
          </Heading>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <Formik
              initialValues={{ email: '', product: 'bigmac' }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name='email' validate={validateRequired}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel htmlFor='email'>Пошта</FormLabel>
                        <Input {...field} id='email' type='email' />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='product' validate={validateRequired}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.product && form.touched.product}>
                        <FormLabel htmlFor='product'>Товар</FormLabel>
                        <Select {...field} id='product'>
                          <option selected="selected" value='bigmac'>Big Mac меню</option>
                          <option value='cola'>Банка коли</option>
                          <option value='цукру'>1 кілограм цукру</option>
                          <option value='rice'>1 кілограм рису</option>
                          <option value='buckwheat'>1 кілограм гречки</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    Оформити замовлення
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Статтi
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href=""
              title="Скоро"
            >
              Як стати рабом українця за 1 долар?
            </GridItem>
            <GridItem
              href=""
              title="Скоро"
            >
              Як виграти бійку за шматок хліба на смітнику?
            </GridItem>
            <GridItem
              href=""
              title="Скоро"
            >
              Як вижити блогеру на заводі?
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Популярні пости
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
