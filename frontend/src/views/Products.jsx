import React, { } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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

const Products = () => {
    let history = useHistory();

    const cities = [
        { label: 'Paris', value: 'paris' },
        { label: 'Lyon', value: 'Lyon' },
        { label: 'Marseille', value: 'Marseille' },
    ];

    const props = {
        name: 'file',
        action: 'https://localhost:8000/public/profileimage/:id',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            strokeWidth: 3,
            format: percent => `${parseFloat(percent.toFixed(2))}%`,
        },
    };

    const onFinish = async (ProductAdd) => {
        try {
            console.clear();
            console.log('Success:', ProductAdd);
            fetch("http://localhost:3000/admin/products", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(ProductAdd)
            });
            history.push('products/:id')
        } catch (err) {
            console.error(err)
        }

    };

    const handleChange = () => {
        console.log("handle Change")
    }


    function onChangePrice(value) {
        console.log('onChangePrice', value);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <h1>Add Product</h1>
            <Form.Item
                label="ProductName"
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
                label="Price"
                name="price"
                rules={[
                    {
                        required: true,
                        message: 'Please input your price!',
                    },
                ]}
            >
                <InputNumber
                    defaultValue={0}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={onChangePrice}
                />
            </Form.Item>

            <Form.Item name="city" label="City" rules={[{ required: true, message: 'Missing city' }]}>
                <Select options={cities} onChange={handleChange} />
            </Form.Item>



            <Form.Item name="description" label="Description">
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="Product"
                name="product"
                rules={[
                    {
                        required: true,
                        message: 'Please input your product!',
                    },
                ]}>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Product image 1</Button>
                    <Button icon={<UploadOutlined />}>Product image 2</Button>
                    <Button icon={<UploadOutlined />}>Product image 3</Button>
                </Upload>
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Send
        </Button>
            </Form.Item>
        </Form>
    );
};




export default Products;