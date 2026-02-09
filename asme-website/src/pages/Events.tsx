const Events = () => {
  return (
    <div className="bg-paper-texture min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600">Upcoming Events</h1>
      <p className="mt-4 text-gray-700">Check back here for ASME updates!</p>
      
      {/* This is where you'll build your Instagram post section */}
      <div className="mt-10 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-xl font-bold">First General Meeting</h2>
          <p>February 14th @ 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Events;