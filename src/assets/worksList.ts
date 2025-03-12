type WorkItem = {
  title: string;
  year: number;
  description: string | string[];
  type: string;
  images?: string[];
  link?: string;
};

const worksList: WorkItem[] = [
  {
    title: "PIE",
    year: 2025,
    description: [
      "민구홍 매뉴팩처링 인턴 업무로, 스튜디오 파이의 의뢰를 받아 PIE 웹사이트에 결제 시스템을 구축했다. 토스페이먼츠 API를 Kirby CMS와 연동했으며, 결제 이벤트 발생 시 스튜디오 파이로 웹훅을 보낼 수 있도록 구현했다. 관련된 코드를 플러그인 형태로 모듈화하여 재사용성을 높였다.",
      "기술 스택: JavaScript, PHP(Kirby CMS)",
    ],
    type: "웹",
    images: ["/images/works/p-i-e.kr/1.jpeg", "/images/works/p-i-e.kr/2.jpeg"],
    link: "http://p-i-e.kr",
  },
  {
    title: "flipsandturns",
    year: 2024,
    description: [
      "보드게임 '텔레스트레이션'에서 영감을 받아 작업한 프로젝트 웹. HTML 요소는 기본적으로 튓면을 투명 처리한다는 점을 이용하여 정사각형이 무한히 뒤집히는 트릭을 구현했다. 또한, 일반적으로 웹사이트 상단에 고정되어 있는 헤더를 인덱스 번호에 따라 움직이게 하여, 헤더와 스크롤바의 역할을 동시에 수행하도록 했다. 모든 서브페이지를 일관된 정사각형 로직으로 디자인했으며, archive 페이지는 각각의 단위작업을 세밀히 살펴볼 수 있도록 모달 창을 제공한다.",
      "기술 스택: Next.js, React, TypeScript, TailwindCSS, MongoDB",
    ],

    type: "웹",
    images: [
      "/images/works/flipsandturns/1.jpeg",
      "/images/works/flipsandturns/2.jpeg",
      "/images/works/flipsandturns/3.jpeg",
      "/images/works/flipsandturns/4.jpeg",
      "/images/works/flipsandturns/5.jpeg",
      "/images/works/flipsandturns/6.jpeg",
      "/images/works/flipsandturns/7.jpeg",
    ],
    link: "https://flipsandturns.xyz/",
  },
  {
    title: "쩜쩜쩜",
    year: 2025,
    description: [
      "’새로운 질서’ 워크숍에서 HTML과 CSS만으로 제작한 핸드메이드 웹. 말줄임표(...)를 다양한 방식으로 조명하고 표현한다. JavaScript의 setInterval() 메소드를 사용하는 대신, CSS의 animation-delay 프로퍼티를 통해 순차적 애니메이션을 구현했다. 또한 웹 표준에서 더 이상 지원하지 않는 <marquee> 요소를 CSS 애니메이션으로 직접 제작하여 사용했다.",
      "기술 스택: HTML, CSS",
    ],
    type: "웹",
    images: [
      "/images/works/dotdotdot/1.jpeg",
      "/images/works/dotdotdot/2.jpeg",
      "/images/works/dotdotdot/3.jpeg",
      "/images/works/dotdotdot/4.jpeg",
      "/images/works/dotdotdot/5.jpeg",
      "/images/works/dotdotdot/6.jpeg",
    ],
    link: "https://baekchangin.neocities.org/dotdotdot/",
  },
  {
    title: "백창.인",
    year: 2025,
    description: [
      "백창인의 영문 이름 사이에 점을 찍으면 유효한 도메인 이름이 된다는 점에서 착안하여, 언어의 국적과 무관하게 '인'이 들어가는 단어들을 모으고 표현하는 웹. AJAX를 이용하여 페이지네이션을 구현하고, Kirby CMS를 사용하여 데이터를 관리한다. 각각의 웹페이지는 JavaScript의 Date() 객체나 Resize Observer API 등을 사용하여 메시지를 간결하게 드러낸다.",
      "기술 스택: JavaScript, PHP(Kirby CMS)",
    ],
    type: "웹",
    images: [
      "/images/works/baekchang.in/1.jpeg",
      "/images/works/baekchang.in/2.jpeg",
      "/images/works/baekchang.in/3.jpeg",
      "/images/works/baekchang.in/4.jpeg",
      "/images/works/baekchang.in/5.jpeg",
      "/images/works/baekchang.in/6.jpeg",
    ],
    link: "http://baekchang.in/",
  },
  {
    title: "ISCHIVE",
    year: 2024,
    description: [
      "서울대학교 정보문화학 과제전 아카이브 웹. 2024-2학기 개발팀 리드를 맡아 시스템 유지보수 및 UI 개선을 총괄했다. 썸네일을 제출하지 않은 과제물이 다수 존재하여, placeholder 이미지를 여러 버전으로 제작하고 랜덤하게 적용했다. 또한, <select>와 <option>으로 이루어진 기존의 드롭다운은 커스터마이징이 어렵다는 문제가 있어, 드롭다운 컴포넌트를 모듈화하여 웹사이트 UI에 맞게 리팩토링했다.",
      "기술 스택: Next.js, React, TypeScript, TailwindCSS",
    ],
    type: "웹",
    images: [
      "/images/works/ischive/1.jpeg",
      "/images/works/ischive/2.jpeg",
      "/images/works/ischive/3.jpeg",
    ],
    link: "https://ischive.com/",
  },
  {
    title: "FIND WAFFLE",
    year: 2024,
    description: [
      "웹 개발 동아리 '와플스튜디오' 인터랙티브 스터디 2024-1 학기작. Three.js 라이브러리를 활용한 3D 웹 게임을 제작했으며, z축의 차이를 무시하는 Orthographic Camera를 사용하여 착시 현상을 구현했다. 또한 캐릭터가 대각선 방향으로 자연스럽게 이동하기 위한 시스템을 설계했다.",
      "기술 스택: TypeScript, Three.js",
    ],
    type: "웹",
    images: [
      "/images/works/find_waffle/1.jpeg",
      "/images/works/find_waffle/2.jpeg",
      "/images/works/find_waffle/3.jpeg",
      "/images/works/find_waffle/4.jpeg",
    ],
    link: "https://interactive-study.wafflestudio.com/projects/find-waffle/",
  },
  {
    title: "구름의 변증법",
    year: 2021,
    description: ["백창인이 2021년까지 작성한 시 50여 편을 모아 펴낸 시집."],
    images: ["/images/works/cloud_dialectics/1.jpeg"],
    type: "텍스트",
  },
  {
    title: "무경계",
    year: 2025,
    description: [
      "전시 플랫폼 '빈칸'의 의뢰를 받아 네 편의 텍스트(「동음이의 어항들」, 「남산타워가 사라지는 날」, 「브라운 운동의 세 가지 관측 사례」, 「쩜쩜쩜」)을 작업한 프로젝트. 기존 문학이 장르를 구분하는 방식에 질문을 던지고, 무경계의 텍스트를 통해 그 대안을 탐구한다.",
    ],
    images: ["/images/works/no_border/1.jpg", "/images/works/no_border/2.jpg"],
    type: "텍스트",
  },
  {
    title: "THE MOVERS",
    year: 2024,
    description: [
      "영화 제작 동아리 '이미지밴드' 2023-1 학기작. 백창인이 연출, 각본, 편집을 맡았다. '사랑과 삶이 함께 갈 수 있는가'라는 회의에서 시작하여, 그럼에도 움직일 수밖에 없는 이미지들을 끝까지 담아낸다.",
    ],
    images: [
      "/images/works/the_movers/1.jpeg",
      "/images/works/the_movers/2.jpeg",
      "/images/works/the_movers/3.jpeg",
      "/images/works/the_movers/4.jpeg",
      "/images/works/the_movers/5.jpeg",
      "/images/works/the_movers/6.jpeg",
    ],
    type: "영화",
    link: "https://www.youtube.com/watch?v=7c8bFhaFNho",
  },
  {
    title: "말들은 비행하지 않는다",
    year: 2023,
    description: [
      "미국으로 떠나는 백창인의 친구를 위해 작업한 텍스트. 종이비행기 모양으로 종이를 접었을 때 비로소 완성된 시가 드러난다.",
    ],
    images: [
      "/images/works/words_never_fly/1.jpeg",
      "/images/works/words_never_fly/2.jpg",
    ],
    type: "기타",
  },
];

export { WorkItem, worksList };
