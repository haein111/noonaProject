////////////////////////////////////
// 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요.

// 매개변수, 리턴타입 정의필요

function processInput(
  input: number[] | string[] | { message: string }
): number | string {
  if (Array.isArray(input)) {
    if (typeof input[0] === "number")
      return (input as number[]).reduce((sum, num) => sum + num, 0);
    else if (typeof input[0] === "string") return (input as string[]).join("");
  } else if ("message" in input) {
    return (input as { message: string }).message.toUpperCase();
  }
  throw new Error("에러");
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
console.log(processInput(42)); // 에러 발생

////////////////////////////////////
// 문제2. 다음 조건을 만족하는 코드를 작성하세요.

// 클래스 정의
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}
class Bike {
  type: string;

  constructor(type: string) {
    this.type = type;
  }
}

function processVehicle(vehicle: unknown): string {
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  } else if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`;
  } else {
    throw new Error("에러");
  }
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
console.log(processVehicle("unknown")); // 에러 발생

////////////////////////////////////
// 문제3. in을 활용한 사용자 관리

type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  if (user.type === "admin") {
    return user.permissions.join();
  } else if (user.type === "user") return user.email;
  throw new Error("에러");
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
console.log(processUser({ type: "guest" })); // 에러 발생

////////////////////////////////////
// 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요:

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  return (shape as Rectangle).width !== undefined;
}

function calculateArea(shape: Rectangle | Circle): number {
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  } else {
    return Math.PI * shape.radius ** 2;
  }
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

////////////////////////////////////
// 문제5. 유니온 타입의 문제점과 해결 방법

type Square = { type: "square"; side: number };
type Circle = { type: "circle"; radius: number };

type Shape = Square | Circle;

// 넓이를 계산하는 함수
function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case "square":
      return shape.side ** 2;
    case "circle":
      return shape.radius ** 2 * Math.PI;
    default:
      return exhaustivenessCheck(shape);
    //   const _exhaustivenessCheck: never = shape;
    //   throw new Error("에러");
  }
}

function exhaustivenessCheck(shape: never): never {
  throw new Error("에러");
}

// 테스트 코드
console.log(calculateArea({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
