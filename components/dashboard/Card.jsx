import Image from 'next/image';

function Card({ className, children, header }) {
  return (
    <div className={`${className} card`}>
      <header className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">{header}</h2>
        <div>
          <Image
            className="cursor-pointer"
            src="/there-dots.svg"
            alt="more"
            width={25}
            height={25}
          />
        </div>
      </header>
      {children}
    </div>
  );
}

export default Card;
