const mapping: Record<string, string> = {
  businesses: 'business',
  data: 'data',
  invitations: 'invitation',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
