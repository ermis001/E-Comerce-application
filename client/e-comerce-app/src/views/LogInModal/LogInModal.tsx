import { Form, Button, Input } from "antd";

import DynamicModal from "@components/DynamicModal/DynamicModal";

const { Item } = Form;

type props = {
  open: boolean;
  onCancel: () => void;
  setSignUp: () => void;
};

function LogInModal({ open, onCancel, setSignUp }: props) {
  const [form] = Form.useForm();

  return (
    <DynamicModal
      open={open}
      onCancel={onCancel}
      title="Log In"
      footer={[
        <Button
          type="primary"
          size="large"
          style={{ width: 150 }}
          onClick={() => console.log("formValues: ", form.getFieldsValue())}
        >
          Log In
        </Button>,
      ]}
    >
      <Form form={form}>
        <Item name={"email"} required={true}>
          <Input placeholder="Email..." type="email" />
        </Item>
        <Item name={"password"} required={true}>
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
