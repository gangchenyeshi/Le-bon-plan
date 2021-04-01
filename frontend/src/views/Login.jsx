import React, { } from "react";
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';





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
      // const tokenObject = await tokenFetch.json();
      // localStorage.setItem('token', tokenObject.token)
      // console.log('FINAL TOKEN :',tokenObject);
      // if (tokenObject) {
      // return history.push("/");
      history.push("/");
      // }
    } catch (err) {
      console.error(err)
    }


  }



  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-md-6 col-lg-4 ">

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            className="form"
          >
            <h1 className="text">Login</h1>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button buttonlogin">
                Log in
              </Button>
            </Form.Item>
          </Form>

        </div>

      </div>
    </div>
  );
};




export default Login;