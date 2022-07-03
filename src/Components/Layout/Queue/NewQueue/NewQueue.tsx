import React, { useState } from "react";
import Button from "../../../Button/Button";
import Modal from "../../../Modal/Modal";
import Select from "../../../Select/Select";
import { ReactComponent as XmarkIc } from "../../../../Assets/xmark.svg";
import "./newqueue.scss";
import { useNavigate } from "react-router";
import { serviceList } from "../../../Mock";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase";

const NewQueue: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [sName, setSname] = useState("");
  const getDate = (days: any) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return `10:00 ${date.getMonth()}/0${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  };

  const [q, setQ] = useState({
    no: "",
    customerName: "Lê Quỳnh Ái Vân",
    serviceName: "",
    grantTime: "",
    expireTime: "",
    queueStatus: "Đang chờ",
    provideBy: "",
  });
  return (
    <div className="app__layout-queue__new-queue">
      <div className="app__layout-queue__new-queue__title">Quản lý cấp số</div>
      <div className="app__layout-queue__new-queue__container">
        <div className="row heading">Cấp số mới</div>
        <div className="row">Dịch vụ khách hàng đã chọn</div>
        <div className="row">
          <Select
            options={serviceList}
            onSelectedChange={(e: string) => setSname(e)}
          />
        </div>
        <div className="row buttons">
          <Button
            text="Huỷ bỏ"
            isOutlined
            onClick={() => {
              navigate("/dashboard/queue/list");
            }}
          />
          <Button
            text="In số"
            onClick={() => {
              addDoc(collection(db, "queueList"), {
                ...q,
                no: Math.ceil(new Date().getTime() / 1000)
                  .toString()
                  .slice(4, 10),
                serviceName: sName,
                grantTime: getDate(0),
                expireTime: getDate(2),
                queueStatus: "Đang chờ",
                provideBy: "Hệ thống",
              });
              setModal((prev) => !prev);
            }}
          />
        </div>
      </div>
      {modal && (
        <Modal>
          <div className="new-queue-number">
            <div className="number-top">
              <div
                className="number-top__icon"
                onClick={() => {
                  setModal((prev) => !prev);
                }}
              >
                <XmarkIc />
              </div>
              <div className="number-top__header">Số thứ tự được cấp</div>
              <div className="number-top__content">
                {Math.ceil(new Date().getTime() / 1000)
                  .toString()
                  .slice(4, 10)}
              </div>
              <div className="number-top__service">
                DV: {sName} (tại quần số 1)
              </div>
            </div>
            <div className="number-bottom">
              <div className="number-bottom__date">
                <>Thời gian cấp: {getDate(0)}</>
              </div>
              <div className="number-bottom__expiry-date">
                <> Hạn sử dụng: {getDate(2)}</>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewQueue;
