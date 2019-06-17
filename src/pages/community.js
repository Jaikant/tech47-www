import React from 'react';
import Layout from '../components/Layout';
import Social from '../assets/icons/Community.svg';
import CommunityLanding from '../components/blog-community';

const community = () => (
    <Layout>
      <CommunityLanding 
        title='Our community initiatives'
        subtitle='Because we are grateful to have recieved so much'
        image={<img src={Social} width="360" height="273" alt="Social" />}
      />
    </Layout>
)

export default community