import { ReactNode } from "react";
import { Prefecture } from "../types";
import { PrefectureFlagProps } from "./types";
declare const getFlagByCode: (code: Prefecture["code"], props: PrefectureFlagProps) => ReactNode | undefined;
export default getFlagByCode;
