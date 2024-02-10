import MessageBtn from '@/components/MessageBtn';
import NotificationBtn from '@/components/NotificationBtn';
import Search from '@/components/Search';
import UserImage from '@/components/UserImage';
import style from '@/app/branches/page.module.css';
import Image from 'next/image';

function page() {
  return (
    <div className={`${style.branches} gap-5 m-4`}>
      <div className={`${style.box1} bg-primary-300 m-1 rounded-md w-full`}>
        <InfoCard />
      </div>
      <div className={`${style.box2} bg-white m-1 rounded-md w-full`}>2</div>
      <div className={`${style.box3} bg-white m-1 rounded-md w-full`}>3</div>
      <div className={`${style.box4} bg-white m-1 rounded-md w-full`}>4</div>
      <div className={`${style.box5} bg-white m-1 rounded-md w-full`}>5</div>
    </div>
  );
}

export default page;

function InfoCard() {
  return (
    <div className="flex gap-2">
      <div>
        <h2 className="text-3xl font-medium">تنظيم فروعك يبدأ من هنا !</h2>
        <p className="text-base">
          قم بسهولة اضافة فرع جديد تحديد الموقع وساعات العمل او قم بتعديل الأفرع
          الموجوة مسبقا واحكم برموز الحضور والموظفين الموجودين. تعلم المزيد...
        </p>
      </div>
      <Image src="/maxmizeIcon.png" width={250} height={250} alt="ss"></Image>
    </div>
  );
}
