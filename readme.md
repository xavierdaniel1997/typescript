# TypeScript Learning Roadmap

A structured guide to mastering TypeScript, starting from basics to advanced concepts.

## 1. Basics of TypeScript
- [🚀] **Introduction to TypeScript**
  - [✅] What is TypeScript?
  - [✅] Benefits of TypeScript over JavaScript.

- [🚀] **Basic Types**
  - [✅] `string`, `number`, `boolean`, `array`, `object`, `tuple`.
  - [✅] Read-only properties and `const`.
 
- [🚀] **Implicit Types (Type Inference)**
  - [✅] Automatic type assignment.

- [🚀] **Explicit Types**
  - [✅] Manually defining types for variables and functions.

- [🚀] **Functions**
  - [✅] Syntax and type annotations for parameters and return values.
  - [✅] Default parameters and rest parameters.

- [🚀] **Enums**
  - [✅] Why and how to use enums.
  - [✅ ] Advantages of enums.

- [🚀] **Union and Intersection Types**
  - [✅] Combining multiple types using `|` (union) and `&` (intersection).
  - [✅] Example: Handling multiple types in a variable or function.

- [🚀] **Type Assertions vs Type Casting**
  - [✅] Using `as` or angle brackets `<Type>` to assert types.

---

## 2. Intermediate Concepts
- [🚀] **Interfaces**
  - [✅] Defining structures for objects.
  - [✅] Extending interfaces.
  - [✅] When to use interfaces over types.
  
- [🚀] **Types (`type`)**
  - [✅] Defining custom types and aliases.
  - [✅] Differences between `type` and `interface`.

- [🚀] **Key Utility Types**
  - [✅] `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`.

- [🚀] **Optional Operator (`?`)**
  - [✅] Defining optional properties in objects and functions.

- [🚀] **Optional Chaining (`?.`)**
  - [✅] Safely accessing nested properties.

- [🚀] **Tuples**
  - [✅] Fixed-length arrays with specific types.

- [🚀] **Type Guards**
  - [✅] Narrowing down types using `typeof`, `instanceof`, and custom checks.

- [🚀] **`keyof`**
  - [✅] Using `keyof` for accessing object keys.

- [🚀] **Generic Keyword and Functions**
  - [✅] Creating reusable, type-safe functions and classes.
  - [✅] Applications of generics.

- [🚀] **Mapped Types**
  - [✅] Transforming types (`{ [K in keyof T]: Type }`).

- [🚀] **`as const`**
  - [✅] Creating immutable data structures.

- [ ] **Decorators**
  - [ ] What are decorators?
  - [ ] Types of decorators (class, method, property, parameter).
  - [ ] Use cases and examples.

---

## 3. Advanced Concepts
- [ ] **Advanced Object-Oriented Programming in TypeScript**
  - [ ] Classes, objects, and inheritance.
  - [ ] `super()` to call the parent class constructor.
  - [ ] Static properties and methods.
  - [ ] Encapsulation (getters and setters).
- [ ] **Abstract Classes**
  - [ ] Difference between abstract classes and interfaces.
  - [ ] Why abstract classes can't be instantiated.
  - [ ] When to use abstract classes.
- [ ] **Polymorphism**
  - [ ] Implementing polymorphism in TypeScript.
  - [ ] Function overriding.
- [ ] **Function Overloading**
  - [ ] Defining multiple signatures for the same function.
  - [ ] Example: Finding the area of a square and rectangle.
- [ ] **Function Overriding**
  - [ ] Overriding methods in derived classes.
- [ ] **Mixins**
  - [ ] Combining behaviors from multiple classes.
- [ ] **Modules and Namespaces**
  - [ ] Importing and exporting modules.
  - [ ] Types of modules: ES Modules vs CommonJS.
  - [ ] Using `import` and `export`.
- [ ] **Declaration Files (.d.ts)**
  - [ ] Purpose of `.d.ts` files.
  - [ ] Writing custom declaration files for libraries.

---

## 4. Error Handling and Edge Cases
- [ ] **Special Types**
  - [ ] `any`: Flexible but unsafe.
  - [ ] `unknown`: Safer alternative to `any`.
  - [ ] `never`: Representing unreachable code.
  - [ ] `void`: For functions that don't return a value.
- [ ] **Type Narrowing**
  - [ ] Narrowing types dynamically using control flow.
- [ ] **Type Guards**
  - [ ] Advanced type checks with `in`, `instanceof`, and custom functions.
- [ ] **`noImplicitAny`**
  - [ ] Why enable `noImplicitAny` for stricter type checking.
- [ ] **Rest Parameters**
  - [ ] Using `...args` in functions.
- [ ] **Static Classes in TypeScript**
  - [ ] Why TypeScript doesn’t allow fully static classes.
  - [ ] Using namespaces or modules as alternatives.

---

## 5. Advanced TypeScript Concepts
- [ ] **Type Manipulation**
  - [ ] Conditional types (`T extends U ? X : Y`).
  - [ ] Template literal types.
  - [ ] Index signatures.
- [ ] **Application of Generics**
  - [ ] Generic classes, interfaces, and functions.
- [ ] **Type Declarations in JavaScript Libraries**
  - [ ] Augmenting types in existing JavaScript libraries.
  - [ ] Examples: Express, React.
- [ ] **Utility Types**
  - [ ] Deep dive into TypeScript's built-in utility types.

---

## 6. Practice Scenarios
- [ ] **Real-world Use Cases**
  - [ ] Implementing polymorphism with real-world examples.
  - [ ] Creating reusable generic components.
  - [ ] Handling complex APIs with optional chaining and type guards.
- [ ] **Switch-case with Grades**
  - [ ] Example program for assigning grades based on marks.
- [ ] **Combining Topics**
  - [ ] Writing complex types that combine interfaces, generics, and unions.
