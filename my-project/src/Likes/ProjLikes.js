import   {createContext,useContext} from "react";
export const  LikesContext = createContext({
 Likes: 0,

});
export const LikesProvider = LikesContext.Provider;