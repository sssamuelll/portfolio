import React from 'react';

interface SVGProps {
  strokeColor?: string;
  sizeWidth?: string | number;
  sizeHeight?: string | number;
}

const defaultProps = {
  strokeColor: '#2d2d2d',
  sizeWidth: 8,
  sizeHeight: 7,
};

export const RightArrowSVG: React.FC<SVGProps> = ({
  strokeColor = defaultProps.strokeColor,
  sizeWidth = defaultProps.sizeWidth,
  sizeHeight = defaultProps.sizeHeight,
}) => (
  <svg
    width={sizeWidth}
    height={sizeHeight}
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.354 3.646L2.354 0.646L1.646 1.354L4.293 4L1.646 6.646L2.354 7.354L5.354 4.354L5.707 4L5.354 3.646Z"
      fill={strokeColor}
    />
  </svg>
);
