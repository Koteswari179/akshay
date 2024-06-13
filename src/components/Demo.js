import React from "react";
import { FaMinus } from 'react-icons/fa'; // Import the minus icon from react-icons

export default function Demo() {
  return (
    <div>
      {/* 👇️ Colored Horizontal Line */}
      <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
        }}
      />

      {/* 👇️ Colored Horizontal Line */}
      <div
        style={{
          background: 'lime',
          height: '3px',
        }}
      />

      {/* 👇️ Basic Horizontal Line */}
      <hr />

      {/* 👇️ Horizontal Line with Text */}
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '70px', textAlign: 'center'}}>Example</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>

      {/* 👇️ Vertical Line using React Icons */}
      {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100px'}}>
        <FaMinus style={{transform: 'rotate(90deg)', fontSize: '3px', height: '100%'}} />
      </div> */}
    </div>
  );
}
