import { fetchWithToken, postWithToken, putWithToken } from "@/helper/api";
import {
  FETCH_PAGES,
  FETCH_PAGES_FAILURE,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGE,
  FETCH_PAGE_FAILURE,
  FETCH_PAGE_SUCCESS,
} from "../actionTypes";
import { AppDispatch } from "../store";
import page from "../endpoint/page";

interface ApiResponse {
  data?: any;
  message?: string;
}

export const fetchPageList = (accessToken: any, option: any) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_PAGES });
    fetchWithToken(page.pageList(), accessToken, option)
      .then((response) => {
        dispatch({
          type: FETCH_PAGES_SUCCESS,
          payload: { data: response },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PAGES_FAILURE,
          payload: { error: error.message },
        });
      });
  };
};

export const fetchPageDetail = (accessToken: any, id: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_PAGE });
    fetchWithToken(page.pageDetail(id), accessToken)
      .then((response) => {
        dispatch({
          type: FETCH_PAGE_SUCCESS,
          payload: { data: response },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PAGES_FAILURE,
          payload: { error: error.message },
        });
      });
  };
};

export const updatePage = (
  accessToken: string | any,
  payload: any,
  onSuccess: () => void,
  onFailure: (error: string) => void
) => {
  return (dispatch: AppDispatch) => {
    putWithToken(page.pageUpdate(payload.id), accessToken, payload.data)
      .then((response) => {
        if (response && response.data) {
          onSuccess();
        }
      })
      .catch((error) => {
        const errorMessage =
          error && error.message ? error.message : "Unknown error";
        onFailure(errorMessage);
      });
  };
};
