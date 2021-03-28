import { Method, ResponseType } from 'axios';

export interface HeaderObj {
  Authorization?: string;
  RFTOKEN?: string;
}

export interface APIConfigType {
  route: string;
  method: Method;
  body?: object;
  query?: object;
  header?: HeaderObj;
  isSecureRoute: boolean;
  dontRefresh?: boolean;
  responseType?: ResponseType;
  returnCleanResponse?: boolean;
}

export interface UploadAPIConfigType extends APIConfigType {
  fileDataURL: string | null | undefined;
  fileFieldName: string;
}
