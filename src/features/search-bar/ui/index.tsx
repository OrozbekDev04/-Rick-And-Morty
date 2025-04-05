

export const SearchBar = () => {
  

  return (
    <div className="flex flex-col items-center justify-center  sticky top-1 gap-2">
      <input
        className="bg-amber-200 text-xl text-center border-2 rounded w-sm h-10 ml-[200px] border-b-blue-700 active:bg-amber-50 cursor:pointer placeholder:text-blue-500 placeholder:text-xl placeholder:text-center"
        type="text"
        value=''
     
        placeholder="Введите имя персонажа"
      />
      <button
        className="bg-green-300 border-2 rounded w-20 h-10 px-4 cursor:pointer"
      >
        Поиск
      </button>
    </div>
  );
};
