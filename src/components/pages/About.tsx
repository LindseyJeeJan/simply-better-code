import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About – Simply Better Code';
  }, []);

  return (
    <div className='page-wide'>
      <h1>hello</h1>
      <div className='columns'>
        <div className='col-2'>
          <div className='image-cropper left-margin-auto center-mobile'>
            <img
              alt='lindsey lauria smiling photo'
              src='https://www.gravatar.com/avatar/9b893deb3209a60d70152ac63517589c?s=200'
            />
          </div>
        </div>
        <div className='col-2'>
          <p>
            Hi, I&apos;m Lindsey. I am a Front-End Developer with a strong background in both
            design and development of responsive and accessible user interfaces for web applications.
            My goal is always to provide the best experience to the largest possible number of users.
          </p>
          <p>
            I enjoy creating accessible interfaces that are inclusively designed to provide an equal
            experience for all users. I have been developing with accessiblity in mind for over a
            decade and I enjoy learning as much as possible about supporting various assitive
            technologies. I consider myself both a designer and engineer.
          </p>
        </div>
      </div>
    </div>
  );
}
