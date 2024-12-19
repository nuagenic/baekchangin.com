export type ProfileType = {
  occupation: string;
  text: string;
  thumbnail: string | null;
  startDate: string;
  endDate: string | "지금";
  note: string;
};

export const profilesList: ProfileType[] = [
  {
    occupation: "지은이",
    text: `서울대학교에서 언론정보학, 정보문화학, 미학을 공부했다. 시집 <a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=260553475" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">『구름의 변증법』</a>을 쓰고, 영화 <a href="https://www.youtube.com/watch?v=7c8bFhaFNho" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「THE MOVERS」</a>를 연출했다. 텍스트와 이미지의 끝없는 대화를 바라보는 웹 <a href="https://www.flipsandturns.xyz/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「flips and turns」</a>를 가꿔 나간다. 한편 이 모든 일들을 ”언어를 갖고 놀기”로 생각한다. 도무지 하나의 언어에 정착하지 못하는 탓에 어디에도 소속되지 않는다고 자책하기도 했다. 그러나 경계인으로 사는 자신을 긍정하고 계속해서 여기저기를 기웃거리기로 한다. 현재 <a href="https://minguhongmfg.com/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">민구홍 매뉴팩처링</a>에서 인턴으로 일하며, 그의 안팎을 열심히 기웃거린다.`,
    thumbnail: "/images/image1.PNG",
    startDate: "2024.12.09",
    endDate: "지금",
    note: "소개는 결정적인 동시에 잠정적이다...\n소개는 도처에서 굳어진 채로 나를 대변하지만, 나는 어느새 그 소개들을 빠져나와 다른 곳으로 가 있다.\n\n나는 세계가 판단해야 할 나를 결정적으로 둔다.\n한편 책날개의 뒷면을 기웃거릴 사랑이 남은 이들에게 잠정적인 나를 내보인다.",
  },
  {
    occupation: "그린이",
    text: `서울대학교에서 언론정보학, 정보문화학, 미학을 공부했다. 시집 <a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=260553475" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">『구름의 변증법』</a>을 쓰고, 영화 <a href="https://www.youtube.com/watch?v=7c8bFhaFNho" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「THE MOVERS」</a>를 연출했다. 텍스트와 이미지의 끝없는 대화를 바라보는 웹 <a href="https://www.flipsandturns.xyz/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「flips and turns」</a>를 가꿔 나간다. 한편 이 모든 일들을 ”언어를 갖고 놀기”로 생각한다. 도무지 하나의 언어에 정착하지 못하는 탓에 어디에도 소속되지 않는다고 자책하기도 했다. 그러나 경계인으로 사는 자신을 긍정하고 계속해서 여기저기를 기웃거리기로 한다. 현재 <a href="https://minguhongmfg.com/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">민구홍 매뉴팩처링</a>에서 인턴으로 일하며, 그의 안팎을 열심히 기웃거린다.`,
    thumbnail: "/images/image1.PNG",
    startDate: "2024.12.09",
    endDate: "지금",
    note: "소개는 결정적인 동시에 잠정적이다...\n소개는 도처에서 굳어진 채로 나를 대변하지만, 나는 어느새 그 소개들을 빠져나와 다른 곳으로 가 있다.\n\n나는 세계가 판단해야 할 나를 결정적으로 둔다.\n한편 책날개의 뒷면을 기웃거릴 사랑이 남은 이들에게 잠정적인 나를 내보인다.",
  },
  {
    occupation: "옮긴이",
    text: `서울대학교에서 언론정보학, 정보문화학, 미학을 공부했다. 시집 <a href="https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=260553475" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">『구름의 변증법』</a>을 쓰고, 영화 <a href="https://www.youtube.com/watch?v=7c8bFhaFNho" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「THE MOVERS」</a>를 연출했다. 텍스트와 이미지의 끝없는 대화를 바라보는 웹 <a href="https://www.flipsandturns.xyz/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">「flips and turns」</a>를 가꿔 나간다. 한편 이 모든 일들을 ”언어를 갖고 놀기”로 생각한다. 도무지 하나의 언어에 정착하지 못하는 탓에 어디에도 소속되지 않는다고 자책하기도 했다. 그러나 경계인으로 사는 자신을 긍정하고 계속해서 여기저기를 기웃거리기로 한다. 현재 <a href="https://minguhongmfg.com/" onClick="event.stopPropagation()" rel="noopener noreferrer" target="_blank">민구홍 매뉴팩처링</a>에서 인턴으로 일하며, 그의 안팎을 열심히 기웃거린다.`,
    thumbnail: "/images/image1.PNG",
    startDate: "2024.12.09",
    endDate: "지금",
    note: "소개는 결정적인 동시에 잠정적이다...\n소개는 도처에서 굳어진 채로 나를 대변하지만, 나는 어느새 그 소개들을 빠져나와 다른 곳으로 가 있다.\n\n나는 세계가 판단해야 할 나를 결정적으로 둔다.\n한편 책날개의 뒷면을 기웃거릴 사랑이 남은 이들에게 잠정적인 나를 내보인다.",
  },
];
