import { po } from "gettext-parser";

export interface Comments {
  reference?: string;
  flag?: string;
  extracted?: string;
  previous?: string;
  translator?: string;
}

export type Message = {
  msgid: string;
  msgid_plural?: string;
  comments?: Comments;
  msgstr: string[];
  msgctxt?: string;
};

export type Messages = {
  [key: string]: Message;
};

export type Translations = {
  [key: string]: Messages;
};

export type Headers = {
  "content-type"?: string;
  "plural-forms"?: string;
  "language"?: string;
};

export type PoData = {
  headers: Headers;
  translations: Translations;
  charset?: string;
};

export function parse(str: string): PoData {
  return po.parse(str);
}
