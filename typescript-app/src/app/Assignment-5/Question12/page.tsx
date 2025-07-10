// 12. Create a reusable Button component that accepts props to apply different styles
//  such as primary, secondary, and danger, along with click handlers.
//  Demonstrate how to use this Button component within a sample Next.js application.

import ReusableButton from "@/app/Components/Assignment5Components/ReusableButton";


export default function HomePage() {
  return (
    <div style={{ padding: 200 }}>
      <ReusableButton/>
    </div>
  );
}

