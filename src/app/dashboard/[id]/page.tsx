"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteGuestbook, getGuestbooks } from "../../../../utils/api";
import { Guestbook } from "../../../../types/Guestbook";

export default function Page(promiseParams: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(promiseParams.params); // ✅ 최신 Next.js 방식으로 unwrap
  const router = useRouter();
  const [selectedGuestbook, setSelectedGuestbook] = useState<Guestbook | null>(
    null
  );

  useEffect(() => {
    const fetchGuestbook = async () => {
      const guestbooks = await getGuestbooks();
      const found = guestbooks.find((g) => g.id === parseInt(id));
      setSelectedGuestbook(found || null);
    };

    fetchGuestbook();
  }, [id]);

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
    <main className="min-h-screen bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto shadow-xl">
          <div className="bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 rounded-lg p-4 mb-4 border border-white/50">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                {selectedGuestbook.author}님의 미니홈피
              </h1>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                삭제
              </button>
            </div>
            <p className="flex justify-end tracking-wider text-sm text-gray-600">
              TODAY <span className="text-red-500">2,801</span> | TOTAL 13,245
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 rounded-lg p-4 border border-white/50">
            <div className="flex items-center gap-2 mb-4">
              <img src="/next.svg" alt="연필 아이콘" className="w-5 h-5" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                방명록
              </h2>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                  {selectedGuestbook.author}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(selectedGuestbook.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap bg-gradient-to-r from-red-50 via-yellow-50 to-blue-50 rounded-lg p-4 border border-white/50">
                {selectedGuestbook.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
