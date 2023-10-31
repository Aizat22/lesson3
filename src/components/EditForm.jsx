import React, { useContext, useEffect, useState } from 'react';
import { Button,  Form, Input } from 'antd';
import { contactContext } from '../contexts/ContactContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const {saveContact, getOneContact, oneContact} = useContext(contactContext)
    const navigate = useNavigate()
    const {id} = useParams()

    const [formValues, setFormValues]= useState({})

    const [form] = Form.useForm()


    useEffect(()=> {
        if(oneContact){
            setFormValues(oneContact)
        }
    },[oneContact]);

    useEffect(()=> {
        getOneContact(id)
      }, [])

      useEffect(()=> {
        if (oneContact){
          form.setFieldsValue({
            name: oneContact.name,
            lastName: oneContact.lastName,
            phone: oneContact.phone,
            imageUrl: oneContact.imageUrl,
          })
        }
      },[oneContact])
      

    const onFinish = (values) => {
       saveContact(id, values);
       navigate('/contacts');
      };

      
    return(
        <Form
        name="basic"
        form={form}
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
          <Input value={formValues.name}/>
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
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    )
    
}
 

export default EditForm;