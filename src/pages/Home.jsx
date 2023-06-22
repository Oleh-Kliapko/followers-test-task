import homeImage from '@/images/followers.png';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={homeImage} alt="Welcome Image" className="mb-8" />
      <h1 className="text-4xl font-bold mb-8 text-gray-800 font-sans">
        Welcome to the Followers Party
      </h1>
      <p className="text-lg text-second font-sans font-semibold">
        Choose your favorite person and follow him or her
      </p>
    </div>
  );
};
