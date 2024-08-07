import React, { createContext, useReducer, useState, useEffect } from "react";
import { getCurrentUser, updateUser } from '../DataBase';

const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const existingItem = state.wishlist.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          wishlist: state.wishlist.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        wishlist: state.wishlist.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };
    case "SET_WISHLIST":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
}

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      dispatch({ type: "SET_WISHLIST", payload: currentUser.items || [] });
    }
  }, []);

  const addToWishlist = (product, quantity) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { ...product, quantity: quantity },
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: productId,
    });
  };

  const updateWishlistItemQuantity = (productId, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: newQuantity },
    });
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  const setWishlist = (wishlist) => {
    dispatch({ type: "SET_WISHLIST", payload: wishlist });
  };

  const syncWishlistWithDatabase = () => {
    if (user) {
      updateUser(user.email, { ...user, items: state.wishlist });
    }
  };

  const logout = () => {
    setUser(null);
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist: state.wishlist,
      addToWishlist, 
      removeFromWishlist,
      updateWishlistItemQuantity,
      clearWishlist,
      setWishlist, 
      syncWishlistWithDatabase,
      user,
      setUser,
      logout
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };