export type ContainerPropsType = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerPropsType) => (
  <div className="px-12">{children}</div>
);
