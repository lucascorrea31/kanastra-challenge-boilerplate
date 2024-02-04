import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

type ModalStateType = {
  isOpen: boolean;
};

type Action = { type: "open" } | { type: "close" };
type Dispatch = (action: Action) => void;

type ModalContextType = {
  state: ModalStateType;
  dispatch: Dispatch;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const modalReducer = (state: ModalStateType, action: Action) => {
  switch (action.type) {
    case "open": {
      return { isOpen: true };
    }
    case "close": {
      return { isOpen: false };
    }
  }
};

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false });

  const value = { state, dispatch };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a ModalProvider");
  }

  const openModal = () => context.dispatch({ type: "open" });
  const closeModal = () => context.dispatch({ type: "close" });

  return { isOpen: context.state.isOpen, openModal, closeModal };
};

export const Modal = () => {
  return <div>modal</div>;
};
