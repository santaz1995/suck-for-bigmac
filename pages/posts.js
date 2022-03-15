import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Популярні пости
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Скоро"
          >
            Як стати рабом українця за 1 долар?
          </GridItem>
          <GridItem
            title="Скоро"
          >
            Як виграти бійку за шматок хліба на смітнику?
          </GridItem>
          <GridItem
            title="Скоро"
          >
            Як вижити блогеру на заводі?
          </GridItem>
          <GridItem
            title="Скоро"
          >
            Як вижити блогеру на заводі?
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
