// 12. Create a reusable Button component that accepts props to apply different styles
//  such as primary, secondary, and danger, along with click handlers.
//  Demonstrate how to use this Button component within a sample Next.js application.

'use client'

import { Button } from "./reusablebuton";

export default function ReusableButton() {
  const handleClick = (msg: string) => () => alert(msg);

  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <Button variant="primary" onClick={handleClick('Primary clicked')}>
        Primary
      </Button>
      <Button variant="secondary" onClick={handleClick('Secondary clicked')}>
        Secondary
      </Button>
      <Button variant="danger" onClick={handleClick('Danger clicked')}>
        Danger
      </Button>
    </div>
  );
}