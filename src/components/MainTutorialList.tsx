import { Link } from 'react-router-dom';
import TutorialsData, { Tutorial } from './pages/tutorials/TutorialsData';

function TutorialGroup({ heading, items }: { heading: string; items: Tutorial[] }) {
  return (
    <div className='tutorial-group'>
      <h3>{heading}</h3>
      <ul className='nav-list'>
        {items.map((tutorial) => (
          <li className='nav-list__item' key={tutorial.href}>
            <Link className='nav-list__link' to={tutorial.href}>
              {tutorial.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MainTutorialList() {
  const foundational = TutorialsData.filter((t) => t.category === 'foundational');
  const component = TutorialsData.filter((t) => t.category === 'component');

  return (
    <nav aria-label='tutorials'>
      <TutorialGroup heading='Foundational Concepts' items={foundational} />
      <TutorialGroup heading='Component Articles' items={component} />
    </nav>
  );
}
