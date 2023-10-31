import React, { useContext } from 'react';
import { Button,  Form, Input } from 'antd';
import { contactContext } from '../contexts/ContactContextProvider';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    const {addContact} = useContext(contactContext)
    const navigate = useNavigate()

    const onFinish = (values) => {
       addContact(values);
       navigate('/contacts');
      };
    return(
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input contact name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="LastName"
          rules={[
            {
              required: true,
              message: 'Please input contacts LastName!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input contact phone number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contacts Photo"
          name="imageUrl"
          rules={[
            {
              required: true,
              message: 'Please input contact imageUrl!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Contact
          </Button>
        </Form.Item>
      </Form>
    )
    
}
 

export default AddForm;