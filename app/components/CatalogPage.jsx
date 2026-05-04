"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchLocalProducts } from "../utils/func";

const categories = ["all", "ceramic", "porcelain", "stone", "glass"];

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [catlen, setCatlen] = useState(0);
  const [value, setValue] = useState("");
  const router = useRouter();

  useEffect(() => {

    const getProducts = async () => {
      const fetchedProducts = await fetchLocalProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  const CategoriesFun = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
      setCatlen(0);
    } else {
      const filtered = products.filter(
        (product) => product.category === category,
      );
      setFilteredProducts(filtered);

      const index = categories.findIndex((val) => val === category);
      setCatlen(index);
    }
  };

  const showProduct = (product) => {
    router.push(`/showProduct/${product.id}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <section
      id="catalog"
      className="min-h-screen w-full bg-[#FFFAF6] px-4 py-16 text-[#FFFAF6] md:px-8 lg:px-12"
    >
      <div className="mx-auto w-full">
        <div className="sticky top-0 z-30 mb-8 rounded-3xl border border-white/10 bg-[#131313]/80 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search tiles..."
              className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/30 lg:max-w-sm"
            />
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => CategoriesFun(category)}
                  className={`shrink-0 cursor-pointer rounded-full px-5 py-2 text-xs uppercase tracking-wider transition ${
                    index === catlen
                      ? "bg-[#FFFAF6] text-[#131313]"
                      : "bg-white/5 text-white/55 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <section
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
              >
                <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[360px] lg:h-[420px]">
                  <Image
                    height={500}
                    width={500}
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-[#FFFAF6]/90 px-4 py-2 text-xs font-medium uppercase text-[#131313]">
                    {product.category}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-semibold tracking-[-1px]">
                      {product.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 px-2 py-5 text-sm">
                  <div>
                    <p className="text-white/35">Material</p>
                    <p className="mt-1">{product.material}</p>
                  </div>
                  <div>
                    <p className="text-white/35">Size</p>
                    <p className="mt-1">{product.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-white/35">Stock</p>
                    <p className="mt-1">
                      {product.inStock ? "Available" : "Out of stock"}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/35">Price</p>
                    <p className="mt-1 font-semibold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => showProduct(product)}
                  className="w-full cursor-pointer rounded-full bg-[#FFFAF6] py-4 text-sm font-medium text-[#131313] transition hover:bg-[#585858] hover:text-[#FFFAF6]"
                >
                 View Details
                </button>
              </section>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
