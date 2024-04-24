import React from 'react';

export default function Underline({children, color}) {
    return (
    <span
        style={{
        textDecoration: 'underline'
        }}>
        {children}
    </span>
  );
}