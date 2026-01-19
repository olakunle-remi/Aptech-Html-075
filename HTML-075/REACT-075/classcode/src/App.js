import React from 'react';

function Counter(){
  let like = 10;
  return(
    <div>
  <button onClick={() =>{
    like++;
    console.log(like);
  }}>
    Like
  </button>
  <h1>{like}</h1>
  <h1>{like}</h1>
  <h1>{like}</h1>
  </div>
);
}
function App(){
  <section>
<Counter />
  </section>
}
export default App;