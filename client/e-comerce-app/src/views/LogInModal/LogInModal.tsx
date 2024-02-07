import { Form, Button, Input } from "antd";

import DynamicModal from "../../components/DynamicModal/DynamicModal";
// import DynamicModal from "@components/DynamicModal/DynamicModal";

const { Item } = Form;

type props = {
  open: boolean;
  onCancel: () => void;
};

function LogInModal({ open, onCancel }: props) {
  const [form] = Form.useForm();

  return (
    <DynamicModal
      open={open}
      onCancel={onCancel}
      title="Log In"
      footer={[
        <Button
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
    </DynamicModal>
  );
}

export default LogInModal;
