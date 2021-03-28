import React from 'react';
import { HeadingTextTwo } from '../HeadingText';
export default function BlogSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <HeadingTextTwo color="textPrimary">Blog</HeadingTextTwo>
      </div>
      <div>Slider</div>
    </div>
  );
}
