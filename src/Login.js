// //import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Row, Col } from 'antd';
// import { Divider } from 'antd';
// import './Style.css';
// import { PresetColorTypes } from 'antd/lib/_util/colors';

//  const NormalLoginForm = () => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   return (
//       <>
//       <div className="container">
//           <Divider>
//           <div className='heading'>
//     <h1 >LOGIN FORM</h1></div>
//     <Form
//       name="normal_login"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       > <Divider orientation="left" >
//         <label >Username </label> 
//         </Divider>
//         <Row>
//       <Col span={24}>
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//         </Col></Row></Form.Item>
      
      
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       > <Divider orientation="left" >
//       <label >Password </label> 
//       </Divider>
//        <Row>
//       <Col span={24}>
//         <Input  
//              prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         /></Col></Row>
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox className='remember'>Remember me</Checkbox>
//         </Form.Item>

//         <a className="login-form-forgot" href="">
//           Forgot password
//         </a>
//       </Form.Item>

//       <Form.Item>
//       <Row>
//       <Col span={24}>
    
         
//         <Button htmlType="submit" className="login-form-button" >
//           Log in    
//         </Button>
//         </Col>
//         </Row>
//         <div
//        className="or">or</div>
//         <Row>
//       <Col span={24}><a href="" className='register'>register now!</a></Col></Row>   
//         </Form.Item>
//     </Form>
//     </Divider>
//     </div>
    
//     </>
    
    
//   )
// };


// export default NormalLoginForm;

