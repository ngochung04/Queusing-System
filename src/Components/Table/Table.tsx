/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from '../Pagination/Pagination';
import './table.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export enum DeviceActiveStatus {
  Active = 'Hoạt động',
  Inactive = 'Ngưng hoạt động',
}
export enum DeviceConnectionStatus {
  Connecting = 'Kết nối',
  Disconnected = 'Mất kết nối',
}
export enum QueueStatus {
  pending = "Đang chờ",
  used = "Đã sử dụng",
  aborted = "Đã huỷ",
}
export enum Service {
  Heart = 'Tim mạch',
  Obstetric = 'Sản phụ khoa',
  Dental = 'Nha sĩ',
  General = 'Khám tổng quát',
}

export enum ColumnLabels {
  deviceId = 'Mã thiết bị',
  deviceName = 'Tên thiết bị',
  ipAddress = 'Địa chỉ IP',
  isActivated = 'Trạng thái hoạt động',
  isConnected = 'Trạng thái kết nối',
  services = 'Dịch vụ sử dụng',
  serviceId = 'Mã dịch vụ',
  serviceName = 'Tên dịch vụ',
  serviceDescribe = 'Chi tiết dịch vụ',
  no = 'STT',
  customerName = 'Tên khách hàng',
  grantTime = 'Thời gian cấp',
  expireTime = 'Hạn sử dụng',
  queueStatus = 'Trạng thái',
  provideBy = 'Nguồn cấp',
}

export enum DisplayedColumns {
  deviceId = 'deviceId',
  deviceName = 'deviceName',
  ipAddress = 'ipAddress',
  isActivated = 'isActivated',
  isConnected = 'isConnected',
  services = 'services',
  displayDetail = 'displayDetail',
  displayUpdate = 'displayUpdate',
  serviceId = 'serviceId',
  serviceName = 'serviceName',
  serviceDescribe = 'serviceDescribe',
  serviceUpdate = 'serviceUpdate',
  serviceDetail = 'serviceDetail',
  no = 'no',
  customerName = 'customerName',
  grantTime = 'grantTime',
  expireTime = 'expireTime',
  queueStatus = 'queueStatus',
  provideBy = 'provideBy',
  queueDetail = 'queueDetail',
}

// export enum ServiceColumns {
//   serviceId,
//   serviceName,
//   serviceDetail,
//   isActivated,
//   displayDetail,
//   displayUpdate,
// }

export interface IDeviceRow {
  deviceId: string;
  deviceName: string;
  ipAddress: string;
  isActivated: boolean;
  isConnected: boolean;
  services: Service[];
  displayDetail: boolean;
  displayUpdate: boolean;
}

export interface IServiceRow {
  serviceId: string;
  serviceName: string;
  serviceDescribe: string;
  isActivated: boolean;
  serviceDetail: boolean;
  serviceUpdate: boolean;
}

export interface IQueueRow {
  no: number;
  customerName: string;
  serviceName: string;
  grantTime: Date;
  expireTime: Date;
  queueStatus: QueueStatus;
  provideBy: string;
  queueDetail: boolean;
}

export interface IServiceQueue {
  no: number;
  queueStatus: QueueStatus;
}

type T = keyof typeof ColumnLabels;

const Table: React.FC<{ data: Array<any>; displayRow?: number }> = ({
  data,
  displayRow,
}) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [paginationData, setPaginationData] = useState(
    data.slice(0, displayRow ? displayRow : 9)
  );

  useEffect(() => {
    const newData = data.slice(
      displayRow ? displayRow * paginationIndex : 9 * paginationIndex,
      displayRow
        ? displayRow * (paginationIndex + 1)
        : 9 * (paginationIndex + 1)
    );
    setPaginationData(newData);

    return () => {
      setPaginationData([]);
    };
  }, [paginationIndex, data, displayRow]);

  const changeIndex = (index: number) => {
    setPaginationIndex(index);
  };

  return (
    <div className='app__table'>
      <table>
        <thead>
          <tr>
            {Object.keys(paginationData[0]).map((column: string) => {
              return <th>{ColumnLabels[column as T]}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {paginationData.map((row) => {
            return (
              <tr>
                {Object.entries(row).map((entry: any) => {
                  if (entry[0] === DisplayedColumns.isActivated) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${entry[1] ? `active` : `inactive`
                              }`}
                          ></div>
                          <span>
                            {entry[1] ? 'Đang hoạt động' : 'Ngưng hoạt động'}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.isConnected) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${entry[1] ? `active` : `inactive`
                              }`}
                          ></div>
                          <span>{entry[1] ? 'Kết nối' : 'Mất kết nối'}</span>
                        </div>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.serviceDetail) {
                    return (
                      <td>
                        <Link to={'/dashboard/service/detail'}>Chi tiết</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.serviceUpdate) {
                    return (
                      <td>
                        <Link to={'/dashboard/service/modify'}>Cập nhật</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.displayDetail) {
                    return (
                      <td>
                        <Link to={'/dashboard/device/detail'}>Chi tiết</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.displayUpdate) {
                    return (
                      <td>
                        <Link to={'/dashboard/device/modify'}>Cập nhật</Link>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.queueStatus) {
                    return (
                      <td>
                        <div className='row'>
                          <div
                            className={`status-dot ${entry[1] === QueueStatus.pending && `active`
                              } ${entry[1] === QueueStatus.used && `inactive`
                              } ${entry[1] === QueueStatus.aborted && `inactive`
                              }`}
                          ></div>
                          <span>
                            {entry[1] === QueueStatus.pending && 'Đang hoạt động'}
                            {entry[1] === QueueStatus.used && 'Hoàn thành'}
                            {entry[1] === QueueStatus.aborted && 'Vắng'}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  if (entry[0] === DisplayedColumns.queueDetail) {
                    return (
                      <td>
                        <Link to={'/dashboard/queue/detail'}>Chi tiết</Link>
                      </td>
                    );
                  }
                  return <td>{entry[1]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='pagination'>
        <Pagination
          data={data}
          displayRow={displayRow ? displayRow : 9}
          onChange={changeIndex}
        />
      </div>
    </div>
  );
};

export default Table;
