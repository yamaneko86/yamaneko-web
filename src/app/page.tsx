import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen m-5">
      <div className="flex flex-row items-center mb-5">
        <Image
          src={"/yamaneko-icon.jpg"}
          height={150}
          width={150}
          alt={"yamaneko-icon"}
          className="rounded-full hover:animate-spin "
        />
        <div className="font-serif text-3xl mx-5">
          ヤマネコのポートフォリオWebサイト。
        </div>
      </div>
      <div className="mb-5">
        システムエンジニアとして働いてます。
        <br />
        実務が<span className="line-through">（つまらない）</span>
        レガシー環境なので、
        <br />
        趣味で個人開発（主にNext.js）して
        <br />
        気を紛らわしてます。
      </div>

      <div className="mb-5">
        作ったもの（リンクになってるよ）
        <ul>
          <li>
            <Link href={"https://basket-court-map-ts.vercel.app/"}>
              ・バスケットコートマップ
            </Link>
          </li>
          <li>
            <Link href={"https://todoapp-with-supabase-plum.vercel.app/"}>
              ・Todoアプリ
            </Link>
          </li>
          <li>
            <Link href={"https://chatgpt-clone-rho-sooty.vercel.app/"}>
              ・ChatGPTクローン
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        各アカウントはこちら
        <div className="flex flex-row">
          <Link href={"https://github.com/yamaneko86"}>
            <Image
              src={"/github-icon-white.png"}
              height={25}
              width={25}
              alt={"github-icon"}
              className="mr-2"
            />
          </Link>

          <Link href={"https://twitter.com/yamaneko8699/"}>
            <Image
              src={"/x-icon-white.png"}
              height={25}
              width={25}
              alt={"twitter-icon"}
              className="mr-2"
            />
          </Link>

          <Link href={"https://qiita.com/yamaneko86/"}>
            <Image
              src={"/qiita-icon.png"}
              height={25}
              width={25}
              alt={"qiita-icon"}
              className="mr-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
