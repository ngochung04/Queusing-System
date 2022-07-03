import React, { useEffect, useState } from "react";
import Select from "../../../Select/Select";
import "./listqueue.scss";
import Table, { IQueueRow } from "../../../Table/Table";
import Textbox, { InputType } from "../../../Textbox/Textbox";
import { useNavigate } from "react-router";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import {
  activeStatus,
  connectionStatus,
  deviceList,
  queueProvider,
  serviceList,
  services,
} from "../../../Mock";
import DatePicker from "../../../DatePicker/DatePicker";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";

const ListQueue: React.FC = () => {
  const navigate = useNavigate();
  const [queueList, setQueueList] = useState<IQueueRow[]>();
  const [listData, setListData] = useState<IQueueRow[]>();

  useEffect(() => {
    // deviceList.map((x, i) => {
    //   addDoc(collection(db, "deviceList"), {
    //     ...x,
    //   });
    // });
    const fetchData = async () => {
      const data: any = [];
      onSnapshot(collection(db, "queueList"), (snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          const x = doc.data();
          data.push({
            no: x.no,
            customerName: x.customerName,
            serviceName: x.serviceName,
            grantTime: x.grantTime,
            expireTime: x.expireTime,
            queueStatus: x.queueStatus,
            provideBy: x.provideBy,
            queueDetail: doc.id,
          });
        });
        setQueueList(data);
        setListData(data);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="app__layout-queue__queue-list">
        <div className="app__layout-queue__queue-list__container">
          <div className="row app__layout-queue__queue-list__container__label">
            Danh sách cấp số
          </div>
          <div className="row app__layout-queue__queue-list__container__filters">
            <Select
              label="Tên dịch vụ"
              options={serviceList}
              flexItem
              onSelectedChange={(e: string) => {
                if (e === "Khám tim mạch") {
                  const data = listData?.filter(
                    (item: any) => item.serviceName === "Khám tim mạch"
                  );
                  setQueueList(data);
                } else if (e === "Sản - phụ khoa") {
                  const data = listData?.filter(
                    (item: any) => item.serviceName === "Sản - phụ khoa"
                  );
                  setQueueList(data);
                } else if (e === "Khám tai - mũi - họng") {
                  const data = listData?.filter(
                    (item: any) => item.serviceName === "Khám tai - mũi - họng"
                  );
                  setQueueList(data);
                } else {
                  setQueueList(listData);
                }
              }}
              //   width={300}
            />
            <Select
              label="Trạng thái kết nối"
              options={["Tất cả", "Đang chờ"]}
              flexItem
              onSelectedChange={(e: string) => {
                if (e === "Đang chờ") {
                  const data = listData?.filter(
                    (item: any) => item.queueStatus === "Đang chờ"
                  );
                  setQueueList(data);
                } else if (e === "") {
                  const data = listData?.filter(
                    (item: any) => item.queueStatus === ""
                  );
                  setQueueList(data);
                } else {
                  setQueueList(listData);
                }
              }}
              //   width={300}
            />
            <Select
              label="Nguồn cấp"
              options={["Tất cả", "Hệ Thống"]}
              flexItem
              //   width={300}
            />
            <DatePicker label="Chọn thời gian" flexItem />
            <Textbox label="Từ khoá" type={InputType.search} flexItem />
          </div>
          <div className="row table">
            {queueList && <Table data={queueList} displayRow={9} />}
          </div>
        </div>
      </div>
      <div
        className="app__layout-queue__queue-list__float-btn"
        onClick={() => navigate("/dashboard/queue/new")}
      >
        <span>
          <AddIc />
        </span>
        <span>Cấp số mới</span>
      </div>
    </>
  );
};

export default ListQueue;
