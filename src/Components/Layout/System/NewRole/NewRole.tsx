import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./newrole.scss";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import Textbox, { InputType } from "../../../Textbox/Textbox";
import Button from "../../../Button/Button";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import { useSearchParams } from "react-router-dom";

const permisionGroup = [
  "Tất cả",
  "Nhóm chức năng A",
  "Nhóm chức năng B",
  "Nhóm chức năng C",
];

const NewRole: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const [item, setItem] = useState({
    roleName: "",
    quantity: "6",
    roleDes: "",
    roleDetail: "",
  });

  useLayoutEffect(() => {
    const id = search.get("id");
    if (id) {
      const docRef = doc(db, "roleList", id || "");

      onSnapshot(docRef, (doc: any) => {
        console.log(doc.data());
        setItem({
          ...doc.data(),
        });
      });
    }
  }, []);

  const handleChange = (key: keyof typeof item) => (e: string) => {
    setItem({ ...item, [key]: e });
  };
  return (
    <div className="app__layout-system__new-role">
      <div className="app__layout-system__new-role__title">
        Danh sách vai trò
      </div>
      <div className="app__layout-system__new-role__container">
        <div className="row form-label">Thông tin vai trò</div>
        <div className="row full">
          <div className="flex-1 col">
            <Textbox
              label="Tên vai trò *"
              value={item.roleName}
              onChange={handleChange("roleName")}
            />
            <Textbox
              label="Mô tả:"
              value={item.roleDes}
              type={InputType.field}
              onChange={handleChange("roleDes")}
            />
            <div className="row">* Là trường bắt buộc</div>
          </div>
          <div className="flex-1 col">
            <div className="row">Phân quyền chức năng *</div>
            <div className="box">
              <div className="row permission-group">Nhóm chức năng A</div>
              {permisionGroup.map((role, index) => {
                return (
                  <div className="role" key={index}>
                    <input type="checkbox" />
                    <span>{role}</span>
                  </div>
                );
              })}
              <div className="row permission-group">Nhóm chức năng B</div>
              {permisionGroup.map((role, index) => {
                return (
                  <div className="role" key={index}>
                    <input type="checkbox" />
                    <span>{role}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="app__layout-device__new-device__btn__bottom">
        <Button
          text="Hủy bỏ"
          isOutlined
          onClick={() => navigate("/dashboard/system/roles")}
        />
        <Button
          text={
            (search.get("id")?.length as number) > 10
              ? "Cập nhật"
              : "Thêm vai trò"
          }
          onClick={() => {
            if ((search.get("id")?.length as number) > 10) {
              const docRef = doc(db, "roleList", search.get("id") || "");

              updateDoc(docRef, item);
            } else {
              addDoc(collection(db, "roleList"), item);
            }
            navigate("/dashboard/system/roles");
          }}
        />
      </div>
    </div>
  );
};

export default NewRole;
