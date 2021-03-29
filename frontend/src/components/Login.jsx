import React, { } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const Login = () => {

  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
    >
      <Form.Item
        label="Product Name"
        name="productname"
        rules={[
          {
            required: true,
            message: 'Please input your productname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

    


export default Login;