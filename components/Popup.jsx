'use client';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function Popup({ active, setActive, children }) {
  function closePopup() {
    setActive(false);
  }

  if (active)
    return (
      <>
        <div className="before:blur-background" onClick={closePopup}></div>
        <div style={style} className="relative p-8 pt-10 bg-white rounded-lg">
          <div className="absolute top-3 right-3">
            <CloseIcon
              style={{ transform: 'scale(1.3)', cursor: 'pointer' }}
              onClick={closePopup}
            />
          </div>
          {children}
        </div>
      </>
    );
}

export default Popup;
