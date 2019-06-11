import React from 'react';
import Layout from '../components/Layout';
import CommunityLanding from '../components/CommunityLanding';

const community = () => (
    <Layout>
      <CommunityLanding />
      <div style={{minHeight: '100vh', background: 'green'}}/>
    </Layout>
)

export default community