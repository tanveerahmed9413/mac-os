import React from "react";

const Card = ({ user }) => {
  return (
    <div className="max-w-sm bg-white/90 backdrop-blur-md rounded-2xl 
    shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={user.image}
          alt="project"
          loading="lazy"
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {user.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {user.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {user.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2 text-sm font-medium">
          <a
            href={user.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href={user.live}
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);