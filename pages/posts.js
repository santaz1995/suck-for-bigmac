import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbSlave from '../public/images/works/slave.jpeg';
import thumbBum from '../public/images/works/bum.jpeg';
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
            thumbnail={thumbSlave}
          >
            Як стати рабом українця за 1 долар?
          </GridItem>
          <GridItem
            title="Скоро"
            thumbnail={thumbBum}
          >
            Як виграти бійку за шматок хліба на смітнику?
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
