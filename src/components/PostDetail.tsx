import React from "react";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Founded in 2007 by Marie-Hélène Savard
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">서민지</div>
            <div className="post__date">2023.01.05. 오후 03:34:17</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>

            <div className="post__edit">
              <Link to="/posts/edit/1">수정</Link>
            </div>
          </div>
          <div className="post__text">
            Founded in 2007 by Marie-Hélène Savard, LOEM specialises in contact
            centre optimization. From managing and optimizing internal processes
            to optimizing use of contact center optimization tools; LOEM offers
            a variety of specialised services, exclusively for contact centers,
            providing return on investment goals which can be measured year
            after year.
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
