"use client";

import { useState } from "react";

export default function Home() {
  const [costPrice, setCostPrice] = useState("");
  const [profitAmount, setProfitAmount] = useState("");

  const cost = Number(costPrice) || 0;
  const profit = Number(profitAmount) || 0;

  const roi = cost > 0 ? (profit / cost) * 100 : 0;
const profitScore =
  profit <= 0
    ? 0
    : profit < 500
    ? 10
    : profit < 1000
    ? 20
    : profit < 2000
    ? 30
    : 40;

const roiScore =
  roi <= 0
    ? 0
    : roi < 10
    ? 10
    : roi < 20
    ? 20
    : roi < 30
    ? 35
    : roi < 50
    ? 50
    : 60;

const score = profitScore + roiScore;

let rank = "D";

if (profit <= 0) {
  rank = "D";
} else if (score >= 85) {
  rank = "S";
} else if (score >= 70) {
  rank = "A";
} else if (score >= 55) {
  rank = "B";
} else if (score >= 40) {
  rank = "C";
}

if (roi < 10 && rank !== "D") {
  rank = "C";
}
const comment =
  rank === "S"
    ? "利益額とROIの両方が高く、資金効率の良い仕入れ候補です。仕入れ資金を効率よく回せる条件です。"
    : rank === "A"
    ? "利益額とROIのバランスが良く、十分に検討できる条件です。販売期間や在庫回転も確認しましょう。"
    : rank === "B"
    ? "利益は確保できていますが、資金効率にはまだ改善余地があります。よりROIの高い商品と比較して判断しましょう。"
    : rank === "C"
    ? "利益またはROIが低めです。資金が長く拘束される可能性もあるため、慎重に判断しましょう。"
    : "利益または投資効率が不足しています。仕入れ額や利益額の条件を見直しましょう。";
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
  仕入れ額と利益額からROIを計算し、利益額と投資効率をANT FARM SCOREで100点評価します。
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

<div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
  <p className="text-sm font-semibold text-gray-500">
    ANT FARM SCORE
  </p>

  {costPrice === "" || profitAmount === "" ? (
    <p className="mt-3 text-sm text-gray-600">
      仕入れ額と利益額を入力するとSCOREを判定します。
    </p>
  ) : (
    <>
      <div className="mt-2 flex items-end justify-between gap-4">
        <div>
          <p className="text-4xl font-extrabold text-gray-900">
            {score}
            <span className="ml-1 text-lg font-semibold text-gray-500">
              / 100
            </span>
          </p>

          <p className="mt-1 text-sm font-semibold text-gray-700">
            ランク：{rank}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xl">
            {score >= 85
              ? "⭐⭐⭐⭐⭐"
              : score >= 70
              ? "⭐⭐⭐⭐☆"
              : score >= 55
              ? "⭐⭐⭐☆☆"
              : score >= 40
              ? "⭐⭐☆☆☆"
              : "⭐☆☆☆☆"}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-600">
          SCORE内訳
        </p>

        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>利益額：{profitScore} / 40点</li>
          <li>ROI：{roiScore} / 60点</li>
        </ul>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-600">
          判定コメント
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          {comment}
        </p>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-600">
          SCORE判定基準
        </p>

        <ul className="mt-2 space-y-1 text-sm text-gray-600">
          <li>⭐⭐⭐⭐⭐　S：85〜100点　かなり良い仕入れ候補</li>
          <li>⭐⭐⭐⭐☆　A：70〜84点　仕入れ候補</li>
          <li>⭐⭐⭐☆☆　B：55〜69点　条件を確認して判断</li>
          <li>⭐⭐☆☆☆　C：40〜54点　慎重に判断</li>
          <li>⭐☆☆☆☆　D：0〜39点　条件の見直し推奨</li>
        </ul>
      </div>
    </>
  )}
</div>

<button
  onClick={reset}
  className="mt-6 w-full rounded bg-black py-3 font-bold text-white"
>
  リセット
</button>
                
      </div>
      <section className="mx-auto mt-6 max-w-3xl rounded-xl border bg-white p-5">
  <h2 className="text-xl font-bold">
    ROIの早見表
  </h2>

  <p className="mt-2 text-sm text-gray-600">
    仕入れ額10,000円の場合、ROIごとの利益額は次のようになります。
  </p>

  <div className="mt-4 overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">ROI</th>
          <th className="border p-2">仕入れ額</th>
          <th className="border p-2">利益額</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border p-2 text-center">10%</td>
          <td className="border p-2 text-right">10,000円</td>
          <td className="border p-2 text-right">1,000円</td>
        </tr>
        <tr>
          <td className="border p-2 text-center">20%</td>
          <td className="border p-2 text-right">10,000円</td>
          <td className="border p-2 text-right">2,000円</td>
        </tr>
        <tr>
          <td className="border p-2 text-center">30%</td>
          <td className="border p-2 text-right">10,000円</td>
          <td className="border p-2 text-right">3,000円</td>
        </tr>
        <tr>
          <td className="border p-2 text-center">50%</td>
          <td className="border p-2 text-right">10,000円</td>
          <td className="border p-2 text-right">5,000円</td>
        </tr>
        <tr>
          <td className="border p-2 text-center">100%</td>
          <td className="border p-2 text-right">10,000円</td>
          <td className="border p-2 text-right">10,000円</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mt-3 text-xs text-gray-500">
    ROI ＝ 利益額 ÷ 仕入れ額 × 100 で計算しています。
  </p>
</section>
      <section className="mt-12 text-left max-w-3xl mx-auto space-y-6">
<div>
  <h2 className="text-2xl font-bold mb-3">
    ROIの計算式
  </h2>

  <p className="mb-3">
    ROIは、投資した金額に対してどれくらい利益が出たかを割合で表す指標です。
  </p>

  <div className="rounded-xl bg-white p-4 font-bold">
    ROI（%）＝ 利益額 ÷ 投資額 × 100
  </div>

  <p className="mt-3">
    例えば仕入れ額10,000円で利益3,000円なら、
    ROIは30%です。
  </p>
</div>
  <div>
    <h2 className="text-2xl font-bold mb-3">
      1万円仕入れて利益3000円なら効率はいい？
    </h2>
    <p>
      商品を仕入れて販売する場合、利益額だけでなく投資効率を見ることが重要です。
      1万円仕入れて3000円利益が出ても、
      実際にどれくらい効率よくお金を増やせているか確認する必要があります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      せどりで利益率とROIは何が違う？
    </h2>
    <p>
      利益率は売上に対する利益割合ですが、
      ROIは仕入れたお金に対してどれくらい利益が出たかを見る指標です。
      物販やせどりではROIを確認することで、
      本当に効率の良い商品か判断しやすくなります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      売上より投資効率を見た方が伸びやすい
    </h2>
    <p>
      月商が高くても仕入れ額が大きければ効率は悪い場合があります。
      ROIを確認することで、
      少ない資金でどれだけ利益を増やせるか把握しやすくなります。
      継続して物販をするなら重要な考え方です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. せどり商品の比較にも使えますか？<br />
      A. はい。仕入れ額に対する利益効率を比較できます。<br /><br />

      Q. 利益率との違いは何ですか？<br />
      A. ROIは投資額ベース、利益率は売上ベースで計算します。
    </p>
  </div>

</section>
      <section className="mx-auto mt-10 max-w-3xl rounded-xl border bg-white p-5">
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
<section className="mx-auto mt-10 max-w-3xl rounded-xl border bg-white p-5">
 <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://calc-tools-mauve.vercel.app/">
      総合計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
  </li>
  <li>
    <a href="https://price-reverse-calc.vercel.app/">
      販売価格逆算ツール
    </a>
  </li>
  <li>
    <a href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://profit-rate-calc.vercel.app/">
      利益率計算ツール
    </a>
  </li>
  <li>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
  </li>
  <li>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </li>
</ul>
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