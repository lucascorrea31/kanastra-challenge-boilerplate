import { ReactNode } from "react";
import { Statement } from "./statement";

enum FileActionType {}

type ReducerAction<T, P> = {
  type: T;
  payload?: Partial<P>;
};

type FileContextState = {
  isLoading: boolean;
  file: File | null;
  fileList: Statement[];
};

type FileAction = ReducerAction<
  FileActionType,
  Partial<FileContextState>
>;

type FileDispatch = ({ type, payload }: FileAction) => void;

type FileContextType = {
  state: FileContextState;
  dispatch: FileDispatch;
};

type FileProviderProps = { children: ReactNode };

export type {
  FileActionType,
  FileContextState,
  FileAction,
  FileDispatch,
  FileContextType,
  FileProviderProps,
}
