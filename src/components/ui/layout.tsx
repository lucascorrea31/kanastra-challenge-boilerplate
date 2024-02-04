import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Modal, useModal } from "./modal";

function Layout(): ReactElement {
  const { isOpen } = useModal();

  return (
    <>
      <main className="p-6 flex flex-col gap-8">
        <Outlet />
        {isOpen && <Modal />}
      </main>
    </>
  );
}

export { Layout };
