import LocationIcon from '@mui/icons-material/LocationOnOutlined';

function WorkShiftSelect() {
  return (
    <div className="input">
      <LocationIcon />
      <select className="pl-10">
        <option value="ٌmorning">شيفت الصباح</option>
        <option value="night">شيفت المساء</option>
      </select>
    </div>
  );
}

export default WorkShiftSelect;
