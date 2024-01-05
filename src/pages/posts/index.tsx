import React from "react";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import Footer from "../../components/Footer";

const PostsList = () => {
  return (
    <div>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </div>
  );
};

export default PostsList;
