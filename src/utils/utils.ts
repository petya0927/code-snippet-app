export const JSONtoArray = (json: any) => {
  return Object.keys(json).map((key) => json[key]);
};
