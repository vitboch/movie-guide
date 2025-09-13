import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/use-theme';

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  'aria-label'?: string;
}

const iconSizes = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const sizeClass = iconSizes[size];

  return (
    <div className={`${sizeClass} ${className}`}>
      <Image
        src={`/icons/${name}.svg`}
        alt={ariaLabel || `${name} icon`}
        width={24}
        height={24}
        className='w-full h-full'
        aria-label={ariaLabel}
        role='img'
      />
    </div>
  );
};

// Individual icon components for better type safety
export const BurgerIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='burger' {...props} />
);

export const InfoIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='info' {...props} />
);

export const CopyrightIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='copyright' {...props} />
);

export const SendIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='send' {...props} />
);

export const PhoneIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='phone' {...props} />
);

export const CheckIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='check' {...props} />
);

export const MailIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='mail' {...props} />
);

export const UserOutlineIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='user-outline' {...props} />
);

export const UserFilledIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='user-filled' {...props} />
);

export const PlayIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='play' {...props} />
);

export const PauseIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='pause' {...props} />
);

export const GenresIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='genres' {...props} />
);

export const CommentIcon: React.FC<Omit<IconProps, 'name'>> = props => (
  <Icon name='comment' {...props} />
);

export const LogoIcon: React.FC<Omit<IconProps, 'name'>> = props => {
  const { resolvedTheme } = useTheme();
  return (
    <Icon
      name={resolvedTheme === 'dark' ? 'logo-dark' : 'logo-light'}
      {...props}
    />
  );
};
