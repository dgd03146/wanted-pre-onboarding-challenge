import path from 'path';
import React from 'react';
import { useState } from 'react';
import useRouter from '../hooks/useRouter';

const Root = () => {
  const { push } = useRouter();
  const path = 'about';

  return (
    <div>
      <p>root</p>
      <button onClick={() => push(path)}>about</button>
    </div>
  );
};

export default Root;
