///////////////////////////////////////////////
// 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다:

// 인터페이스 작성
interface IUser {
  id: number;
  name: string;
  email?: string;
}
// 타입 작성
type TUser = { id: number; name: string; email?: string };

const user: IUser = {
  id: 1,
  name: "Alice",
};

const userWithEmail: IUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

///////////////////////////////////////////////
// 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요.

// User 타입을 작성하세요.
type TUser = {
  id: number;
  name: string;
  address: { city: string; zipCode: number };
};

// User 타입을 사용하여 아래 객체를 작성하세요.
const user: TUser = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

///////////////////////////////////////////////
// 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.

// User 인터페이스 작성
interface IUser {
  id: number;
  name: string;
  email?: string;
}
// Admin 인터페이스 작성 (User 확장)
interface IAdmin extends IUser {
  role: string;
}

const normalUser: IUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: IAdmin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

///////////////////////////////////////////////
// 문제 4. 아래 조건에 따라 type을 확장하세요.

// Product 타입 작성
type TProduct = { id: number; name: string; price: number };

// DiscountedProduct 타입 작성 (Product 확장)
type TDiscountedProduct = TProduct & { discount: number };

const normalProduct: TProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: TDiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

///////////////////////////////////////////////
// 문제 5.아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.

// Product 타입 작성
// 여기에 작성
type TProduct = { id: number; name: string; price: number };
// Order 타입 작성
// 여기에 작성
type TOrder = { orderId: number; products: TProduct[]; totalPrice: number };

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: TOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

///////////////////////////////////////////////
// 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.

// BaseUser 인터페이스 작성
// 여기에 작성
interface IBaseUser {
  id: number;
  name: string;
}
// AdminUser 타입 작성
// 여기에 작성
type TAdminUser = IBaseUser & { role: string };
// GuestUser 타입 작성
// 여기에 작성
type TGuestUser = IBaseUser & { visitCount: number };

// 아래 객체를 작성하세요.
const admin: TAdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: TGuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};
