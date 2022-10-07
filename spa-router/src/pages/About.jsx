import React from 'react';
import useRouter from '../hooks/useRouter';

const About = () => {
  const path = '';
  const { push } = useRouter();

  return (
    <div>
      <p>about</p>
      <button onClick={() => push(path)}>go to main</button>
    </div>
  );
};

export default About;
