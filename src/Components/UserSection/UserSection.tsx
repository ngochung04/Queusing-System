import React, { useState } from 'react';
import './usersection.scss';
import { ReactComponent as BellIc } from '../../Assets/bell.svg';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const imgUrl =
  'https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/280456204_850331862593722_6796225965863368502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dcaDmjBWarcAX8viF6b&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIX0X9FNAAF0zRrl4u4NzkEVYeWmp_keO7T2iP1kMAJZA&oe=62AECF0E';
const notifications = [
  { user: 'Nguyễn Thị Thùy Dung', content: '12h30 ngày 31/2/2020' },
  { user: 'Nguyễn Thiên Trinh', content: '12h30 ngày 31/2/2020' },
  { user: 'Võ Thị Kim Liên', content: '12h30 ngày 31/2/2020' },
  { user: 'Hoàng Nguyễn Quốc Huy', content: '12h30 ngày 31/2/2020' },
  { user: 'Võ Thị Lan Anh', content: '12h30 ngày 31/2/2020' },
  { user: 'Võ Thị Lan Anh', content: '12h30 ngày 31/2/2020' },
  { user: 'Võ Thị Lan Anh', content: '12h30 ngày 31/2/2020' },
  { user: 'Võ Thị Lan Anh', content: '12h30 ngày 31/2/2020' },
  { user: 'Võ Thị Lan Anh', content: '12h30 ngày 31/2/2020' },
];

const UserSection: React.FC = () => {
  const [notificationExpand, setNotificationExpand] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <div className='app__user-section'>
      <div
        className={`notification-bell ${notificationExpand && `active`}`}
        onClick={() => setNotificationExpand((prev) => !prev)}
      >
        <BellIc />
        {notificationExpand && (
          <div className='notification-container'>
            <div className='notification-container__header'>Thông báo</div>
            <div className='notification-container__scroll-container'>
              {notifications.map((item) => {
                return (
                  <div className='notification-item'>
                    <div className='notification-item__title'>
                      {`Người dùng: ${item.user}`}
                    </div>
                    <div className='notification-item__content'>
                      {`Thời gian nhận số: ${item.content}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className='avatar'>
        <img src={user.avatar} alt='' onClick={() => navigate('user-info')} />
      </div>
      <div className='hello-user'>
        <span className='hello'>Xin chào</span>
        <span className='user-name'>{user.fullName}</span>
      </div>
    </div>
  );
};

export default UserSection;
