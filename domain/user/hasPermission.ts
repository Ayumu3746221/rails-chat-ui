import { UserRole } from "@/types/user/UserRole";

export const hasPermission = (
  userRole: UserRole,
  requiredRole: UserRole
): boolean => {
  const roleHierarchy: UserRole[] = ["child", "parent"];
  return roleHierarchy.indexOf(userRole) >= roleHierarchy.indexOf(requiredRole);
};
