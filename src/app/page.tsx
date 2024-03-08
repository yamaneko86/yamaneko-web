"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("アイコン絶対押すなよ〜");
  const [angryState, setAngryState] = useState<string>("");
  const [happyState, setHappyState] = useState<string>("");

  const changeText = () => {
    setCount(count + 1);
    if (count == 0) {
      setText("は？もう押すなよ？");
      setAngryState("💢");
    } else if (count == 1) {
      setText("だから押すなってば。");
    } else if (count == 2) {
      setText("最後だぞ。もう絶対押すなよ？？");
    } else if (count == 3) {
      setText("俺のこと好きやん。。");
      setAngryState("");
      setHappyState("///　　　///");
    } else if (count == 4) {
      setText("茶番 〜完〜");
    } else {
      return;
    }
  };

  return (
    <div className="bg-black h-screen m-5">
      <div className="relative flex flex-row items-center mb-5">
        <Image
          src={"/yamaneko-icon.png"}
          height={150}
          width={150}
          alt={"yamaneko-icon"}
          onClick={() => changeText()}
        />
        <div id="angry" className="absolute text-lg z-10 ml-9 mb-6">
          {angryState}
        </div>
        <div
          id="happy"
          className="absolute text-sm z-10 ml-9 mt-5 text-red-500"
        >
          {happyState}
        </div>
        <div className="font-serif text-3xl mx-5">
          ヤマネコのポートフォリオWebサイト（仮）
        </div>
      </div>
      <div className="font-serif text-xl mx-5 mb-5">{text}</div>
      <div className="mb-5">
        SIerでシステムエンジニアとして働いてます。
        <br />
        実務が<span className="line-through">つまらない</span>
        レガシー環境なので、
        <br />
        趣味で個人開発（主にNext.js）して
        <br />
        気を紛らわしてます。モダン環境、万歳。
      </div>

      <div className="mb-5">
        作ったもの（リンクになってるよ）
        <ul>
          <li>
            <Link href={"https://basket-court-map-ts.vercel.app/"}>
              ・<span className="hover:underline">バスケットコートマップ</span>
            </Link>
          </li>
          <li>
            <Link href={"https://todoapp-with-supabase-plum.vercel.app/"}>
              ・<span className="hover:underline">Todoアプリ</span>
            </Link>
          </li>
          <li>
            <Link href={"https://chatgpt-clone-rho-sooty.vercel.app/"}>
              ・<span className="hover:underline">ChatGPTクローン</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <div className="mb-1">各SNSアカウントはこちら</div>
        <div className="flex flex-row">
          <Link href={"https://github.com/yamaneko86"}>
            <Image
              src={"/github-icon-white.png"}
              height={30}
              width={30}
              alt={"github-icon"}
              className="mr-3"
            />
          </Link>

          <Link href={"https://twitter.com/yamaneko8699/"}>
            <Image
              src={"/x-icon-white.png"}
              height={30}
              width={30}
              alt={"twitter-icon"}
              className="mr-3"
            />
          </Link>

          <Link href={"https://qiita.com/yamaneko86/"}>
            <Image
              src={"/qiita-icon.png"}
              height={30}
              width={30}
              alt={"qiita-icon"}
              className="mr-3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
