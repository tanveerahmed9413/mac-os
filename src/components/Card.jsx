import React from "react";

const Card = ({user}) => {
    // console.log(user.title)
  return (
    <div className="max-w-sm  bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={user.image}
          alt="project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Title */}
        <h2 className="text-xl font-bold">{user.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm">
         {user.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
                  {user.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100  px-2 py-1 rounded">
              {tag}
            </span>
          ))}

        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a href={user.github} target="_blank">GitHub</a>
          <a href={user.live} target="_blank">Live</a>
        </div>
      </div>
    </div>
  );
};

export default Card;