import {urlParam} from "../models/urlParam.type";

export const withParams = (url: string, params: urlParam[]) =>
  params
    .reduce((out, param) =>
      out.replace(`:${param.name}`, param.val),
      url
    );
