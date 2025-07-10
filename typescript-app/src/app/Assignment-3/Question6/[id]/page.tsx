"use client"
import { useParams, useRouter } from "next/navigation"


type Product = {
  id:number,
  name: string,
  price: number,
}

const products: Product[] = [
  { id: 1, name: "product-1", price: 10000 },
  { id: 2, name: "product-2", price: 12000 },
  { id: 3, name: "product-3", price: 15000 },
];

export default function ProductID()
{
    const params= useParams();
    const router= useRouter();

    const id = Number(params.id);

    const product = products.find((item) => item.id == id);

  if (!product) return <p>Product not found.</p>;

  return (
    <main>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      
      <button onClick={() => router.back()}>Go Back</button>
    </main>
  )

}