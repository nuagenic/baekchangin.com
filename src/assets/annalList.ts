type AnnalItem = {
  text: string;
  clickableWords?: { word: string; image?: string; link?: string }[];
};

type AnnalSection = {
  year: string;
  sentences: AnnalItem[];
};

export type AnnalList = AnnalSection[];

export const annalList = [
  {
    year: "1999",
    sentences: [
      {
        text: "백창인의 아버지가 백두산 호랑이가 나오는 태몽을 꾼다. 그것은 앞으로 다가올 희비극에 대한 일종의 예고.",
      },
      {
        text: "7월 30일 출생. 토끼띠.",
        clickableWords: [
          {
            word: "7월 30일",
            link: "https://ko.wikipedia.org/wiki/7%EC%9B%94_30%EC%9D%BC",
          },
          { word: "토끼", image: "/images/1999_01.png" },
        ],
      },
    ],
  },
  {
    year: "2006",
    sentences: [
      {
        text: "스티븐 스필버그의 위인전을 읽고 영화감독이 되기로 결심한다.",
        clickableWords: [
          {
            word: "스티븐 스필버그",
            link: "https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%8B%B0%EB%B8%90_%EC%8A%A4%ED%95%84%EB%B2%84%EA%B7%B8",
          },
        ],
      },
    ],
  },
  {
    year: "2007",
    sentences: [
      {
        text: "막내 동생이 아직 어머니 뱃속에 있을 때 산부인과에서 첫 소설 「비밀의 계단」을 쓴다.",
      },
    ],
  },
  {
    year: "2011",
    sentences: [
      {
        text: "시쓰기 수업에서 고심 끝에 2연짜리 시 「검정색」을 쓰고 선생님에게 보기 좋게 혼난다.",
      },
      {
        text: "국제중학교 진학을 위해 어머니에게 영화감독 대신 더 그럴듯한 진로 결정을 요구받는다. 한 시간 동안 웹서핑 후 작곡가가 되겠다고 말하고 한숨을 듣는다.",
        clickableWords: [
          {
            word: "서핑",
            image: "/images/2011_01.png",
          },
        ],
      },
    ],
  },
  {
    year: "2013",
    sentences: [
      {
        text: "기타를 배워 당시의 연인에게 커플송을 만들어 불러 준다.",
      },
      {
        text: "이제언과 음악 친구가 된다.",
        clickableWords: [
          {
            word: "이제언",
            link: "https://www.leo-je-eon-lee.com/",
          },
        ],
      },
      {
        text: "작곡가가 되고 싶은 마음을 더 말해보다가, 어머니에게 “너는 악동뮤지션이 아니야”라는 말을 듣는다. 백창인은 악동뮤지션이 아니다.",
        clickableWords: [
          {
            word: "백창인은 악동뮤지션이 아니다",
            link: "https://www.youtube.com/watch?v=EtiPbWzUY9o",
          },
        ],
      },
    ],
  },
  {
    year: "2014",
    sentences: [
      {
        text: "『이방인』을 읽고 (마침내) 법과 도덕에 물음표를 붙이기 시작한다.",
        clickableWords: [
          {
            word: "이방인",
            link: "https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%B0%A9%EC%9D%B8_(%EC%86%8C%EC%84%A4)",
          },
        ],
      },
    ],
  },
  {
    year: "2016",
    sentences: [
      {
        text: "남몰래 블로그에 수필을 쓰기 시작한다. 쓰고 나니 부끄러워 몇 차례 모든 글을 지웠다 썼다 한다.",
      },
      {
        text: "『농담』을 읽고 가벼움이 슬며시 몸에 깃든다.",
        clickableWords: [
          {
            word: "농담",
            link: "https://ko.wikipedia.org/wiki/%EB%86%8D%EB%8B%B4_(%EC%86%8C%EC%84%A4)",
          },
        ],
      },
      {
        text: "백창인과 같은 해 태어난 「매그놀리아」를 보고 영화와 개구리를 사랑하게 된다.",
        clickableWords: [
          {
            word: "매그놀리아",
            link: "https://www.youtube.com/watch?v=KnamcFv_N9Q",
          },
          {
            word: "개구리",
            image: "/images/2016_01.png",
          },
        ],
      },
    ],
  },
  {
    year: "2017",
    sentences: [
      {
        text: "브런치로 글쓰기 터전을 옮긴다. 지금도 여기에서 지금 여기를 쓴다.",
        clickableWords: [
          {
            word: "브런치",
            link: "https://brunch.co.kr/@bbaekcloud",
          },
          {
            word: "지금 여기",
            link: "https://brunch.co.kr/magazine/nowandhere",
          },
        ],
      },
      {
        text: "수필 오십여 편을 모아 수필집 『지금 여기』를 낸다.",
        clickableWords: [
          {
            word: "지금 여기",
            link: "https://www.aladin.co.kr/m/mproduct.aspx?ItemId=121501369",
          },
        ],
      },
      {
        text: "하버마스-식 공론장을 만들겠다는 야심으로 시사 PD를 꿈꾼다.",
        clickableWords: [
          {
            word: "하버마스",
            link: "https://ko.wikipedia.org/wiki/%EC%9C%84%EB%A5%B4%EA%B2%90_%ED%95%98%EB%B2%84%EB%A7%88%EC%8A%A4",
          },
        ],
      },
      {
        text: "뜻이 맞는 친구들과 매 점심마다 상담실에서 카탄을 플레이한다.",
        clickableWords: [
          {
            word: "카탄",
            image: "/images/2017_01.png",
          },
        ],
      },
    ],
  },
  {
    year: "2018",
    sentences: [
      {
        text: "서울대학교 언론정보학과 입학.",
        clickableWords: [
          {
            word: "서울",
            image: "/images/2018_01.png",
          },
        ],
      },
      {
        text: "1학기 종강파티 후 밤새 서울대입구역에서 강남역까지 걸으며 느닷없이 김승옥을 떠올린다.",
        clickableWords: [
          {
            word: "김승옥",
            link: "https://brunch.co.kr/@bbaekcloud/71",
          },
        ],
      },
      {
        text: "청년 비영리단체 통감 입단. 점자가 새겨진 명함과 좋은 친구들을 얻는다.",
        clickableWords: [
          {
            word: "통감",
            link: "https://linktr.ee/tong_gam",
          },
        ],
      },
      {
        text: "정보문화기술입문 수업에서 Processing을 배우며 컴퓨터 언어에 눈길이 가기 시작한다.",
        clickableWords: [
          {
            word: "Processing",
            link: "https://processing.org/",
          },
        ],
      },
    ],
  },
  {
    year: "2019",
    sentences: [
      {
        text: "방탈출 카페에서 시간제 노동을 한다. 트뤼포의 유명한 가짜 격언에 따라 방탈출 문제들을 직접 만들어 본다.",
        clickableWords: [
          {
            word: "트뤼포의 유명한 가짜 격언",
            link: "https://www.newstof.com/news/articleView.html?idxno=10214",
          },
          {
            word: "문제",
            image: "/images/2019_01.png",
          },
        ],
      },
      {
        text: "“우리는 겹칠 수 없고 고작해야 접할 뿐이다”라는 말을 곱씹는다. 접선 모양의 타투를 몸에 새긴다.",
        clickableWords: [
          {
            word: "접선",
            link: "https://www.instagram.com/p/B6U8YY4nyPI/?igsh=MThoeXZ6cGoxbmh1dQ==",
          },
        ],
      },
    ],
  },
  {
    year: "2020",
    sentences: [
      {
        text: "자원하여 제주도로 입대한다. 만장굴 특별탐험대에 선발되었으나 판데믹으로 인해 취소되어 슬퍼한다.",
        clickableWords: [
          {
            word: "제주도",
            image: "/images/2020_01.png",
          },
        ],
      },
    ],
  },
  {
    year: "2021",
    sentences: [
      {
        text: "소설 「대설」을 쓴다.",
      },
      {
        text: "시집 『구름의 변증법』을 낸다. 구름을 마스코트처럼 쓰기 시작한다.",
        clickableWords: [
          {
            word: "구름의 변증법",
            link: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=260553475",
          },
        ],
      },
      {
        text: "생활코딩을 통해 웹 언어와 처음 만난다. 코로나 시대의 군인으로 도전할 수 있는 몇 안 되는 일이었다.",
        clickableWords: [
          {
            word: "생활코딩",
            link: "https://www.opentutorials.org/course/1",
          },
        ],
      },
      {
        text: "어떻게든 영화 관련 일을 해야 행복할 것 같다고 느낀다. 이제는 사라진 네이버 시리즈온에서 인턴으로 일한다.",
      },
    ],
  },
  {
    year: "2022",
    sentences: [
      {
        text: "뜻이 맞는 친구들과 첫 영화 「거짓말 탐지기」를 찍는다. 완성된 영화는 바다 깊은 곳에 묻어버렸다.",
        clickableWords: [
          {
            word: "거짓말 탐지기",
            image: "/images/2022_01.png",
          },
        ],
      },
      {
        text: "거짓말과 사랑에 빠진다. 삶과 구라를 사랑하는 모임의 리더가 된다.",
        clickableWords: [
          {
            word: "삶과 구라를 사랑하는 모임",
            link: "https://www.instagram.com/lovethelife.lovethelies/",
          },
        ],
      },
      {
        text: "에무시네마를 또 하나의 터전으로 삼는다.",
        clickableWords: [
          {
            word: "에무시네마",
            link: "http://www.emuartspace.com/bbs/m/main.php?type=main&ep=ep205032292582d223ceaa81&gp=all",
          },
        ],
      },
    ],
  },
  {
    year: "2023",
    sentences: [
      {
        text: "ChatGPT와 좋은 친구가 된다. 이 친구와 함께라면 무엇이든 해볼 수 있겠다고 느낀다.",
        clickableWords: [
          {
            word: "ChatGPT",
            link: "https://chatgpt.com/",
          },
        ],
      },
      {
        text: "두 번째 영화 「THE MOVERS」를 찍는다. 이번에는 바다 깊은 곳에 묻지 않았다.",
        clickableWords: [
          {
            word: "THE MOVERS",
            link: "https://www.youtube.com/watch?v=7c8bFhaFNho",
          },
        ],
      },
      {
        text: "미국으로 떠나는 이제언을 위해 ‘말들은 비행하지 않는다’를 쓴다. 시 모양의 종이비행기이자 종이비행기 모양의 시.",
        clickableWords: [
          {
            word: "말들은 비행하지 않는다",
            image: "/images/2023_01.jpg",
          },
        ],
      },
      {
        text: "꼬맨틀의 열렬한 팬이 된다. 언어를 갖고 놀고 싶다는 생각을 처음으로 한다.",
        clickableWords: [
          {
            word: "꼬맨틀",
            link: "https://semantle-ko.newsjel.ly/",
          },
        ],
      },
    ],
  },
  {
    year: "2024",
    sentences: [
      {
        text: "거짓말보다 말 자체에 관심이 더 생긴다. 말을 안전한 공간으로 느낀다.",
        clickableWords: [
          {
            word: "말 자체",
            image: "/images/2024_01.png",
          },
        ],
      },
      {
        text: "connections의 열렬한 팬이 된다. 16과 단어의 힘을 믿는다.",
        clickableWords: [
          {
            word: "connections",
            link: "https://www.nytimes.com/games/connections",
          },
        ],
      },
      {
        text: "이제언과 flipsandturns에서 끊임없는 대화를 한다. 수행적 글쓰기 공간으로 웹을 바라본다.",
        clickableWords: [
          {
            word: "flipsandturns",
            link: "https://flipsandturns.xyz/",
          },
        ],
      },
      {
        text: "민구홍 매뉴팩처링에서 인턴으로 일한다. 우선은 새로운 질서를 몸으로 익혀 본다.",
        clickableWords: [
          {
            word: "민구홍 매뉴팩처링",
            link: "https://minguhongmfg.com/about",
          },
          {
            word: "새로운 질서",
            link: "https://neworder.xyz/",
          },
        ],
      },
      {
        text: "지금의 연인을 위해 이따금 말과 몸짓이 되기를 기다리는 독백을 쓴다.",
      },
    ],
  },
];
