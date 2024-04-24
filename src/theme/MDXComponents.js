import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Underline from '@site/src/components/Underline';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "underline" tag to our <Underline /> component!
  // `Underline` will receive all props that were passed to `underline` in MDX
  underline: Underline,
};