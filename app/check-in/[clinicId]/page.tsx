export default function CheckInPage({
  params,
}: {
  params: { clinicId: string };
}) {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">
        Clinic Check-In
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>You are within clinic range</p>

        <button className="w-full mt-6 bg-teal-600 text-white py-3 rounded-lg">
          Confirm Check-In
        </button>
      </div>
    </div>
  );
}
