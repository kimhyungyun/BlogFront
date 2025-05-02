import axios from "axios";
import { Guestbook } from "../types/Guestbook";

const API_URL = "http://localhost:3001";

export const getGuestbooks = async (): Promise<Guestbook[]> => {
  const response = await axios.get(`${API_URL}/guestbooks`);
  return response.data;
};

export const createGuestbook = async (
  guestbook: Pick<Guestbook, "author" | "content">
) => {
  const response = await axios.post(`${API_URL}/guestbooks`, guestbook);
  return response.data;
};

export const deleteGuestbook = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/guestbooks/${id}`);
};

export const likeGuestbook = async (id: number): Promise<void> => {
  await axios.patch(`${API_URL}/guestbooks/${id}/like`);
};

export const incrementView = async (id: number) => {
  try {
    const response = await axios.patch(`${API_URL}/guestbooks/${id}/view`);
    return response.data;
  } catch (error) {
    console.error("조회수 증가 실패:", error);
    throw new Error("조회수 증가 실패");
  }
};
