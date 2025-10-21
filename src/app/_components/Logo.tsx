import React from "react";

const Logo = () => {
  return (
    <div className="w-full h-[75vh] flex items-center justify-center">
      <div className="text-center">
        {/* Logo Icon */}
        <div className="text-6xl text-blue-500 dark:text-purple-400 animate-bounce">
          🤖
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-4 h-4 bg-blue-400 dark:bg-purple-400 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-blue-400 dark:bg-purple-400 rounded-full animate-ping animation-delay-150"></div>
          <div className="w-4 h-4 bg-blue-400 dark:bg-purple-400 rounded-full animate-ping animation-delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;

<style jsx>{`
  .animation-delay-150 {
    animation-delay: 0.15s;
  }
  .animation-delay-300 {
    animation-delay: 0.3s;
  }
`}</style>;
