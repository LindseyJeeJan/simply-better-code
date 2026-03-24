import { Outlet } from 'react-router-dom';

export default function TutorialTemplate() {
  return (
    <div className='page-wide'>
      <Outlet />
    </div>
  );
}
