const oceanList = () => {
  return (
    <div className="px-2 mt-8">
      <section className="py-1 bg-blueGray-50">
        <div className="w-full ">
          <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6  ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className=" w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-800">
                    History
                  </h3>
                </div>
                <div className=" w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      #
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Date Time
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Station
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className=" px-2 align-middle border-b border-solid border-gray-200 text-xs whitespace-nowrap p-4 ">
                      1
                    </th>
                    <td className="font-semibold  px-6 align-middle border-b border-solid border-gray-200 text-xs whitespace-nowrap p-4 ">
                      08 Jan 2024 08:00:00
                    </td>
                    <td className="font-semibold  px-6 align-center border-b border-solid border-gray-200 text-xs whitespace-nowrap p-4">
                      P-123456
                    </td>
                    <td className=" px-6 align-middle border-b border-solid border-gray-200 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      IN
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default oceanList;
