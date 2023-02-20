import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  Header,
  Board,
  Nav,
  WritePostBtn,
  PetRegisterModal,
} from "../components";
import { userSelector } from "../store";
import { useEffect } from "react";

export function HomePage() {
  const user = useRecoilValue(userSelector);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(user.first);
  }, [user]);

  return (
    <>
      <Header />
      <Board />
      <WritePostBtn />
      <Nav />
      {isOpen && <PetRegisterModal {...{ isOpen, setIsOpen }} />}
    </>
  );
}

export default HomePage;
