import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Counter from './components/Counter';
import AddForm from './components/AddForm';
import ContactList from './components/ContactList';
import Counter2 from './components/Counter2';
import EditForm from './components/EditForm';
import Navbar from './components/Navbar';

const { Header, Content, Footer } = Layout;

const navItems = [{id:1, title: 'Counter', path: '/counter', element: <Counter /> }, ]

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
     <div className="demo-logo" />
        <Navbar/>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
      
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/counter' element={<Counter2/>}/>
          <Route path='add' element={<AddForm/>}/>
          <Route path='/contacts' element={<ContactList/>}/>
          <Route path='/edit/:id' element={<EditForm/>}/>
         </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;