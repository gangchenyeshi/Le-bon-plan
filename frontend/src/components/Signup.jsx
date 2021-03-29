import React, { } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



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

const Signup = () => {

    const onFinish = (data) => {
      console.log('Success:', data);
    };



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
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
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

            <Form.Item
                label="Firstname"
                name="firstname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Surname"
                name="surname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your surname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Profile Image"
                name="profile image"
                rules={[
                    {
                        required: true,
                        message: 'Please input your profile image!',
                    },
                ]}
                >
                <Upload>
                    <Button icon={<UploadOutlined />}>Product image 1</Button>
                </Upload>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
};




export default Signup;