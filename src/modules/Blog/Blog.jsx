import React from "react";
import Button from "../Shared/Button";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  return (
    <div className="bg-[#FFEEEE] py-20">
      <div className="container m-auto">
        <div className="text-center py-16">
          <h4 className="text-[#FF3426] text-2xl">- Our Blog -</h4>
          <h1 className="text-4xl font-bold py-4">
            Updated News and Recent Articles
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <SingleBlog />
          <SingleBlog />
          <SingleBlog />
        </div>
        <div className="flex items-center justify-center mt-20 ">
          <Button message={"View All"} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
