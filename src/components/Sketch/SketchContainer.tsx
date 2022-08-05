export function SketchContainer({ children }) {
  return (
    <div className="sticky top-0">
      <div className="flex items-center justify-center w-full overflow-hidden relative">
        <div className="relative z-30">{children}</div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="inline-flex items-center px-4 py-2 font-sans font-semibold leading-6 text-sm shadow rounded-md text-white bg-neutral-900 transition ease-in-out duration-150 cursor-not-allowed">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </div>
        </div>
      </div>
    </div>
  );
}

export default SketchContainer;
