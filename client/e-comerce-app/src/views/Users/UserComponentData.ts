import type { ColumnsType } from "antd/es/table";
import type { userInterface } from "@src/interfaces";

export const tableColumns: ColumnsType<userInterface> = [
  {
    title: "Name",
    dataIndex: "userName",
    key: "userName"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Status",
    dataIndex: "userStatus",
    key: "userStatus"
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt"
  },
];