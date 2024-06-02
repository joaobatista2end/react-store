import { useProductStore } from "../../../store/useProductStore";

export const ProductFilter = () => {
  const { filter, setFilter, setPriceFilter, priceFilter } = useProductStore();
  return (
    <div className="flex justify-end mb-4 gap-x-4">
      <div className="">
        <label htmlFor="" className="block font-semibold mb-1">
          Filtro
        </label>
        <input
          className="border-2 border-zinc-700 rounded-sm px-3 py-2 h-[42px]"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="" className="block font-semibold mb-1">
          Preços
        </label>
        <select
          className="border-2 border-zinc-700 rounded-sm px-3 py-2 h-[42px]"
          onChange={(event) => setPriceFilter(event.target.value )}
        >
          <option value="">Todos os preços</option>
          <option value="0-50">$ 0,00 - $ 50,00</option>
          <option value="50-100">$ 50,00 - $ 100,00</option>
          <option value="100-150">$ 100,00 - $ 150,00</option>
          <option value="150-200">$ 150,00 - $ 200,00</option>
        </select>
      </div>
    </div>
  );
};
