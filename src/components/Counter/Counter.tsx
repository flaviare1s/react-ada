import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>0</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '5px 10px' }}>+</button>
          <button style={{ padding: '5px 10px' }}>-</button>
        </div>
      </div>
    )
  }
}
