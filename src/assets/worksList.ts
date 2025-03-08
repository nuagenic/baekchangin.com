type WorkItem = {
  title: string;
  year: number;
  description: string;
  type: string;
  images?: string[];
  link?: string;
};

const worksList: WorkItem[] = [
  {
    title: "flipsandturns",
    year: 2024,
    description:
      "보드게임 '텔레스트레이션'에서 영감을 받아 작업한 프로젝트 웹.",
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
    description:
      "’새로운 질서’ 워크숍에서 HTML과 CSS만을 이용하여 작업한 핸드메이드 웹. 쩜쩜쩜(...)을 다양한 방식으로 조명하고 표현한다.",
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
    description: "",
    type: "웹",
    images: [
      "/images/works/baekchang.in/1.jpeg",
      "/images/works/baekchang.in/2.jpeg",
      "/images/works/baekchang.in/3.jpeg",
      "/images/works/baekchang.in/4.jpeg",
      "/images/works/baekchang.in/5.jpeg",
      "/images/works/baekchang.in/6.jpeg",
    ],
    link: "http://baekchang.in",
  },
  {
    title: "ISCHIVE",
    year: 2024,
    description: "",
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
    description: "",
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
    description: "",
    images: ["/images/works/cloud_dialectics/1.jpeg"],
    type: "텍스트",
  },
  {
    title: "무경계",
    year: 2025,
    description: "",
    images: ["/images/works/no_border/1.jpg", "/images/works/no_border/2.jpg"],
    type: "텍스트",
  },
  {
    title: "THE MOVERS",
    year: 2024,
    description: "",
    images: [
      "/images/works/the_movers/1.jpeg",
      "/images/works/the_movers/2.jpeg",
      "/images/works/the_movers/3.jpeg",
      "/images/works/the_movers/4.jpeg",
      "/images/works/the_movers/5.jpeg",
      "/images/works/the_movers/6.jpeg",
    ],
    type: "영화",
  },
  {
    title: "말들은 비행하지 않는다",
    year: 2023,
    description: "",
    images: [
      "/images/works/words_never_fly/1.jpeg",
      "/images/works/words_never_fly/2.jpg",
    ],
    type: "기타",
  },
];

export { WorkItem, worksList };
