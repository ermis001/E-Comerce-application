import { Button, Form, Input } from "antd";
import DynamicModal from "@src/components/DynamicModal/DynamicModal";

import "./SingUpModal.scss";
import axios from "axios";
import API_URL from "@src/api/config";

type props = {
  open: boolean;
  onCancel: () => void;
};

const { Item } = Form;

function SingUpModal({ open, onCancel }: props) {
  const [form] = Form.useForm();

  type FieldTypes = {
    userName: string;
    email: string;
    password: string;
    ["confirm-password"]: string;
  };

  function addUser({ userData }: any) {
    axios
      .post(`${API_URL}/users`, {
        ...userData,
      })
      .then((res) => console.log("res: ", res))
      .catch((error) => console.log("Error posting user: ", error));
  }

  function onFinish(formData: any) {
    console.log("formData: ", formData);

    addUser({
      userData: {
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        status: "member",
      },
    });
  }

  return (
    <DynamicModal
      open={open}
      title="Sign Up"
      onCancel={onCancel}
      className="signUpModal"
      footer={[
        <Button danger type="primary" onClick={onCancel} size="large">
          Cancel
        </Button>,
        <Form form={form}>
          <Item>
            <Button type="primary" htmlType={"submit"} size="large">
              Sign Up
            </Button>
          </Item>
        </Form>,
      ]}
    >
      <Form form={form} onFinish={onFinish}>
        <Item<FieldTypes>
          name={"userName"}
          rules={[{ required: true, message: "Please input your user name!" }]}
        >
          <Input placeholder="User name..." type="text" />
        </Item>
        <Item<FieldTypes>
          name={"email"}
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email..." type="email" />
        </Item>
        <Item<FieldTypes>
          name={"password"}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input placeholder="Password..." type="password" />
        </Item>
        <Item<FieldTypes>
          name={"confirm-password"}
          rules={[
            { required: true, message: "Please confirm password!" },
            {
              validator: (_, inputVal) => {
                const passwordField = form.getFieldValue("password");
                if (passwordField === inputVal) {
                  return Promise.resolve();
                } else if (inputVal) {
                  return Promise.reject("This field must match the password!");
                }
              },
            },
          ]}
        >
          <Input placeholder="Confirm password..." type="password" />
        </Item>
      </Form>
    </DynamicModal>
  );
}

export default SingUpModal;
