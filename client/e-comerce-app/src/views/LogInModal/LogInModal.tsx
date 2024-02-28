import { Form, Button, Input } from "antd";
import axios from "axios";

import DynamicModal from "@components/DynamicModal/DynamicModal";
import API_URL from "@api/config";
import { loginUser } from "@api/index";
import { setUserConfig } from "@store/reducers/userConfigReducer";
import { useAppDispatch } from "@hooks/reduxHooks";

const { Item } = Form;

type params = {
  open: boolean;
  onCancel: () => void;
  setSignUp: () => void;
};

function LogInModal({ open, onCancel, setSignUp }: params) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  async function onFinish(formData: { email: string; password: string }) {
    try {
      const result = await loginUser(formData);

      axios
        .get(`${API_URL}`, {
          headers: {
            Authorization: "Bearer" + result.data.token,
          },
        })
        .then((response) => {
          console.log("Auth response: ", response);
          localStorage.setItem("authToken", result.data.token);
          dispatch(setUserConfig(result.data.user));
        })
        .catch((err) => console.log("Error auth: ", err));
    } catch (error) {
      console.log("Error login: ", error);
    }
  }

  return (
    <DynamicModal
      open={open}
      onCancel={onCancel}
      title="Log In"
      footer={[
        <Form form={form} onFinish={onFinish}>
          <Button
            type="primary"
            size="large"
            style={{ width: 150 }}
            htmlType="submit"
          >
            Log In
          </Button>
        </Form>,
      ]}
    >
      <Form form={form}>
        <Item
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
        <Item
          name={"password"}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input placeholder="Password..." type="password" />
        </Item>
      </Form>
      <section
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button type="link">Forgotten Password</Button>
        <Button type="link" onClick={setSignUp}>
          Create Your Account
        </Button>
      </section>
    </DynamicModal>
  );
}

export default LogInModal;
