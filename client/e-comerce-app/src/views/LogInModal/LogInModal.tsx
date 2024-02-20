import { Form, Button, Input } from "antd";

import DynamicModal from "@components/DynamicModal/DynamicModal";
import { loginUser } from "@src/api";
import { setUserConfig } from "@store/reducers/userConfigReducer";
import { useAppDispatch } from "@hooks/reduxHooks";

const { Item } = Form;

type props = {
  open: boolean;
  onCancel: () => void;
  setSignUp: () => void;
};

function LogInModal({ open, onCancel, setSignUp }: props) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  async function onFinish(formData: { email: string; password: string }) {
    try {
      const result = await loginUser(formData);

      localStorage.setItem("authToken", result.data.token);
      dispatch(setUserConfig(result.data.user));
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
          ,
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
