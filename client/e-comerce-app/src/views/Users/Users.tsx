import { useEffect, useState } from "react";
import { Table } from "antd";

import { tableColumns } from "./UserComponentData";
import fetchData from "@src/api/fetchData";

import "./Users.scss";
import { Header } from "antd/es/layout/layout";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData({
      tableName: "users",
    }).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <main style={{ width: "100%" }}>
      <Header>
      <section>Users Header</section>
      </Header>
      <section>
        <Table dataSource={users} columns={tableColumns} />
      </section>
    </main>
  );
}

export default Users;
