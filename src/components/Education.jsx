function Education() {
  return (
    <div>
      <div className="mt-10 sm:mt-14">
        <h2 className="mb-3 font-medium text-gray-800">Education</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
            <img src="/img/umsu-logo.png" alt="" className="shrink-0 size-15 mb-3" />

            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">2022 - 2026</h3>

            <p className="font-semibold text-sm text-gray-800">Information System</p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">Universitas Muhammadiyah Sumatera Utara</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
            <img src="/img/smantig-logo.png" alt="" className="shrink-0 size-15 mb-3" />

            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">2019 - 2022</h3>

            <p className="font-semibold text-sm text-gray-800">Math & Science</p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">SMAN 3 Medan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
