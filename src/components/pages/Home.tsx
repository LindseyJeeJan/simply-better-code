import ListNav from '../MainTutorialList';

export default function Home() {
  return (
    <div className='page-home'>
      <div className='home-hero'>
        <h1>simply better code</h1>
        <p className='home-description'>
          A technical guide to building accessible React applications. Written for front-end
          engineers who take inclusivity seriously.
        </p>
      </div>
      <div className='home-articles'>
        <h2 id='tutorial-heading'>articles</h2>
        <section aria-labelledby='tutorial-heading'>
          <ListNav />
        </section>
      </div>
    </div>
  );
}
