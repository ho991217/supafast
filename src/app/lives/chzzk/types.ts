export interface LiveListResponse {
  /** 응답 코드 */
  code: number;
  /** 응답 메시지 */
  message?: string;
  /** 응답 내용 */
  content: Content;
}

interface Content {
  /** 데이터 개수 */
  size: number;
  /** 페이지 정보 */
  page: Page;
  /** 방송 목록 */
  data: Datum[];
}

interface Datum {
  /** 방송 고유 ID */
  liveId: number;
  /** 방송 제목 */
  liveTitle: string;
  /** 썸네일 이미지 URL */
  liveImageUrl: string;
  /** 기본 썸네일 이미지 URL */
  defaultThumbnailImageUrl?: string;
  /** 동시 시청자 수 */
  concurrentUserCount: number;
  /** 누적 시청자 수 */
  accumulateCount: number;
  /** 방송 시작 시간 */
  openDate: string;
  /** 성인 방송 여부 */
  adult: boolean;
  /** 1차 카테고리 분류 */
  categoryType?: string;
  /** 2차 카테고리 분류 */
  liveCategory: string;
  /** 2차 카테고리 */
  liveCategoryValue: string;
  /** 채널 정보 */
  channel: Channel;
}

interface Channel {
  /** 채널 고유 ID */
  channelId: string;
  /** 채널 이름 */
  channelName: string;
  /** 채널 이미지 URL */
  channelImageUrl: string;
  /** 인증 마크 여부 */
  verifiedMark: boolean;
  /** 개인 정보 */
  personalData: PersonalData;
}

interface PersonalData {
  /** 팔로잉 정보 */
  following: Following;
  /** 비공개 유저 차단 여부 */
  privateUserBlock: boolean;
}

interface Following {
  /** 팔로잉 여부 */
  following: boolean;
  /** 알림설정 여부 */
  notification: boolean;
  /** 팔로우 날짜 */
  followDate?: Date;
}

interface Page {
  /** 다음 페이지 정보 */
  next: Next;
}

interface Next {
  /** 동시 시청자 수 */
  concurrentUserCount: number;
  /** 방송 고유 ID */
  liveId: number;
}
