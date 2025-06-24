import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <section>
      <Heading>
        History
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus,
        totam nihil ducimus officia ad. Fugit laborum, facilis saepe laboriosam
        quis, dicta quas quidem, placeat dolorum modi mollitia? Incidunt, quam.
      </p>
    </section>
  );
}
