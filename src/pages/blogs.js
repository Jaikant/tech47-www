import React from 'react';
import Layout from '../components/Layout';
import Blog from '../assets/icons/Blogs.svg';
import BlogLanding from '../components/BlogCommunity';

const blogs = () => (
    <Layout>
        <BlogLanding
          title='Our views on technology.'
          subtitle='Because we all have to make informed decisions.'
          image={<img src={Blog} width="360" height="273.5" alt="Social" />}
        />
    </Layout>
)

export default blogs