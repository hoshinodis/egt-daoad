import clsx from 'clsx';

const sizes = {
  sm: /* tw */ 'h-20 p-3',
  md: /* tw */ 'h-36 p-6',
  lg: /* tw */ 'h-56 p-9',
};

export type IconPropsType = {
  className?: string;
  src: string;
  alt: string;
  size: keyof typeof sizes;
};
export const Icon = ({ src, alt, size, className }: IconPropsType) => (
  <img src={src} className={clsx(sizes[size], 'will-change-[filter]', className)} alt={alt} />
);
