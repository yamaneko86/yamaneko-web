import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen m-5">
      <div className="flex flex-row items-center mb-5">
        <Image
          src={"/yamaneko-icon.png"}
          height={150}
          width={150}
          alt={"yamaneko-icon"}
          className="hover:animate-spin "
        />
        <div className="font-serif text-3xl mx-5">
          ヤマネコのポートフォリオWebサイト（仮）
        </div>
      </div>
      <div className="mb-5">
        システムエンジニアとして働いてます。
        <br />
        実務が<span className="line-through">つまらない</span>
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
        各SNSアカウントはこちら
        <div className="flex flex-row">
          <Link href={"https://github.com/yamaneko86"}>
            <Image
              src={"/github-icon-white.png"}
              height={30}
              width={30}
              alt={"github-icon"}
              className="mr-2"
            />
          </Link>

          <Link href={"https://twitter.com/yamaneko8699/"}>
            <Image
              src={"/x-icon-white.png"}
              height={30}
              width={30}
              alt={"twitter-icon"}
              className="mr-2"
            />
          </Link>

          <Link href={"https://qiita.com/yamaneko86/"}>
            <Image
              src={"/qiita-icon.png"}
              height={30}
              width={30}
              alt={"qiita-icon"}
              className="mr-2"
            />
          </Link>
        </div>
      </div>
      <div className="text-4xl text-gray-800">
        ダサ過ぎるのでいつかちゃんとしたの作ろう。。
      </div>
    </div>
  );
}
