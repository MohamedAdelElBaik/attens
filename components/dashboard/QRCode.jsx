'use client';

import Card from '@/components/dashboard/Card';
import Image from 'next/image';
import { useState } from 'react';
import Popup from '../Popup';

function QRCode({ className }) {
  const [qrMaximize, setQrMaximize] = useState(false);

  return (
    <Card header="رمز التسجيل" className={className}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3 font-semibold">
          <button
            className="button bg-primary-800 text-white"
            onClick={() => setQrMaximize((val) => !val)}
          >
            تكبير الرمز
          </button>
          <button className="button bg-black bg-opacity-10">تعديل الQR</button>
        </div>
        <Image
          src={'/qr-code.png'}
          alt="qr code"
          width={132}
          height={132}
          onClick={() => setQrMaximize((val) => !val)}
        />
        <Popup active={qrMaximize} setActive={setQrMaximize}>
          <Image src={'/qr-code.png'} alt="qr code" width={620} height={620} />
        </Popup>
      </div>
    </Card>
  );
}

export default QRCode;
