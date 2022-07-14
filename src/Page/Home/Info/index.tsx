import { Card, Form, Input, Row, Col, Avatar, Typography } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import avatarImage from "../../../Assets/avatar.svg";
import styles from "./Info.module.scss";

const index = () => {
  return (
    <div style={{ padding: "80px 104px 0 24px" }}>
      <Card bordered={false}>
        <Form layout="vertical">
          <Row gutter={24}>
            <Col span={6}>
              <div className={styles.inforLeft}>
                <div style={{ position: "relative" }}>
                  <Avatar src={avatarImage} className={styles.avatar} />
                  <CameraOutlined className={styles.icon} />
                </div>
                <Typography.Title className={styles.name}>
                  Pham Dinh Phuong Nam
                </Typography.Title>
              </div>
            </Col>
            <Col span={18}>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item label="Tên người dùng">
                    <Input
                      className={styles.input}
                      disabled
                      value={"Pham Dinh Phuong Nam"}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Tên đăng nhập">
                    <Input
                      className={styles.input}
                      disabled
                      value={"phuongnam0907"}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Số điện thoại">
                    <Input
                      className={styles.input}
                      disabled
                      value={"0969696969"}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Mật khẩu">
                    <Input className={styles.input} disabled value={"123"} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Email">
                    <Input
                      className={styles.input}
                      disabled
                      value={"namsgu123@gmail.com"}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Vai trò">
                    <Input
                      className={styles.input}
                      disabled
                      value={"Lập trình viên"}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default index;
