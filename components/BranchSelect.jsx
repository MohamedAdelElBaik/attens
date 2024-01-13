import LocationIcon from '@mui/icons-material/LocationOnOutlined';

function BranchSelect() {
  return (
    <div className="input">
      <LocationIcon />
      <select className="pl-10">
        <option value="ٌramadan">العاشر من رمضان</option>
        <option value="cairo">القاهرة</option>
        <option value="alex">الاسكندرية</option>
        <option value="arish">العريش</option>
      </select>
    </div>
  );
}

export default BranchSelect;
