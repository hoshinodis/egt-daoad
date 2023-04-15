import clsx from 'clsx';

export type TitlePropsType = {
  className?: string;
  src: string;
  alt: string;
};
export const Title = ({ className, src, alt }: TitlePropsType) => (
  <div className={clsx('h-6', className)}>
    <img className="object-contain" src={src} alt={alt} />
  </div>
);
