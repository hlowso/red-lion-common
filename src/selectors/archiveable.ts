import { Archiveable } from "../types/archiveable";

export const unarchived = (A: Archiveable[]) => A.filter((a) => !a.archived);
