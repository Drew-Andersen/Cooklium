import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import cookliumLogo from '/images/Cooklium-logo.png';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={cookliumLogo} className="logo" alt="Cooklium logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Cooklium</h1>
              <div className='counter mx-auto pt-3 rounded'>
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
        </>
    )
}