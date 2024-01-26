'use client';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import Image from 'next/image';
import { useSelect } from '@/contexts/SelectContext';
import branchesData from '@/data/branches.json';

const customIcon = new Icon({
  iconUrl: './mapIcon.png',
  iconSize: [38, 38],
});

function Map() {
  const { location } = useSelect();
  const branch = branchesData.find((branch) => branch.branch === location);

  return (
    <div
      className={`${styles.div} card w-96 h-96 items-center justify-center relative`}
    >
      <h2 className="absolute top-10  left-1/2 z-50 -translate-x-1/2 text-3xl font-semibold">
        الموقع الجغرافي
      </h2>
      <MapContainer center={branch.position} zoom={20} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png" />
        {branchesData.map((branch) => (
          <Marker position={branch.position} icon={customIcon} key={branch.id}>
            <Popup>{branch.title}</Popup>
          </Marker>
        ))}
        <ChangeMapPosition position={branch.position} />
      </MapContainer>

      <div className="bg-grayLight absolute bottom-10 z-50 w-3/4 left-1/2 -translate-x-1/2 flex flex-row-reverse p-5 rounded-xl gap-8 text-gray text-sm">
        <Image
          src={'/maxmizeIcon.png'}
          alt="maxmize"
          width={200}
          height={200}
          className="rounded-full cursor-pointer w-12 aspect-square"
        />
        <p>{branch.description}</p>
      </div>
    </div>
  );
}

function ChangeMapPosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
