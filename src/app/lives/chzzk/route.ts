import { NextRequest, NextResponse } from "next/server";
import { ChzzkLiveListResponse } from "./types";

export async function GET(request: NextRequest) {
  const seachParams = request.nextUrl.searchParams;
  const size = seachParams.get("size");

  const url = `https://api.chzzk.naver.com/service/v1/lives?size=${size}`;
  const response: ChzzkLiveListResponse = await (await fetch(url)).json();

  return NextResponse.json(response);
}
