import React, { } from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, InputNumber, Upload } from 'antd';
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

const Products = () => {

    const cities = [
        { label: 'Paris', value: 'paris' },
        { label: 'Lyon', value: 'Lyon' },
        { label: 'Marseille', value: 'Marseille' },
    ];

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
            })
        } catch (err) {
            console.error(err)
        }

    };

    const handleChange = () => {
        console.log("handle Change")
    }

    const handleChangePrice = () => {
        console.log("handle Change Price")
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
                    // formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    // parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={handleChangePrice}
                /> €
            </Form.Item>

            <Form.Item name="city" label="City" rules={[{ required: true, message: 'Missing city' }]}>
                <Select options={cities} onChange={handleChange} />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input your description!',
                    },
                ]}
            >
                <Input />
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
                <Upload>
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