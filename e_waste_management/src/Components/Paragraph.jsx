import React, { useState } from 'react';

const Paragraph = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add login logic
    console.log("Username:", username);
    console.log("Password:", password);
    // For demonstration purposes, just setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleForgotPassword = () => {
    // Here you can add logic to handle forgot password
    console.log("Forgot Password");
  };

  return (
    <div className="flex flex-col md:flex-row items-center h-auto md:h-96">
<div className="max-w-md mx-auto md:mr-10 bg-zinc-100 overflow-hidden md:max-w-2xl md:mt-4 rounded-lg shadow-lg" >
  <div class="max-w-3xl mx-auto p-8">
  <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
  <span class="text-blue-500">World</span> <span class="text-green-500">Wide</span> <span class="text-yellow-500">Information</span>
</h2>

    <div className="w-3/4 h-px bg-lime-600 mx-auto mt-0"></div>
    <ul class="text-md text-gray-800 mt-8">
      <li class="mb-4">
        <span class="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">E-waste Facts</span> 
        E-waste, or electronic waste, poses a global environmental and health challenge as discarded electronics contain hazardous materials like lead, mercury, and cadmium.
      </li>
      <li class="mb-4">
        <span class="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Global Impact</span> 
        According to the Global E-waste Statistics Partnership, the world generated a record 53.6 million metric tons of e-waste in 2019, with only 17.4% officially documented as collected and recycled.
      </li>
      <li class="mb-4">
        <span class="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Resource Waste</span> 
        This rampant disposal not only contributes to pollution but also squanders valuable resources; the United Nations estimates that the raw materials in e-waste amount to $57 billion annually.
      </li>
      <li class="mb-4">
        <span class="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Global Impact</span> 
        Developing countries often bear the brunt of e-waste disposal, facing informal recycling practices with significant health risks for workers and nearby communities.
      </li>
      <li>
        <span class="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Solution</span> 
        Addressing e-waste necessitates international cooperation, improved recycling infrastructure, and sustainable product design to mitigate its environmental and social impacts.
      </li>
    </ul>
  </div>
</div>


      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 md:mt-28">
        {isLoggedIn ? (
          <div className="p-8">
         
            <p>User is logged in</p>
          </div>
        ) : (
          showForgotPassword ? (
            <ForgotPassword setShowForgotPassword={setShowForgotPassword} />
          ) : (
            <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} setShowForgotPassword={setShowForgotPassword} />
          )
        )}
      </div>
    </div>
  );
}

const Login = ({ handleLogin, setUsername, setPassword, setShowForgotPassword }) => {
  return (
    <div className="w-full md:w-96 bg-gray-100 p-8 rounded-xl shadow-md justify-between">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
        <button
          className="mt-2 w-full bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400"
          type="button"
          onClick={() => setShowForgotPassword(true)}
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

const ForgotPassword = ({ setShowForgotPassword }) => {
  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className="w-full md:w-96 bg-gray-100 p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
      <p className="mb-4">Enter your email address below to receive a password reset link.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            type="email"
            id="email"
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <button
        className="mt-2 w-full bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400"
        onClick={handleBackToLogin}
      >
        Back to Login
      </button>
    </div>
  );
};

export default Paragraph;