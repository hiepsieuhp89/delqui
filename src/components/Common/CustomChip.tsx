import React from 'react';

interface CustomChipProps {
  variant: 'lime' | 'red' | 'orange' | 'yellow' | 'blue';
  text: string;
  size: 'small' | 'medium' | 'large';
}

const variantStyles = {
  lime: 'text-white bg-[#8BC34A]',
  red: 'text-white bg-[#D32F2F]',
  orange: 'text-black bg-[#FFA014]',
  yellow: 'text-black bg-[#FFED4F]',
  blue: 'text-white bg-[#0FB2FC]',
};

const sizeStyles = {
  small: 'py-[1px] px-[4px] text-[10px] leading-[16px] h-[18px] rounded-[4px] border border-white/30',
  medium: 'py-[1px] px-[5px] text-[14px] leading-[19px] h-[21px] rounded-[4px] border border-white/30',
  large: 'py-[2px] px-[7px] text-[18px] h-[26px] rounded-[4px] border border-white/30',
};

const CustomChip: React.FC<CustomChipProps> = ({ variant, text, size }) => {
  return (
    <div className={`inline-flex items-center justify-center ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {text}
    </div>
  );
};

export default CustomChip;