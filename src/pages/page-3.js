import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2">Go back to the second page</Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
