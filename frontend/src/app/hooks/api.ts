import { useQuery } from "react-query";
import { queryKey } from "./keys";
import { getApi, postApi } from "../utils/request";

export const useFetchAllBooks = () =>
  useQuery([queryKey?.FETCH_ALL_BOOKS], () => getApi("books/fetchProduct"));

export const postBookData = async (payload: any) => {
  await postApi("products/accessProduct/", payload);
};
