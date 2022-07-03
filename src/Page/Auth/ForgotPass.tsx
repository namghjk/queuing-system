import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";
import clsx from "clsx";

interface formValue {
  email: string;
}

const ForgotPass = () => {
  const navigate = useNavigate();

  const onFinish = (value: formValue) => {
    console.log(value);
    navigate("/auth/change-password");
  };

  return (
    <div>
      <Form
        className={clsx(styles.form)}
        layout="vertical"
        name="login"
        onFinish={onFinish}
      >
        <Typography.Title
          className={clsx(styles.title)}
          style={{ marginBottom: 16 }}
        >
          Đặt lại mật khẩu
        </Typography.Title>
        <Form.Item
          label="Vui lòng nhập email để đặt lại mật khẩu của bạn *"
          name="email"
          required={false}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email",
            },
            {
              type: "email",
              message: "Email không hợp lệ",
            },
          ]}
        >
          <Input size="large" style={{ borderRadius: "8px" }}></Input>
        </Form.Item>
        <Form.Item>
          <div
            className={clsx(styles.buttonContainer)}
            style={{ flexDirection: "row", marginTop: 56 }}
          >
            <Button
              className={styles.btn}
              type="primary"
              htmlType="submit"
              size="large"
            >
              <Link to="/auth/login">Huỷ</Link>
            </Button>
            <Button
              className={styles.btn}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Tiếp tục
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPass;
