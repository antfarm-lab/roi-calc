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
     <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
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
      <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    ROIを計算することが重要な理由
  </h2>

  <p className="mb-3">
    物販や投資では利益額だけでなく、投資額に対してどれだけ利益が出たかを確認する必要があります。
    これをROI（投資利益率）といいます。
  </p>

  <p className="mb-3">
    ROIを確認することで、どの商品や仕入れ方法が効率的なのかを
    数字で判断できるようになります。
  </p>

  <p>
    このROI計算ツールでは投資額と利益額から
    投資効率を自動で計算できます。
  </p>
  </section>
<section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm text-blue-600 underline">
    <a href="https://calc-tools-mauve.vercel.app/">
      メルカリ・Amazon・ラクマ利益計算ツール
    </a>
    <a href="https://shipping-calc-olive.vercel.app/">
      メルカリ送料計算ツール
    </a>
    <a href="https://price-reverse-calc.vercel.app/">
      利益から販売価格を逆算するツール
    </a>
    <a href="https://fee-calc-seven.vercel.app/">
      メルカリ販売手数料計算ツール
    </a>
    <a href="https://profit-rate-calc.vercel.app/">
      メルカリ利益率計算ツール
    </a>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon販売手数料計算ツール
    </a>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI（投資利益率）計算ツール
    </a>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </div>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}