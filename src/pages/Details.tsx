import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";

export default function Details() {
  const { id } = useParams();
  const { product, getProduct, loading, error } = useProductStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [getProduct]);

  if (loading) <div>Carregando...</div>;
  if (error) <div>Erro ao obter produto</div>;
  return (
    <div className="mx-auto max-w-screen-xl mt-8">

      <div>
        <a href="/" >Página Inicial</a>
      </div>
      
      <div className="mb-4">
        <h3 className="text-2xl mb-2">{product?.name}</h3>
        <div className="flex gap-x-4">
          <div  className="aspect-ratio w-[260px] overflow-hidden">
            <img className="w-full object-cover" src={product?.thumbnail} alt={product?.name}/>
          </div>
          <div>
            <h3 className="text-3xl mb-2">${ product?.price }</h3>
            <h3  className="text-lg font-medium mb-2">Descrição</h3>
            <p>{product?.description}</p>

            <div className="flex gap-x-2 mt-4">
              <button className="px-4 py-2 bg-white border-zinc-700 border-2">Adicionar</button>
              <button className="px-4 py-2 bg-zinc-700 text-white">Comprar</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Imagens do produto</h3>
        <ul className="grid grid-cols-6 gap-x-4">
          {product?.image_urls.map((image) => (
            <li className="col-span-1">
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
