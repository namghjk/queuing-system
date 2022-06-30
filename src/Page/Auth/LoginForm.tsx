import { Form, Input, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Auth/Form.module.scss";

const LoginForm = () => {
  const onFinish = () => {};

  return (
    <div>
      <Form name="login" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input size="large" style={{ borderRadius: "8px" }} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Không được bỏ trống" }]}
        >
          <Input.Password size="large" style={{ borderRadius: "8px" }} />
        </Form.Item>
        <Form.Item>
          <div className={styles.buttonContainer}>
            <Button className={styles.btn} type="primary" htmlType="submit">
              Đăng nhập
            </Button>
            <Link className={styles.link} to="/auth/forgot-password">
              Quên mật khẩu ?
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
