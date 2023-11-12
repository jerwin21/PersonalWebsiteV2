import ContactForm from "@components/ContactForm";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-700">
      {/* Overlay div with green border for testing */}
      <div className="w-[98%] sm:w-[75%] p-4">
        {/* Modal content */}
        <div className="bg-yellow-300 p-8 rounded-lg">
          <div>
            <ContactForm />
          </div>
          <button className="hover:underline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
