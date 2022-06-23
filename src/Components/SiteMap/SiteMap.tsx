import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './sitemap.scss';
import { ReactComponent as ArrowIc } from '../../Assets/arrow.svg';
enum ServicePath {
  service = 'Dịch vụ',
  list = 'Danh sách dịch vụ',
  new = 'Thêm dịch vụ',
  modify = 'Cập nhật',
  detail = 'Chi tiết',
}

enum DevicePath {
  device = 'Thiết bị',
  list = 'Danh sách thiết bị',
  new = 'Thêm thiết bị',
  modify = 'Cập nhật thiết bị',
  detail = 'Chi tiết thiết bị',
}

enum QueuePath {
  queue = "Cấp số",
  list = "Danh sách cấp số",
  new = "Cấp số mới",
  detail = "Chi tiết"
}

enum ReportPath {
  report = "Báo cáo",
  create = "Lập báo cáo"
}

enum SystemPath {
  system = "Cài đặt hệ thống",
  accounts = "Quản lý tài khoản",
  new_account = "Tài khoản mới",
  new_role = "Thêm vai trò",
  logs = "Nhật ký hoạt động",
  modify_account = "Cập nhật tài khoản",
  roles = "Quản lý vai trò",
}

const SiteMap: React.FC = () => {
  const location = useLocation();
  const [path, setPath] = useState<string[]>([]);
  useEffect(() => {
    const arr = location.pathname.split('/');
    setPath(arr);
  }, [location]);
  return (
    <div className="sitemap">
      {path.map((pathname: string, index) => {
        if (index > 1) {
          return (
            <div className="path">
              <div className="path__arrow">
                <ArrowIc />
              </div>
              <div className="path__name">
                {path[2] === 'service' &&
                  ServicePath[pathname as keyof typeof ServicePath]}
                {path[2] === 'device' &&
                  DevicePath[pathname as keyof typeof DevicePath]}
                {path[2] === 'queue' &&
                  QueuePath[pathname as keyof typeof QueuePath]}
                {path[2] === 'report' &&
                  ReportPath[pathname as keyof typeof ReportPath]}
                {path[2] === 'system' &&
                  SystemPath[pathname as keyof typeof SystemPath]}
                {path[2] === 'panel' && 'Dashboard'}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SiteMap;
