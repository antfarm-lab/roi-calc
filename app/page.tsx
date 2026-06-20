"use client";

import { useState } from "react";

export default function Home() {
  const [costPrice, setCostPrice] = useState("");
  const [profitAmount, setProfitAmount] = useState("");

  const cost = Number(costPrice) || 0;
  const profit = Number(profitAmount) || 0;

  const roi = cost > 0 ? (profit / cost) * 100 : 0;

  const reset = () => {
    setCostPrice("");
    setProfitAmount("");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-2 text-2xl font-bold">
          ROI計算ツール
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          仕入れ額と利益額から投資利益率（ROI）を計算します。
        </p>

        <div className="space-y-4">
          <input
            type="number"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            placeholder="仕入れ額（例：2000）"
            className="w-full rounded border p-3"
          />

          <input
            type="number"
            value={profitAmount}
            onChange={(e) => setProfitAmount(e.target.value)}
            placeholder="利益額（例：1000）"
            className="w-full rounded border p-3"
          />
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">ROI（投資利益率）</p>
          <p className="text-3xl font-bold">
            {roi.toFixed(1)}%
          </p>
        </div>

        <button
          onClick={reset}
          className="mt-6 w-full rounded bg-black py-3 font-bold text-white"
        >
          リセット
        </button>
      </div>
    </main>
  );
}