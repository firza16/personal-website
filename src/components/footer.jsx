function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full mt-6 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div>
          <p className="text-xs text-center text-gray-600">© {date} Firza Hakim</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
