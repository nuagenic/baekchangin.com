export type ProfileType = {
  occupation: string;
  text: string;
  thumbnail: string | null;
  startDate: string;
  endDate: string | "지금";
};

export const profilesList: ProfileType[] = [
  {
    occupation: "지은이",
    text: `서울대학교에서 언론정보학, 정보문화학, 미학을 공부했다. 시집 <a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=260553475" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">『구름의 변증법』</a>을 쓰고, 영화 <a href="https://www.youtube.com/watch?v=7c8bFhaFNho" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「THE MOVERS」</a>를 연출했다. 텍스트와 이미지의 끝없는 대화를 바라보는 웹 <a href="https://www.flipsandturns.xyz/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「flips and turns」</a>를 가꿔 나간다. 한편 이 모든 일들을 ”언어를 갖고 놀기”로 생각한다. 도무지 하나의 언어에 정착하지 못하는 탓에 어디에도 소속되지 않는다고 자책하기도 했다. 그러나 경계인으로 사는 자신을 긍정하고 계속해서 여기저기를 기웃거리기로 한다. 

현재 <a href="https://minguhongmfg.com/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">민구홍 매뉴팩처링</a>에서 인턴으로 일하며, 그의 안팎을 열심히 기웃거린다.`,
    thumbnail: null,
    startDate: "2024.12.09",
    endDate: "지금",
  },
];
