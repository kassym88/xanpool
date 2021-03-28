export const withParams = (url: string, params: any) =>
  Object.keys(params)
    .reduce((out, key) =>
      out.replace(`:${key}`, params[key]),
      url
    );
