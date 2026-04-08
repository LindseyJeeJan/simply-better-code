import { Link } from 'react-router-dom';
import TutorialsData from './pages/tutorials/TutorialsData';

export default function MainTutorialList() {
  const sorted = [...TutorialsData].sort((a, b) =>
    a.category === b.category ? 0 : a.category === 'foundational' ? -1 : 1
  );

  return (
    <nav aria-label='tutorials'>
      <div className='article-grid'>
        {sorted.map((tutorial) => (
          <Link
            key={tutorial.href}
            to={tutorial.href}
            className={`article-card article-card--${tutorial.category}`}
          >
            <span className='article-card__category'>{tutorial.category}</span>
            <span className='article-card__title'>{tutorial.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
