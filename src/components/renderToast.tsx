

export const RenderToast = ({
    showToast,
    toastError,
    setShowToast,
    setToastError
}) => (
    showToast && toastError && (
      <div
        className={`fixed bottom-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <div className="bg-red-600 text-white px-6 py-5 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-xl font-medium">{toastError}</p>
            </div>
            <button
              onClick={() => {
                setShowToast(false);
                setToastError(null);
              }}
              className="ml-3 text-red-200 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    )
  );