import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";
import "../css/signup.css"
import { Form, Input, Button, Upload } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Signup = () => {
    let history = useHistory();

    const [imageUrl, setImage] = useState('');

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const emailRegex = /\S+@\S+\.\S+/;

    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [messagePW, setMessagePW] = useState('');
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;

    const onFinish = async (signupData) => {
        try {
            console.clear();
            console.log('Success:', signupData);
            fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(signupData)
            });

            history.push('/profile')

        } catch (err) {
            console.error(err)
        }
    };

    const uploadButton = (
        <div>
            <div style={{ marginTop: 8 }}>Upload Your Pofile Photo Here</div>
        </div>
    );

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const handleChangeImage = info => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log(info)
            getBase64(info.file.originFileObj, imageUrl => setImage(imageUrl));
        }
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            console.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            console.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    //email validation
    const onChangeEmail = (event) => {
        const email = event.target.value;
        console.log(email)
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email is valid!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    }

    //password validation
    const onChangePassword = (event) => {
        const password = event.target.value;
        console.log(password)
        if (passwordRegex.test(password)) {
            setIsPasswordValid(true);
            setMessagePW('Your password is valid!');
        } else {
            setIsPasswordValid(false);
            setMessagePW('Password must be 8 letter');
        }
    }


    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-10 col-md-6 col-lg-6 ">

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        className="form"
                    >
                        <h1 className="text">SignUp</h1>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input onChange={onChangeEmail} 
                                    prefix={<UserOutlined 
                                    className="site-form-item-icon" />} 
                                    placeholder="Enter your e-mail"  />
                            <p className={`message ${isValid ? 'success' : 'error'}`}>
                                {message}
                            </p>
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
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Enter your Password"
                                onChange={onChangePassword}
                            />
                            <p className={`message ${isPasswordValid ? 'success' : 'error'}`}>
                                {messagePW}
                            </p>
                        </Form.Item>
                        
                        <Form.Item
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your firstname!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter your First Name" />
                        </Form.Item>

                        <Form.Item
                            name="surname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your surname!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter your Sur Name" />
                        </Form.Item>

                        <Form.Item
                            name="profilePicture"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Upload the Profile Photo !',
                                },
                            ]}
                        >
                            <Upload
                                name="profilePicture"
                                listType="picture-card"
                                beforeUpload={beforeUpload}
                                showUploadList={false}
                                action="http://localhost:8000/upload" // change this url after

                                onChange={handleChangeImage}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button buttonlogin">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                   
                        

                </div>

            </div>
        </div>

    );
};




export default Signup;