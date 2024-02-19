export interface YoutubeLiveResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: YoutubeSnippet;
}

export interface YoutubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Thumbnails {
  default: Image;
  medium: Image;
  high: Image;
}

interface Image {
  url: string;
  width: number;
  height: number;
}

interface Id {
  kind: string;
  videoId: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YoutubeChannelResponse {
  items: [
    {
      snippet: {
        thumbnails: {
          default: { url: string; width: number; height: number };
        };
      };
    },
  ];
}
