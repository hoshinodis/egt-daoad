import { Icon, Link } from '@/components/Elements';

import reactLogo from '@/assets/react.svg';

/**
 * @package
 */
export const ReactIcon = () => (
  <Link
    className="[&>img]:animate-spin [&>img]:[animation-duration:20s] [&>img]:hover:drop-shadow-[0_0_2em_#61dafbaa]"
    href="https://reactjs.org"
    newTab
  >
    <Icon src={reactLogo} alt="React logo" size="md" />
  </Link>
);
