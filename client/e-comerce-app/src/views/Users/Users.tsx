import { useEffect, useState } from "react";
import { Table } from "antd";
import { Header } from "antd/es/layout/layout";

import { tableColumns } from "./UserComponentData";
import fetchData from "@api/fetchData";

import "./Users.scss";
import { useAppSelector } from "@hooks/reduxHooks";

function Users() {
  const darkMode = useAppSelector((state) => state.darkMode);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData({
      tableName: "users",
    }).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <main className="dashboard-element-container users-dashboard-container">
      <Header className={`users-header ${darkMode ? "users-header-dark" : ""}`}>
        <section>Users Header</section>
      </Header>
      <section>
        <Table dataSource={users} columns={tableColumns} />
      </section>
    </main>
  );
}

export default Users;
