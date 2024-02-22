import { useEffect, useState } from "react";
import { Table } from "antd";

import { tableColumns } from "./UserComponentData";
import fetchData from "@src/api/fetchData";

import "./Users.scss";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData({ tableName: "users" }).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  
  return (
    <main>
      <section>Users Header</section>
      <section>
        <Table dataSource={users} columns={tableColumns} />
      </section>
    </main>
  );
}

export default Users;
