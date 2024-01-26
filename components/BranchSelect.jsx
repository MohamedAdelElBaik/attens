'use client';
import { useSelect } from '@/contexts/SelectContext';
import LocationIcon from '@mui/icons-material/LocationOnOutlined';

function BranchSelect() {
  const { setSelectVal } = useSelect();

  // const handleSelect = (e) => console.log(selectVal);
  const handleSelect = (e) => setSelectVal(e.target.value);

  return (
    <div className="input">
      <LocationIcon />
      <select className="pl-10" onChange={handleSelect}>
        <option value="ramadan">العاشر من رمضان</option>
        <option value="cairo">القاهرة</option>
        <option value="alex">الاسكندرية</option>
        <option value="arish">العريش</option>
      </select>
    </div>
  );
}

export default BranchSelect;
