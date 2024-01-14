import BranchSelect from '@/components/BranchSelect';
import MessageBtn from '@/components/MessageBtn';
import NotificationBtn from '@/components/NotificationBtn';
import Search from '@/components/Search';
import UserImage from '@/components/UserImage';
import WorkShiftSelect from '@/components/WorkShiftSelect';
import Hello from '@/components/dashboard/Hello';
import QRCode from '@/components/dashboard/QRCode';

export default function Home() {
  return (
    <main className="my-6 mx-10">
      <header className="flex justify-between ">
        <div className="flex gap-4">
          <BranchSelect />
          <WorkShiftSelect />
        </div>
        <div className="flex gap-4">
          <Search />
          <MessageBtn />
          <NotificationBtn />
          <UserImage
            className={'cursor-pointer mr-10'}
            src={'/user.webp'}
            size={50}
          />
        </div>
      </header>

      <section className="mt-6">
        {/* <Hello className="w-96" /> */}
        <QRCode className="w-96" />
      </section>
    </main>
  );
}
