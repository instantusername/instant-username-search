export const validateEmail = email => {
  const regexExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexExpr.test(email);
};
