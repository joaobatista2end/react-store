
import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import { Product, ProductProps } from "./Product/Product";
import { ProductFilter } from "./ProductFilter/ProductFilter";

export const ProductList = () => {
  const { filteredProducts, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (loading) return "Carregando produtos...";
  else if (error) return "Erro ao obter produtos...";

  return (
    <div className="px-4">
      <h3 className="text-2xl font-semibold mb-2">Lista de Produtos</h3>
      
      <ProductFilter />

      <div className="flex gap-x-4 flex-wrap">
        {filteredProducts().map((product: ProductProps) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
