'use client';
import { useSelect } from '@/contexts/SelectContext';
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import branchesData from '@/data/branches.json';

function BranchSelect() {
  const { setLocation } = useSelect();

  // const handleSelect = (e) => console.log(selectVal);
  const handleSelect = (e) => setLocation(e.target.value);

  return (
    <div className="input">
      <LocationIcon />
      <select className="pl-10" onChange={handleSelect}>
        {branchesData.map((branch) => (
          <option value="ramadan" key={branch.id}>
            {branch.title}
          </option>
        ))}
        <optgroup>
          <option
            value="new"
            className="bg-primary-300 h-10 font-bold cursor-pointer"
          >
            create new branch
          </option>
        </optgroup>
      </select>
    </div>
  );
}

export default BranchSelect;
