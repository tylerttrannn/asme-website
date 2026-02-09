const Events = () => {
  return (
    <div className="bg-paper-texture min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600">Upcoming Events</h1>
      <p className="mt-4 text-gray-700">Check back here for ASME updates!</p>
      
      {/* This is where you'll build your Instagram post section */}
      <div className="mt-10 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-xl font-bold">Winter Quarter General Meetings </h2>
          <p> Tuesdays @ 6:30 PM in MDEA </p>
        </div>
      </div>
    </div>
  );
};

export default Events;