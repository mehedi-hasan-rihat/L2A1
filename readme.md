
##  ইন্টারফেস এবং টাইপের মধ্যে পার্থক্য

টাইপস্ক্রিপ্টে `interface` এবং `type` উভয়ই অবজেক্টের আকৃতি (shape) সংজ্ঞায়িত করতে ব্যবহৃত হয়, যেমন প্রপার্টি বা মেথড। এগুলো কোডকে টাইপ-সেফ করে। কিন্তু এদের মধ্যে কিছু সহজ পার্থক্য আছে:

- **এক্সটেন্ডিং**: `interface` কে একাধিক অন্যান্য `interface` দিয়ে এক্সটেন্ড করা যায় (যেমন `extends A, B`), এবং একই নামের একাধিক ইন্টারফেস মার্জ করা যায়। `type` এর জন্য ইন্টারসেকশন (`&`) ব্যবহার করতে হয়, কিন্তু মার্জিং সমর্থন করে না।
  
- **ইউনিয়ন এবং ইন্টারসেকশন**: `interface` শুধু অবজেক্টের জন্য ভালো, ইউনিয়ন (`|`) বা ইন্টারসেকশন (`&`) সরাসরি চলে না। `type` যেকোনো টাইপ (প্রিমিটিভ, ইউনিয়ন) সংজ্ঞায়িত করতে পারে, যেমন `type ID = string | number;`।
  

  
- **প্রিমিটিভ টাইপস**: `interface` শুধু অবজেক্টের জন্য, প্রিমিটিভ (string, number) সরাসরি করা যায় না। `type` সবকিছু করতে পারে।
  
- **ব্যবহার**: `interface` ক্লাস ইমপ্লিমেন্ট করার জন্য ভালো, লাইব্রেরিতে। `type` জটিল কম্পোজিশনের জন্য।

### উদাহরণ:
```typescript
// Interface
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

// Type
type User = {
  id: number;
};

type Admin = User & {
  role: 'admin';
};
```



##  `any`, `unknown` এবং `never` টাইপসমূহের মধ্যে পার্থক্য

টাইপস্ক্রিপ্টে এই টাইপগুলো টাইপ সেফটির জন্য গুরুত্বপূর্ণ। এগুলোর সহজ ব্যাখ্যা:

- **`any`**: যেকোনো টাইপ হতে পারে, টাইপ চেকিং বন্ধ করে।
  
- **`unknown`**: যেকোনো টাইপ হতে পারে, কিন্তু ব্যবহারের আগে চেক (type guard) করতে হয়। API রেসপন্সের মতো ডাইনামিক ডেটার জন্য নিরাপদ। সরাসরি অ্যাক্সেস করা যায় না।
  
- **`never`**: কোনো মানই নেই, ফাংশন যা কখনো রিটার্ন করে না (throw error) বা সব কেস চেক করতে ব্যবহার।

### উদাহরণ:
```typescript
// any
let value: any = "hello";
value = 42;
console.log(value.toUpperCase());

// unknown
let unknownValue: unknown = "hello";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// never
function fail(message: string): never {
  throw new Error(message);
}
