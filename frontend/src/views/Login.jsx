import React, { } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";


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
  let history = useHistory();


  const onFinish = async (loginData) => {
    try {
      console.clear();
      console.log("login Success !", loginData);
      const tokenFetch = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(
          loginData
        )
      });
      // console.log('MY TOKEN :', tokenFetch);
      const tokenObject = await tokenFetch.json();
      localStorage.setItem('token', tokenObject.token)
      // console.log('FINAL TOKEN :',tokenObject);
      if(tokenObject) {
        return history.push("/");
      }
    } catch (err) {
      console.error(err)
    }

    
  }



  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Login</h1>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
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