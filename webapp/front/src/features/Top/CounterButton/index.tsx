import { useState } from 'react';

import { Button } from '@/components/Elements';

/**
 * @package
 */
export const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button className="opacity-30 dark:text-zinc-400" onClick={() => setCount((cnt) => cnt + 1)}>
      count is {count}
    </Button>
  );
};
