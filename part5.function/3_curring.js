/**
 * 커링(curring)
 *
 * 여러개의 인자를 가지는 함수를 단일 인자로 갖는 함수들의 계층구조로 바꾸는 것.
 * 쉽게 말해, 단일 인자를 받는 함수들을 연결시킨 것. -> 많아지면 메모리 문제가 발생할 수 있으므로 장/단점을 고려!
 * 계속해서 함수가 연결되어진다면 콜백 지옥과 같은 경험도 할 수 있다.
 * 클로저에 대한 개념이해가 필수적으로 필요.
 * 값은 함수가 필요로 하는 인자의 갯수만큼 충족되지 않았다면 계속 함수를 반환.
 * 만약, 함수가 필요로 하는 인자의 갯수를 모두 충족시켰다면 최종적인 값을 반환.
 */

//기존함수 -> 인자를 2개 받아서 더하는 함수
function exist0(x, y) {
    return x + y;
}

console.log(exist0(3, 4));
console.log("--------------------------------------------");

//커링함수 -> 단일 인자만 받아서 처리.
function cur0(x) {
    return function (y) {
        return x + y;
    };
}

const exist01 = cur0(3);
console.log(exist01(4)); //7
console.log(cur0(3)(4)); //7
console.log("--------------------------------------------");
console.clear();

/**
 * ES6 arrow function
 */

//기존함수
function sum1(x, y, z) {
    return x + y + z;
}

console.log(sum1(3, 4, 5));
console.log("--------------------------------------------");

//커링함수
function sum(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

const sum2 = sum(3);
const sum3 = sum2(4);
console.log(sum3(5));
console.log(sum(3)(4)(5));
console.log("--------------------------------------------");
console.clear();

//arrow function
const sumArrowFunc = (x) => (y) => (z) => x + y + z;

const sumArrowFunc2 = sumArrowFunc(111);
const sumArrowFunc3 = sumArrowFunc2(222);
console.log(sumArrowFunc3(333));
console.log(sumArrowFunc(111)(222)(333));
console.clear();

/**
 * 문자열
 *
 * 동물에게 먹이를 주는 feed()함수가 있다.
 * feed()함수는 인자를 2개 받는데 첫번째 인자는 동물의 이름, 두번째 인자는 먹이 종류를 받는다.
 * 출력 -> 바둑이에게 생선 먹이를 주고 있다.
 * 이를 커링함수로 바꾸기
 */

//기존함수
const feed0 = function (name, feed) {
    return `${name}에게 ${feed} 먹이를 주고 있다.`;
};

console.log(feed0("바둑이", "생선"));
console.log("--------------------------------------------");

//커링함수
const curriedFeed0 = function (name) {
    return function (feed) {
        return `${name}에게 ${feed} 먹이를 주고 있다.`; //함수형 프로그래밍에서는 웬만하면 return으로 처리해주는게 좋다.
    };
};

const curriedFeed02 = curriedFeed0("진돗개");
console.log(curriedFeed02("생선"));
console.log(curriedFeed02("미역국"));
console.log(curriedFeed02("닭고기")); //특정 부분만 다르게 출력 가능, 커링함수의 가장 큰 장점중 하나.
console.log("--------------------------------------------");

//arrow fucntion
const curriedFeedArrow0 = (name) => (feed) => {
    return `${name}에게 ${feed} 먹이를 주고 있다.`;
};

const curriedFeedArrow02 = curriedFeedArrow0("야옹이");
console.log(curriedFeedArrow02("소고기"));
console.log("--------------------------------------------");
console.clear();

/**
 * 커링 파라미터 순서 바꾸기
 */

//ex)
const curriedFeed = function (name) {
    return function (separator) {
        return function (stress) {
            return function (feed) {
                //반환값에 인자값을 순서에 상관없이 할단 가능하다.
                return name + separator + feed + stress;
            };
        };
    };
};

//강조하거나 변경할 부분만 변경해서 사용하도록 할 수 있다. 커링의 장점중 하나.
const curriedFeed2 = curriedFeed("바둑이")(" --> ")("먹이를 줬다.");
console.log(curriedFeed2("생선"));
console.log(curriedFeed2("돼지고기"));
console.log("--------------------------------------------");

/**
 *  부분 적용 함수
 *
 * 커링 함수의 가장 큰 장점중 하나 -> 인자를 부분 적용한 함수를 쉽게 만들어 낼 수 있다.
 * 커링 함수에서는 인자의 수를 내가 마음대로 조절. -> 매개변수를 나타내는 함수의 집합을 쉽게 만든다.
 */

const curriedFeddPart = curriedFeed("야옹이")(", ");
console.log(curriedFeddPart(" 먹었어?")("생선"));
console.log(curriedFeddPart(" 먹었어?")("소고기"));
console.log(curriedFeddPart(" 먹었습니다.")("생선"));
