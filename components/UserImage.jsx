import Image from 'next/image';

function UserImage({ className, src, size }) {
  const nSize = size || 100;
  return (
    <div className={className}>
      <Image
        className={`user-image`}
        src={src}
        alt="user"
        width={nSize}
        height={nSize}
      />
    </div>
  );
}

export default UserImage;
