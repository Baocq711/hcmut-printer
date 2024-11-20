import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface InputSelectProps<T> {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  value: T | null;
  setValue: (value: T | null) => void;
  placeHolder?: string;
  options: {
    label: string;
    value: T;
  }[];
  className?: string;
}

const InputSelect = <T,>({
  isOpen,
  setIsOpen,
  value,
  setValue,
  placeHolder,
  options,
  className,
}: InputSelectProps<T>) => {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={isOpen}
          className={cn('w-full justify-between', className)}
        >
          {options.find((option) => option.value === value)?.label ??
            placeHolder ??
            'Chọn'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popper-anchor-width)] p-0'>
        {options.map((option) => (
          <Button
            key={option.label}
            variant={'ghost'}
            onClick={() => {
              setValue(option.value);
              setIsOpen(false);
            }}
            className='w-full justify-start'
          >
            {option.label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default InputSelect;
