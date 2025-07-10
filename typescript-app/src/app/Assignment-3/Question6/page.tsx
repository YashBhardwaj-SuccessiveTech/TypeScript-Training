// 6.Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.


"use client";
import { useRouter } from "next/navigation";

const products = [
  { id: 1, name: "product-1", price: 10000 },
  { id: 2, name: "product-2", price: 12000 },
  { id: 3, name: "product-2", price: 15000 },
];

export default function Product() {
  const router = useRouter();
  return (
    <main>
      <h2>Product List</h2>

      <ul>
        {products.map((ele) => (
          <li key={ele.id}>
            {ele.name}
            <button onClick={() => router.push(`/Assignment-3/Question6/${ele.id}`)}> Show Product </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
