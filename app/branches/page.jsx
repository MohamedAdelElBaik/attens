import MessageBtn from '@/components/MessageBtn';
import NotificationBtn from '@/components/NotificationBtn';
import Search from '@/components/Search';
import UserImage from '@/components/UserImage';
import style from '@/app/branches/page.module.css';

function page() {
  return (
    <div className={`${style.branches} gap-5 m-4`}>
      <div className={`${style.box1} bg-white m-1 rounded-md w-full`}>1</div>
      <div className={`${style.box2} bg-white m-1 rounded-md w-full`}>2</div>
      <div className={`${style.box3} bg-white m-1 rounded-md w-full`}>3</div>
      <div className={`${style.box4} bg-white m-1 rounded-md w-full`}>4</div>
      <div className={`${style.box5} bg-white m-1 rounded-md w-full`}>5</div>
    </div>
  );
}

export default page;
