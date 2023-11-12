"use client";
import { useState } from "react";
import ContactModal from "@components/ContactModal";

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="flex justify-center">
      <h1 className="text-4xl" onClick={openModal}>
        <span className="highlight-container">
          <span className="highlight"> contact me</span>{" "}
        </span>
      </h1>
      <div>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Contact;
