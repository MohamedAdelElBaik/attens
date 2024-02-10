import NavBar from '@/components/NavBar';
import './globals.css';
import BranchSelect from '@/components/BranchSelect';
import WorkShiftSelect from '@/components/WorkShiftSelect';
import Search from '@/components/Search';
import MessageBtn from '@/components/MessageBtn';
import NotificationBtn from '@/components/NotificationBtn';
import UserImage from '@/components/UserImage';
import { SelectProvider } from '@/contexts/SelectContext';

export const metadata = {
  title: 'Attens',
  description: 'App to take attendance for employees',
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="">
        <SelectProvider>
          <NavBar />

          <div className="hidden">
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
          </div>

          <div className="block">{children}</div>
        </SelectProvider>
      </body>
    </html>
  );
}
function Header({ children }) {
  return <header className="flex justify-between haa-10">{children}</header>;
}
function Section({ children }) {
  return <div className="flex gap-4">{children}</div>;
}
