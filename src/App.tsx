import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-poppins bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <Home />
      <footer className="text-center font-poppins text-sm text-gray-400 mt-8 pb-4">
        Made with 💻 by{' '}
        <a
          href="https://github.com/iammadheshwaran"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-gray-200"
        >
          Marsh
        </a>
      </footer>
    </div>
  );
};

export default App;
