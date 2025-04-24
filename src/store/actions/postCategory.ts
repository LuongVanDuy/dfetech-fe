import { fetchWithToken, postWithToken, putWithToken } from "@/helper/api";
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY,
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS,
} from "../actionTypes";
import { AppDispatch } from "../store";
import postCategory from "../endpoint/postCategory";

interface ApiResponse {
  data?: any;
  message?: string;
}

export const fetchPostCategories = (accessToken: any, option: any) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_CATEGORIES });
    fetchWithToken(postCategory.fetchPostCategories(), accessToken, option)
      .then((response) => {
        dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: { data: response },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CATEGORIES_FAILURE,
          payload: { error: error.message },
        });
      });
  };
};

export const createPostCategory = (accessToken: string | any, payload: any, onSuccess: () => void, onFailure: (error: string) => void) => {
  return (dispatch: AppDispatch) => {
    postWithToken(postCategory.createPostCategory(), accessToken, payload.data)
      .then((response) => {
        if (response) {
          onSuccess();
        }
      })
      .catch((error) => {
        const errorMessage = error && error.message ? error.message : "Unknown error";
        onFailure(errorMessage);
      });
  };
};

export const fetchPostCategory = (accessToken: any, id: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_CATEGORY });
    fetchWithToken(postCategory.fetchPostCategory(id), accessToken)
      .then((response) => {
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          payload: { data: response },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CATEGORY_FAILURE,
          payload: { error: error.message },
        });
      });
  };
};

export const updatePostCategory = (accessToken: string | any, payload: any, onSuccess: () => void, onFailure: (error: string) => void) => {
  return (dispatch: AppDispatch) => {
    putWithToken(postCategory.updatePostCategory(payload.id), accessToken, payload.data)
      .then((response) => {
        if (response) {
          onSuccess();
        }
      })
      .catch((error) => {
        const errorMessage = error && error.message ? error.message : "Unknown error";
        onFailure(errorMessage);
      });
  };
};
