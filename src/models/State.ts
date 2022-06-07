import { Province } from "./Province";

export interface State {
  name: string;
  provinceName?: string;
  key: string;
  provinces: Province[];
}
