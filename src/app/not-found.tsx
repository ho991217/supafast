import Logo from './components/common/logo';
import Search from './components/common/search';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      <div className="m-auto flex flex-col items-center justify-center">
        <Logo navigateOnLogoClick />
        <h1 className=" mt-8 text-4xl font-bold text-white">
          404: 존재하지 않는 페이지 입니다.
        </h1>
        <span className="mb-10 mt-4 text-lg font-bold text-neutral-400">
          로고를 클릭하면 메인 페이지로 이동합니다.
        </span>
        <Search />
      </div>
    </main>
  );
}
``;
