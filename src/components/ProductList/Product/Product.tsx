import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
  image_urls: string[];
}

export const Product = (product: ProductProps): ReactElement => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
     navigate(`product/${product.id}/details`)
  }

  return (
    <div className="max-w-[300px] min-w-[200px]">
      <h4 className="mb-3 font-semibold"  onClick={redirectToDetails}>{product.name}</h4>
      <div className="relative"  onClick={redirectToDetails}>
        <span className="absolute right-0 bg-zinc-950 text-white px-2 py-1 rounded-full text-nowrap">
          $ {product.price}
        </span>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="rounded-sm"
        />
      </div>

      <div className="mt-2 flex gap-x-1">
        <button className="bg-zinc-700 px-3 py-2 rounded-sm font-semibold text-white flex-1">Comprar</button>
        <button className="border-2 border-zinc-700 px-3 py-2 rounded-sm font-semibold text-zinc-700">Adicionar</button>
      </div>
    </div>
  );
};
