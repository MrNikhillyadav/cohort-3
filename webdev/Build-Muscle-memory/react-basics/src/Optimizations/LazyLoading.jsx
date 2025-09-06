import { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>My Application</h1>

      <Suspense fallback={<div>Loading Heavy Content...</div>}>
        <HeavyComponent />
      </Suspense>

    </div>
  );
}

export default App;