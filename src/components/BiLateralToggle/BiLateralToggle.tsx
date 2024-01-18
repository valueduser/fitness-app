import React, { useState } from 'react'

const BiLateralToggle: React.FC = () => {
  const [position, setPosition] = useState<'left' | 'right'>('left')

  const handleClick = () => {
    setPosition(position === 'left' ? 'right' : 'left')
  };

  return (
    <div>
      <button onClick={handleClick}>{position} side</button>
    </div>
  );
};

export default BiLateralToggle
