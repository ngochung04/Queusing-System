import {
  IDeviceRow,
  IServiceQueue,
  IServiceRow,
  QueueStatus,
  Service,
} from "./Table/Table";

interface IRoleRow {
  roleName: string;
  quantity: string;
  roleDes: string;
  roleDetail: string;
}

export const roleList: IRoleRow[] = [
  {
    roleName: "Kế toán",
    quantity: "6",
    roleDes: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    roleDetail: "",
  },
];

export const deviceList: IDeviceRow[] = [
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_02",
    deviceName: "Kiosk2",
    ipAddress: "192.169.1.2",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_01",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "KIO_02",
    deviceName: "Kiosk2",
    ipAddress: "192.169.1.2",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: false,
    displayUpdate: false,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: false,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "K2",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
  {
    deviceId: "ABC",
    deviceName: "Kiosk",
    ipAddress: "192.169.1.1",
    isActivated: true,
    isConnected: true,
    services: [Service.Dental, Service.Heart],
    displayDetail: true,
    displayUpdate: true,
  },
];
export const serviceDetailList: IServiceRow[] = [
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",
    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_02",
    serviceName: "Kiosk2",
    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: false,
    serviceUpdate: false,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",
    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_01",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "KIO_02",
    serviceName: "Kiosk2",
    isActivated: true,
    serviceDescribe: "Chi tiết dịch vụ",
    serviceDetail: false,
    serviceUpdate: false,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: false,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "K2",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
  {
    serviceId: "ABC",
    serviceName: "Kiosk",

    serviceDescribe: "Chi tiết dịch vụ",
    isActivated: true,
    serviceDetail: true,
    serviceUpdate: true,
  },
];
export const queueList: IServiceQueue[] = [
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 101010, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 202020, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.used },
  { no: 333333, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.pending },
  { no: 444444, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 202020, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.aborted },
  { no: 929292, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
  { no: 202020, queueStatus: QueueStatus.pending },
];

export const activeStatus = ["Tất cả", "Hoạt động", "Ngưng hoạt động"];
export enum EService {
  Heart = "Khám tim mạch",
  Dental = "Nha sĩ",
}
export enum EQueueStatus {
  All = "Tất cả",
  Pending = "Đang chờ",
  Used = "Đã sử dụng",
  Aborted = "Bỏ qua",
}
export enum EConnectionStatus {
  All = "Tất cả",
  Connected = "Kết nối",
  Disconnected = "Mất kết nối",
}
export enum EQueueProvider {
  All = "Tất cả",
  Kiosk = "Kiosk",
  System = "Hệ thống",
}
export enum EDeviceType {
  Kiosk = "Kiosk",
  DisplayCounter = "Display counter",
}
export enum EGraphDisplayType {
  Day = "Ngày",
  Week = "Tuần",
  Month = "Tháng",
}
export const grapthDisplayType = [
  EGraphDisplayType.Day,
  EGraphDisplayType.Week,
  EGraphDisplayType.Month,
];
export const deviveType = [EDeviceType.Kiosk, EDeviceType.DisplayCounter];
export const services = [EService.Heart, EService.Dental];
export const serviceList = [
  "Tất cả",
  "Khám tim mạch",
  "Sản - phụ khoa",
  "Khám tai - mũi - họng",
];
export const queueStatus = [
  EQueueStatus.All,
  EQueueStatus.Pending,
  EQueueStatus.Used,
  EQueueStatus.Aborted,
];
export const connectionStatus = [
  EConnectionStatus.All,
  EConnectionStatus.Connected,
  EConnectionStatus.Disconnected,
];
export const queueProvider = [
  EQueueProvider.All,
  EQueueProvider.Kiosk,
  EQueueProvider.System,
];
