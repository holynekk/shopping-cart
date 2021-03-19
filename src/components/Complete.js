import React, { useEffect } from 'react';
import './../styles/complete.css';

export default function Complete(props) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Thank You';
    setTimeout(() => {
      props.history.push('/');
    }, 3000);
    return () => {
      document.title = originalTitle;
    };
  });
  return (
    <div id="complete">
      <p>
        Your order is complete even if you didn't really pay and will not get your items.
        <br />
        Don't buy from this store again. bye bye..
      </p>
    </div>
  );
}