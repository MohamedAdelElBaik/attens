import Image from 'next/image';
// import Link from 'next/navigation';
const navLists = [
  ['رمز التسجيل', '/iconQr.svg'],
  ['الموظفين', '/iconUsers.svg'],
  ['الحضور', '/iconInventory.svg'],
  ['الدعم', '/iconSupport.svg'],
  ['الإعدادات', '/iconSettings.svg'],
];

function NavBar() {
  return (
    <nav className="flex flex-col gap-32 w-64  min-h-screen bg-white px-8 py-4">
      <Image src="/icon.png" alt="attens" width={150} height={150} />
      <ul className="flex flex-col gap-9">
        {navLists.map((list) => (
          // <Link>
          <li className="icon-text text-gray " key={list[0]}>
            <Image src={list[1]} alt={list[0]} width={20} height={20} />
            {list[0]}
          </li>
          // </Link>
        ))}
      </ul>
      <span className="icon-text text-red-500">
        <Image src="/iconLogout.svg" alt="logout" width={20} height={20} />
        تسجيل الخروج
      </span>
    </nav>
  );
}

export default NavBar;
