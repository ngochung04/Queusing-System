import React, { useState } from "react";
import Select from "../../../Select/Select";
import Table from "../../../Table/Table";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import "./listrole.scss";
import { useNavigate } from "react-router";
import Textbox, { InputType } from "../../../Textbox/Textbox";
import {
  activeStatus,
  connectionStatus,
  deviceList,
  roleList,
} from "../../../Mock";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";

const ListRule: React.FC = () => {
  const navigate = useNavigate();
  const [roleList, setRoleList] = useState<any>();
  const [listData, setListData] = useState<any>();
  const fetchData = async () => {
    const data: any = [];
    onSnapshot(collection(db, "roleList"), (snapshot: any) => {
      snapshot.docs.forEach((doc: any) => {
        const x = doc.data();
        data.push({
          roleName: x.roleName,
          quantity: x.quantity,
          roleDes: x.roleDes,
          roleDetail: doc.id,
        });
        setRoleList(data);
        setListData(data);
      });
    });
  };
  fetchData();
  return (
    <div className="app__layout-service__list-role">
      <div className="app__layout-service__list-role__container">
        <div className="row app__layout-service__list-role__container__label">
          Danh sách vai trò
        </div>
        <div className="row app__layout-service__list-role__container__filters"></div>
        <div className="row app__layout-service__list-role__container__table">
          {roleList && <Table data={roleList} displayRow={9} />}
        </div>
      </div>
      <div
        className="app__layout-service__list-role__float-btn"
        onClick={() => navigate("/dashboard/system/new_role")}
      >
        <span>
          <AddIc />
        </span>
        <span>Thêm vai trò</span>
      </div>
    </div>
  );
};

export default ListRule;
