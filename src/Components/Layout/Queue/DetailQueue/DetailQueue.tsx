import React, { useLayoutEffect, useState } from "react";
import "./detailqueue.scss";
import { useNavigate } from "react-router";
import { ReactComponent as ReturnIc } from "../../../../Assets/return.svg";
import { useSearchParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";

const DetailQueue: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const [item, setItem] = useState({
    no: "",
    customerName: "",
    serviceName: "",
    grantTime: "",
    expireTime: "",
    queueStatus: "",
    provideBy: "",
  });

  useLayoutEffect(() => {
    const id = search.get("id");
    const docRef = doc(db, "queueList", id || "");

    onSnapshot(docRef, (doc: any) => {
      setItem({
        ...doc.data(),
      });
    });
  }, []);
  return (
    <div className="app__layout-queue__detail-queue">
      <div className="app__layout-queue__detail-queue__title">
        Quản lý cấp số
      </div>
      <div className="app__layout-queue__detail-queue__container">
        <div className="row form-label">Thông tin Cấp số</div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Họ tên: {item.customerName}</div>
          <div className="flex-1">Nguồn cấp: {item.provideBy}</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Tên dịch vụ: {item.serviceName}</div>
          <div className="flex-1">Trạng thái: {item.queueStatus}</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Số thứ tự: {item.no}</div>
          <div className="flex-1">Số điện thoại:</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Thời gian cấp: {item.grantTime}</div>
          <div className="flex-1">Địa chỉ Email:</div>
        </div>
        <div className="row app__layout-queue__detail-queue__container__label">
          <div className="flex-1">Hạn sử dụng: {item.expireTime}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailQueue;
