import { createContext } from "react";

export const PostDataContext = createContext();

const PostDataProvider = ({ children }) => {

  const data = "Hello from Post Context";

  return (
    <PostDataContext.Provider value={data}>
      {children}
    </PostDataContext.Provider>
  );
};

export default PostDataProvider;
