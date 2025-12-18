import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type THeaderLinkButtonProps = {
  url?: string;
  testId: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  goBack?: boolean;
};

const HeaderLink: React.FC<THeaderLinkButtonProps> = ({
  url,
  testId,
  label,
  children,
  className,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = useCallback(
    () => void (url ? navigate(url) : navigate(-1)),
    [navigate, url]
  );

  return (
    <Button
      className={
        className ||
        cn(
          'flex rounded-md px-1.5 py-2 text-xs font-medium transition-colors sm:px-3 sm:py-2 sm:text-sm',
          location.pathname === url
            ? 'bg-blue-100 text-blue-700'
            : 'text-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-100'
        )
      }
      variant={'ghost'}
      onClick={onClick}
      data-testid={testId}
    >
      {children || label}
    </Button>
  );
};

export default HeaderLink;
