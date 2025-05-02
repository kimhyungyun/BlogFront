"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  deleteGuestbook,
  getGuestbooks,
  incrementView,
} from "../../../../utils/api";
import { Guestbook } from "../../../../types/Guestbook";

const handleApiAction = async (
  apiFunc: Function,
  id: string,
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    await apiFunc(id);
    setState((prev) => prev + 1);
  } catch (error) {
    console.error("API 호출 실패:", error);
  }
};

export default function Page(promiseParams: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(promiseParams.params);
  const router = useRouter();
  const [selectedGuestbook, setSelectedGuestbook] = useState<Guestbook | null>(
    null
  );
  const [views, setViews] = useState<number>(0);
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuestbook = async () => {
      const guestbooks = await getGuestbooks();
      const found = guestbooks.find((g) => g.id === parseInt(id));
      setSelectedGuestbook(found || null);

      if (found) {
        setViews(found.views);
        handleApiAction(incrementView, String(found.id), setViews);
      }
    };

    fetchGuestbook();
  }, [id]);

  useEffect(() => {
    if (selectedGuestbook) {
      setFormattedDate(
        new Date(selectedGuestbook.createdAt).toLocaleDateString()
      );
    }
  }, [selectedGuestbook]);

  const handleDelete = async () => {
    if (!selectedGuestbook) return;

    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await deleteGuestbook(selectedGuestbook.id);
      alert("방명록이 삭제되었습니다.");
      router.push("/dashboard");
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다.");
    }
  };

  if (!selectedGuestbook) {
    return <div>방명록을 찾을 수 없습니다.</div>;
  }

  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 py-12 mt-30">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto shadow-xl">
          <div className="bg-gray-300 rounded-lg p-4 mb-4 border border-white/50">
            <div className="flex justify-between items-center mb-3">
              <img src="/house.svg" alt="하우스 아이콘" className="w-7 h-7" />
              <h1 className="text-2xl font-bold bg-gradient-to-r">
                {selectedGuestbook.author}님의 게시글
              </h1>
              <button
                onClick={handleDelete}
                className="text-white py-2 px-4 rounded-lg cursor-pointer"
              >
                삭제
              </button>
            </div>
            <p className="flex justify-end tracking-wider text-sm text-gray-600">
              조회수 <span> {views}</span>
            </p>
          </div>

          <div className="bg-gradient-to-r bg-gray-400 rounded-lg p-4 border border-white/50">
            <div className="flex items-center gap-2 mb-4">
              <img src="/연필.png" alt="연필 아이콘" className="w-5 h-5" />
              <h2 className="text-xl font-bold">내용</h2>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-3 justify-end">
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </div>
              <p className="flex justify-center text-gray-700 whitespace-pre-wrap bg-gray-200 rounded-lg p-4 border border-white/50">
                {selectedGuestbook.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
