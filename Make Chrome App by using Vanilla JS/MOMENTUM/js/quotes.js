const quotes = [
    {
        quote: "겁쟁이는 죽음에 앞서 몇 번이고 죽지만 용감한 사람은 한 번밖에 죽음을 맛보지 않는다.",
        author: ""
    },
    {
        quote: "죽은자를 위해 울지 말라. 그는 휴식을 취하고 있기 때문이다.",
        author: "레오나르도 다 빈치"
    },
    {
        quote: "궁극의 자유는 죽음밖에 없다.",
        author: "도올 김용옥"

    },
    {
        quote: "나는 죽는다.",
        author: "레온하르트 오일러"
    },
    {
        quote: "무덤에 들어갈 때까지는 인간은 행복하다고 할 수 없다.",
        author: "오비디우스"
    },
    {
        quote: "사느냐, 죽느냐 그것이 문제로다.",
        author: "윌리엄 셰익스피어"
    },
    {
        quote: "사람은 어떻게 죽느냐가 문제가 아니라 어떻게 사느냐가 문제다.",
        author: "S.존슨"
    },
    {
        quote: "죽음의 공포는 죽음 그 자체보다 성가시다.",
        author: "라틴 속담"
    },
    {
        quote: "죽음은 늙어서 갚아야 할 오랜 빚과도 같다.",
        author: "알베르트 아인슈타인"
    },
    {
        quote: "항상 죽을 각오를 하고 있는 사람만이 참으로 자유로운 인간이다.",
        author: "디오게네스"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;