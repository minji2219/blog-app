import AuthContext from "context/AuthContext";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "firebaseApp";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType;
}

type TabType = "all" | "my";

export type CategoryType = "Frontend" | "Backend" | "Web" | "Native";
export const CATEGORIES: CategoryType[] = [
  "Frontend",
  "Backend",
  "Web",
  "Native",
];

export interface PostProps {
  id?: string;
  title: string;
  summary: string;
  content: string;
  createdAt: string;
  email: string;
  updatedAt?: string;
  uid: string;
  category?: CategoryType;
}

const PostList = ({
  hasNavigation = true,
  defaultTab = "all",
}: PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType | CategoryType>(
    defaultTab
  );
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    setPosts([]);
    const postsRef = collection(db, "posts");
    let postsQuery;

    if (activeTab === "my") {
      //내 글만 보여주기(필터링)
      postsQuery = query(
        postsRef,
        where("uid", "==", user?.uid),
        orderBy("createdAt", "asc")
      );
    } else if (activeTab === "all") {
      //전체글 보여주기
      postsQuery = query(postsRef, orderBy("createdAt", "asc"));
    } else {
      postsQuery = query(
        postsRef,
        where("category", "==", activeTab),
        orderBy("createdAt", "asc")
      );
    }
    const datas = await getDocs(postsQuery);

    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (confirm && id) {
      await deleteDoc(doc(db, "posts", id));
      toast.success("게시글을 삭제했습니다.");
      getPosts();
    }
  };

  useEffect(() => {
    getPosts();
  }, [activeTab]);
  return (
    <>
      {hasNavigation ? (
        <div className="post__navigation">
          <div
            className={`${
              activeTab === "all" ? "post__navigation--active" : ""
            }`}
            onClick={() => {
              setActiveTab("all");
            }}
          >
            전체
          </div>
          <div
            className={`${
              activeTab === "my" ? "post__navigation--active" : ""
            }`}
            onClick={() => setActiveTab("my")}
          >
            나의 글
          </div>
          {CATEGORIES.map((category) => (
            <div
              key={category}
              role="presentation"
              className={`${
                activeTab === category ? "post__navigation--active" : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      <div className="post__list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={post.id} className="post__box">
              <Link to={`/posts/${post.id}`}>
                <div className="post__profile-box">
                  <div className="post__profile" />
                  <div className="post__author-name">{post.email}</div>
                  <div className="post__date">{post.createdAt}</div>
                </div>
                <div className="post__title">{post.title}</div>
                <div className="post__text">{post.summary}</div>
              </Link>
              <div className="post__utils-box">
                {user?.email === post.email && (
                  <>
                    <div
                      className="post__delete"
                      onClick={() => handleDelete(post.id as string)}
                    >
                      삭제
                    </div>
                    <div className="post__edit">
                      <Link to={`/posts/edit/${post.id}`}>수정</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="post__no-post">게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default PostList;
