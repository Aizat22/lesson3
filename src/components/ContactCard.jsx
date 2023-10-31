import React, { useContext } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { contactContext } from '../contexts/ContactContextProvider';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;


const ContactCard = (props) => {
    const {name, lastName,imageUrl, phone, id} = props
const {deleteContact} =useContext(contactContext)
const navigate = useNavigate()

    return(
    <Card
    style={{
      width: '19%',
      margin: '3%',
    }}
    cover={
      <img
        alt="example"
        src={imageUrl}
      />
    }
    actions={[
     
      <EditOutlined onClick={()=> navigate(`/edit/${id}`)} key="edit" />,
      <DeleteOutlined onClick={()=> deleteContact(id)} key="delete" />,
    ]}
  >
    <Meta
      title={`${name} ${lastName}`}
      description={phone}
    />
  </Card>
    )
}
  

export default ContactCard;