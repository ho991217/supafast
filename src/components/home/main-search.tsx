import Logo from '../common/logo';
import Search from '../common/search';

export default function MainSearch() {
  return (
    <div className="m-auto flex flex-col items-center">
      <Logo className="mb-6" />
      <Search className="mb-7" />
      <p className="text-center text-lg font-bold leading-6 text-neutral-400">
        내가 즐겨보던 스트리머는 어디로 이직했을까?
        <br />
        지금 바로 검색해보세요!
      </p>
    </div>
  );
}
