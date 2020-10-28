import React from 'react';
import './App.scss';
import { Canvas } from 'react-three-fiber';
import { Box } from 'drei';
function App() {
  return (
  <>
    <Canvas>
      {/* <mesh>
        <boxBufferGeometry attach='geometry' args={1,1,1} />
        
      </mesh> */}
      <Box>  
      <meshStandardMaterial attach='material'  />

      </Box>
    </Canvas>
  </>
  );
}

export default App;
