function Toast({ message, onClose }) {
  return (
    <div className="fixed top-4 right-4 z-50 animate-fadeIn">
      <div className="px-4 py-3 rounded-lg bg-black text-white text-sm shadow-lg">
        {message}
      </div>
    </div>
  );
}

export default Toast;
