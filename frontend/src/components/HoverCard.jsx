import { useState } from 'react';

const HoverCard = ({ children, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 25px 50px rgba(124, 10, 39, 0.12)'
          : '0 12px 30px rgba(124, 10, 39, 0.05)',
        transition: '0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

export default HoverCard;