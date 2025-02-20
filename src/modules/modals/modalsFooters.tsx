import { X } from "lucide-react";
import type React from "react";
// import { Download } from "../dowloadArchive";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

export const TermsModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        // onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-screen-lg mx-4 max-h-[95vh] overflow-y-auto z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-500">{title}</h2>

        {/* <iframe
          // src={fileLink}
          width="100%"
          height="500px"
          className="border border-gray-300 rounded"
          title="Términos y Condiciones"
        ></iframe> */}
        <div className="text-gray-600 space-y-4">{children}</div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center max-[425px]:gap-3">
          {/* <Download filename={fileLink} /> */}
          {/* <button
            onClick={onClose}
            className=" mb-2 sm:mb-0 sm:mr-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-700 transition-colors duration-200"
          >
            Cerrar
          </button> */}
        </div>
      </div>
    </div>
  );
};
