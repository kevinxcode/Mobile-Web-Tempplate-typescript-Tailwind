
const SpinnerSub = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 border-t-4 border-gray-600 border-solid rounded-full animate-spin">
        <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

export default SpinnerSub;
