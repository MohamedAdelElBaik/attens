import BranchSelect from '@/components/BranchSelect';
import MessageBtn from '@/components/MessageBtn';
import NotificationBtn from '@/components/NotificationBtn';
import Search from '@/components/Search';
import UserImage from '@/components/UserImage';
import WorkShiftSelect from '@/components/WorkShiftSelect';
import DayAttendance from '@/components/dashboard/DayAttendance';
import Hello from '@/components/dashboard/Hello';
import Map from '@/components/dashboard/Map';
import QRCode from '@/components/dashboard/QRCode';
import { SelectProvider } from '@/contexts/SelectContext';

export default function Home() {
  return (
    <div className="my-6 mx-10 w-full">
      <SelectProvider>
        <Header>
          <Section>
            <BranchSelect />
            <WorkShiftSelect />
          </Section>
          <Section>
            <Search />
            <MessageBtn />
            <NotificationBtn />
            <UserImage
              className={'cursor-pointer mr-10'}
              src={'/user.webp'}
              size={50}
            />
          </Section>
        </Header>

        <Main>
          <Hello className="w-96" />
          {/* <QRCode className="w-96" /> */}
          <Map />
          {/* <DayAttendance /> */}
        </Main>
      </SelectProvider>
    </div>
  );
}

function Header({ children }) {
  return <header className="flex justify-between ">{children}</header>;
}
function Section({ children }) {
  return <div className="flex gap-4">{children}</div>;
}
function Main({ children }) {
  return <main className="mt-6">{children}</main>;
}
