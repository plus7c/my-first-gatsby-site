import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>热爱前端技术，一枚大二在读的计科生，平时喜欢折腾新东西 </p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"></Seo>

export default AboutPage