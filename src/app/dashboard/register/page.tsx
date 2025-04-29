"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createGuestbook } from "../../../../utils/api";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    author: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createGuestbook(formData);
    response.statusCode === 201 && router.push("/");
    response.statusCode === 400 &&
      alert("작성자는 최소 2자 이상, 최대 20자까지 가능합니다.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-xl">
        <div className="mb-10 text-center mt-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            자유롭게 내용을 작성하세요 !
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="space-y-2">
            <label
              htmlFor="author"
              className="text-sm font-medium text-gray-700"
            >
              작성자
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="당신의 이름을 알려주세요"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="content"
              className="text-sm font-medium text-gray-700"
            >
              내용
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none"
              placeholder="당신의 이야기를 자유롭게 적어주세요."
            />
          </div>

          <div className="flex justify-end items-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition duration-200"
            >
              취소하기
            </button>
            <button
              type="submit"
              onClick={() => router.push("/dashboard/register")}
              className="px-8 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:opacity-90 transition duration-200 shadow-md hover:shadow-lg"
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
