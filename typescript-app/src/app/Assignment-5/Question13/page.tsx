// 13. Design and implement a reusable Modal component that allows customization of its content.
//  Provide controls to open, close, and toggle the modal’s visibility. 
// Demonstrate how to use this component to display different types of content within a Next.js application.

"use client"

import DumbBasicModal from "@/app/Components/Assignment5Components/DumbModal";


const Home = () => {
   const text = "reusable component ";
    const backGroundStyle = "aqua";
    const heading="Dumb modal"
    const onClickhandler = () => {
      alert("hi");
    }
  return (
    <>
      <p>
        13. Design and implement a reusable Modal component that allows
        customization of its content. Provide controls to open, close, and
        toggle the modal's visibility. Demonstrate how to use this component to
        display different types of content within a Next.js application.
      </p>
       <DumbBasicModal  backGroundStyle={backGroundStyle} text={text} heading={heading} />

    </>
  );
};
export default Home;