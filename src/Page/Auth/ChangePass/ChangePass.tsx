import { Button, Form, Input, Typography } from "antd";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Form.module.scss";

interface formValue {
  password: string;
  passwordConfirm: string;
}

const ChangePass = () => {
  const navigate = useNavigate();

  const onFinish = (value: formValue) => {
    console.log(value);
    if (value.password === value.passwordConfirm) {
      navigate("/auth/login");
    } else {
      alert("Password is not match");
    }
  };
  return (
    <Form
      name="login"
      layout="vertical"
      className={clsx(styles.form)}
      onFinish={onFinish}
    >
      <Typography.Title className={clsx(styles.title)}>
        Đặt lại mật khẩu mới
      </Typography.Title>
      <Form.Item
        label="Mật khẩu"
        name="password"
        required={false}
        rules={[
          {
            min: 8,
            message: "Vui lòng nhập đủ 8 ký tự",
          },
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
          },
        ]}
      >
        <Input.Password size="large" style={{ borderRadius: "8px" }} />
      </Form.Item>
      <Form.Item
        label="Nhập lại mật khẩu"
        name="passwordConfirm"
        required={false}
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
      >
        <Input.Password size="large" style={{ borderRadius: "8px" }} />
      </Form.Item>
      <Form.Item>
        <div className={clsx(styles.buttonContainer)}>
          <Button className={clsx(styles.btn)} type="primary" htmlType="submit">
            Xác nhận
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ChangePass;
