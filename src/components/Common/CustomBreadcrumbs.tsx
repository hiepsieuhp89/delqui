import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  '& .MuiBreadcrumbs-separator': {
    color: 'rgba(255, 255, 255, 0.7)',
    margin: '0 12px',
  },
  padding: 0,
  backgroundColor: 'transparent',
}));

const StyledLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  '&:hover': {
    color: '#fff',
    textDecoration: 'underline',
  },
});

const StyledTypography = styled(Typography)({
  color: '#fff',
  fontWeight: 500
});

interface CustomBreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ items }) => {
  return (
    <StyledBreadcrumbs separator=">" aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return isLast ? (
          <StyledTypography key={item.label}>
            {item.label}
          </StyledTypography>
        ) : (
          <StyledLink 
            key={item.label}
            href={item.href}
            underline="none"
          >
            {item.label}
          </StyledLink>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default CustomBreadcrumbs;