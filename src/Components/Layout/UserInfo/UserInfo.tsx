import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../../redux/store";
import Textbox from "../../Textbox/Textbox";
import "./userinfo.scss"
import {ReactComponent as CameraIc} from "../../../Assets/camera.svg"
// [XxxxIc]
const imgUrl =
  'https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dcaDmjBWarcAX8viF6b&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIX0X9FNAAF0zRrl4u4NzkEVYeWmp_keO7T2iP1kMAJZA&oe=62AECF0E';

const UserInfo: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  return (
    <div className='app__layout-user-info'>
      <div className='col'>
        <div className='app__layout-user-info__avatar'>
          <img src={userInfo.avatar} alt='' />
        </div>
        <div className='app__layout-user__camera'>
          <CameraIc />
        </div>
        <div className='app__layout-user-info__name'>{userInfo.fullName}</div>
      </div>
      <div className='col-flex'>
        <Textbox label='Tên người dùng' value={userInfo.fullName} />
        <Textbox label='Số điện thoại:' value={userInfo.phoneNumber} />
        <Textbox label='Email:' value={userInfo.email} />
      </div>
      <div className='col-flex'>
        <Textbox label='Tên đăng nhập' value={userInfo.userName} />
        <Textbox label='Mật khẩu' value={userInfo.password} />
        <Textbox
          label='Vai trò'
          value={`${userInfo.role === 0 ? `Admin` : `Contributor`}`}
        />
      </div>
    </div>
  );
};

export default UserInfo;
