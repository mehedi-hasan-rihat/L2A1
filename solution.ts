function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  throw new Error("Invalid type");
}




function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Invalid type");
}




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}




type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}




type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const subtotal = product.price * product.quantity;
    const discountAmount = product.discount ? subtotal * (product.discount / 100) : 0;
    return total + (subtotal - discountAmount);
  }, 0);
}
