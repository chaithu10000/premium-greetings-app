
export default function PremiumModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[350px]">
        <h2 className="text-2xl font-bold mb-3">Premium Template</h2>

        <p className="mb-5">
          Upgrade to premium for unlimited access.
        </p>

        <div className="flex gap-3">
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Subscribe
          </button>

          <button
            onClick={close}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
