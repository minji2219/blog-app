import React from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

const PostList = ({ hasNavigation = true }: PostListProps) => {
  return (
    <>
      {hasNavigation ? (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      ) : (
        <></>
      )}

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">서민지</div>
                <div className="post__date">2023.01.05. 오후 03:34:17</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Founded in 2007 by Marie-Hélène Savard, LOEM specialises in
                contact centre optimization. From managing and optimizing
                internal processes to optimizing use of contact center
                optimization tools; LOEM offers a variety of specialised
                services, exclusively for contact centers, providing return on
                investment goals which can be measured year after year.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
