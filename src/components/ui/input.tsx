import * as React from 'react';

import { cn } from '@/lib/utils';

type InputProps = React.ComponentProps<'input'> & { icon?: React.ReactNode };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className='relative'>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            icon ? 'pl-11' : '',
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2'>{icon}</div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
