export type UserRole = "child" | "parent";

export interface User {
  id: string;
  email: string;
  role: UserRole;
}
