import Card from '@/components/dashboard/Card';
import Image from 'next/image';

function QRCode({ className }) {
  return (
    <Card header="رمز التسجيل" className={className}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3 font-semibold">
          <button className="button bg-primary-800 text-white">
            تكبير الرمز
          </button>
          <button className="button bg-black bg-opacity-10">تعديل الQR</button>
        </div>
        <Image src={'/qr-code.png'} alt="qr code" width={132} height={132} />
      </div>
    </Card>
  );
}

export default QRCode;
