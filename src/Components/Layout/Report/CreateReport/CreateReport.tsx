import React, { useEffect, useState } from "react";
import { ReactComponent as AddIc } from "../../../../Assets/add-square.svg";
import "./createreport.scss";
import { useNavigate } from "react-router";
import Table from "../../../Table/Table";
import DatePicker from "../../../DatePicker/DatePicker";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";

const CreateReport: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [reportList, setReportList] = useState<any[]>();
  const [listData, setListData] = useState<any[]>();
  useEffect(() => {
    // [...Array(5)].map((x, i) => {
    //   addDoc(collection(db, "reportList"), {
    //     fullNo: 201000 + "" + i,
    //     serviceName: "Khám tim mạch",
    //     grantTime: "07:20 - 07/10/2021",
    //     reportStatus: "Đang chờ",
    //     provideBy: "Hệ thống",
    //   });
    // });
    const fetchData = async () => {
      const data: any = [];
      onSnapshot(collection(db, "reportList"), (snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          const x = doc.data();
          data.push({
            fullNo: x.fullNo,
            serviceName: x.serviceName,
            grantTime: x.grantTime,
            reportStatus: x.reportStatus,
            provideBy: x.provideBy,
          });
          setReportList(data);
          setListData(data);
        });
      });
    };
    fetchData();
  }, []);
  return (
    <div className="app__layout-report__new-report">
      <div className="app__layout-report__new-report__container">
        <div className="row app__layout-report__new-report__container__label">
          <DatePicker label="Chọn thời gian" />
        </div>
        <div className="row app__layout-report__new-report__container__table">
          {reportList && <Table data={reportList} />}
        </div>
      </div>

      <div
        className="app__layout-report__new-report__float-btn"
        onClick={() => {}}
      >
        <span>
          <AddIc />
        </span>
        <span>Tải về</span>
      </div>
    </div>
  );
};

export default CreateReport;
