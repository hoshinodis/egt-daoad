import { Icon, Link } from '@/components/Elements';

/**
 * @package
 */
export const ViteIcon = () => (
  <Link className="[&>img]:hover:drop-shadow-[0_0_2em_#646cffaa]" href="https://vitejs.dev" newTab>
    <Icon src="/vite.svg" alt="Vite logo" size="md" />
  </Link>
);
