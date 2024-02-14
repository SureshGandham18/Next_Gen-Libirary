import React from 'react';

function LibraryStatus() {
  return (
    <div className=" min-h-screen flex items-center justify-center mt-24">
      <div className="max-w-5xl px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to our Smart Library Monitoring System</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to our Smart Library Monitoring System, where technology meets convenience to enhance your library experience. Our innovative system employs cutting-edge IoT devices and sensors to provide real-time information on various aspects of the library environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <FeatureCard title="Room Status" description="Instantly check the availability of study rooms and meeting spaces. Whether you're looking for a quiet corner to study or a place to collaborate with peers, our system keeps you informed about room occupancy status." />
          <FeatureCard title="Temperature and Humidity" description="Stay comfortable while you study with up-to-date temperature and humidity readings for different areas of the library. Our system ensures optimal environmental conditions to support your learning experience." />
          <FeatureCard title="Noise Monitoring" description="Experience tranquility while you work with our noise monitoring feature. Get insights into noise levels in different sections of the library, allowing you to choose the perfect spot for focused concentration." />
          <FeatureCard title="Book Recommendations" description="Discover your next great read effortlessly with our book recommendation feature. Our system analyzes scanned book data using ESP32 CAM technology to provide personalized recommendations based on your interests." />
        </div>
        <div className="text-center mt-8">
          <a href="https://projectsfactoryserver.in/index.php" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">Explore Now</a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default LibraryStatus;
