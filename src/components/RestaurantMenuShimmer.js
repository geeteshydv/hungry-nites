const RestaurantMenuShimmer = () => {
  return (
    <>
      <div className="flex bg-white shadow-xl animate-pulse pl-[250px] p-3">
        <div className=" h-40 w-[250px]  bg-gray-300"></div>
        <div className="flex-col m-3">
          <div className=" mt-7 w-[150px] h-[30px] bg-gray-300"></div>
          <div className="  mt-3 mb-3  w-[90] h-[20] bg-gray-300"></div>
          <div className="bg-gray-300 h-[20] w-[150px] mt-3"></div>
        </div>
      </div>
      <div className="flex-col pl-[300]">
        <div className="w-[550] h-16 m-10 bg-gray-300 animate-pulse"></div>
        <div className="w-[550] h-16 m-10 bg-gray-300 animate-pulse"></div>
        <div className="w-[550] h-16 m-10 bg-gray-300 animate-pulse"></div>
        <div className="w-[550] h-16 m-10 bg-gray-300 animate-pulse"></div>
        <div className="w-[550] h-16 m-10 bg-gray-300 animate-pulse"></div>
      </div>
    </>
  );
};
export default RestaurantMenuShimmer;
