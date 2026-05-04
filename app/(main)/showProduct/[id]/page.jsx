"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchLocalProducts } from "../../../utils/func";
import Image from "next/image";

export default function ShowProduct() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = params.id;

  useEffect(() => {
    const getProductById = async (id) => {
      setLoading(true);
      const fetchedProducts = await fetchLocalProducts();
      const product = fetchedProducts.find((p) => p.id === id);
      console.log("product", product);
      setProducts(product);
      setLoading(false);
    };
    getProductById(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-t-4 border-gray-600 border-solid rounded-full animate-spin"></div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <p className="text-center text-lg text-[#FFFAF6]">Product not found</p>
    );
  }

  return (
    <div className="bg-[#FFFAF6] p-6 text-[#131313] md:p-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <Image
            height={500}
            width={500}
            src={products.image}
            alt={products.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-black/40">
            {products.category}
          </p>

          <h1 className="text-4xl font-semibold md:text-6xl">
            {products.title}
          </h1>

          <p className="mt-5 text-lg text-black/60">{products.description}</p>

          <p className="mt-5 text-lg text-black font-bold">
            {products.inStock === true ? "In Stock" : "Out of Stock"}
          </p>

          <p className="mt-6 text-3xl font-bold">${products.price} per piece</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Info label="Material" value={products.material} />
            <Info label="Size" value={products.dimensions} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-sm text-black/40">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
