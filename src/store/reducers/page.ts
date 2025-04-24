import { ActionType, StateType } from "@/types";

import {
  FETCH_PAGES,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE,
  FETCH_PAGE,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE,
} from "../actionTypes";

const initialState: StateType = {
  loading: true,
  error: false,
  message: "",
  detail: {},
  list: [],
};

const pageReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_PAGES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.data.data,
        total: action.payload.data.count,
        error: false,
      };
    case FETCH_PAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        list: [],
      };
    case FETCH_PAGE:
      return {
        ...state,
        loading: true,
        error: false,
        message: "",
        id: "",
      };
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload.data,
        error: false,
      };
    case FETCH_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        detail: {},
      };
    default:
      return state;
  }
};

export default pageReducer;
