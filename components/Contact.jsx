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
    <div className="flex justify-center py-4">
      <a className="cursor-pointer" onClick={openModal}>
        <h1 className="text-4xl sm:text-5xl">
          <span className="highlight-container">
            <span className="highlight"> get in touch</span>{" "}
          </span>
        </h1>
      </a>

      <div>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Contact;
