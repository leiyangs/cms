import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';
const { Footer, Content } = Layout;

function IndexPage() {
  return (
    <Layout>
       <NavBar/>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);