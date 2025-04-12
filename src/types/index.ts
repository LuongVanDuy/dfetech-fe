export type ApiResponse = {
  status: number;
  data: any;
};

export type ActionType = {
  type: string;
  payload?: any;
};

export type StateType = {
  loadingList?: boolean;
  loading: boolean;
  error: boolean;
  message: string;
  detail: any;
  info?: any;
  list: any[];
  total?: number;
};

export type TableOptions = {
  username: any;
  page: number;
  limit: number;
  status?: any;
};
