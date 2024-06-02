import { ProductProps } from "../components/ProductList/Product/Product";
import { create } from "zustand";

const url = "http://localhost:3001/products";

interface ProductStore {
  products: ProductProps[];
  product?: ProductProps;
  filter?: string;
  priceFilter?: { start: number; end: number };
  loading: boolean;
  error?: Error;
  setPriceFilter: (priceFilter: string) => void;
  setError: (error: Error) => void;
  setLoading: (status: boolean) => void;
  setProduct: (product: ProductProps) => void;
  setProducts: (products: ProductProps[]) => void;
  setFilter: (filter: string) => void;
  filteredProducts: () => ProductProps[];
  fetchProducts: () => Promise<void>;
  getProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  filter: undefined,
  priceFilter: undefined,
  products: [],
  product: undefined,
  loading: false,
  error: undefined,
  setProduct: (product: ProductProps) => {
    set({ product })
  },
  setPriceFilter: (priceFilter) => {
    const range = priceFilter?.split("-");
    if (range.length != 2) set({ priceFilter: undefined }) 
    else {
      set({
        priceFilter: {
          start: parseFloat(range[0]),
          end: parseFloat(range[1]),
        },
      });}
  },
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  setProducts: (products) => set({ products }),
  setFilter: (filter) => set({ filter }),
  filteredProducts: () => {
    const { products, filter, priceFilter } = get();
    let filredProducts = products;
    if (filter) {
      filredProducts = filredProducts.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    if (priceFilter) {
      filredProducts = filredProducts.filter(
        (product) =>
          product.price >= priceFilter.start && product.price <= priceFilter.end
      );
    }
    return filredProducts
  },
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const error = new Error("Network response was not ok");
        set({ error });
        throw error;
      }
      const data = await response.json();
      set({ products: data });
    } catch (error: any) {
      console.error(error);
      set({ error });
    } finally {
      set({ loading: false });
    }
  },
  getProduct: async (id: string) => {
    set({ loading: true });
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        const error = new Error("Network response was not ok");
        set({ error });
        throw error;
      }
      const data = await response.json();
      set({ product: data });
    } catch (error: any) {
      console.error(error);
      set({ error });
    } finally {
      set({ loading: false });
    }
  }
}));
