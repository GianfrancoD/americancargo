import {
  User,
  Package,
  Globe,
  MessageSquare,
  Send,
  BookOpen,
  Pen,
  ThumbsUp,
} from "lucide-react";
import React, { useState } from "react";
import { axiosServiceComplaint } from "./services/axiosComplaint";
import axios from "axios";

interface ClaimFormData {
  onSubmit: (data: {
    claimTitle: string;
    name: string;
    trackingNumber: string;
    nationality: string;
    complaint: string;
  }) => void;
}

export const ComplaintsContacts: React.FC<ClaimFormData> = ({ onSubmit }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const claimData = {
      claimTitle: formData.get("claimTitle") as string,
      name: formData.get("name") as string,
      trackingNumber: formData.get("trackingNumber") as string,
      nationality: formData.get("nationality") as string,
      complaint: formData.get("complaint") as string,
    };

    try {
      const result = await axiosServiceComplaint(claimData);
      setSuccessMessage(result.message);
      setErrorMessage(result.error);
      onSubmit(claimData);
    } catch (error) {
      axios.isAxiosError(error) && setErrorMessage(error.message);
      setSuccessMessage(null);
    }

    console.log(claimData);
  };

  return (
    <div className="bg-white rounded-2xl p-10 max-w-3xl mx-auto ">
      <h2 className="relative text-3xl max-[320px]:text-2xl font-extrabold text-blue-800 mb-8 text-center">
        <BookOpen className="relative text-blue-700 top-9 left-20 size-10 max-[425px]:hidden max-[768px]:left-10" />
        Formulario de Reclamaciones
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="claimTitle"
            className=" text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1"
          >
            <Pen />
            Título de la Reclamación:
          </label>
          <input
            type="text"
            id="claimTitle"
            name="claimTitle"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ej: Retraso en la entrega"
            required
          />
        </div>
        <div className="max-[425px]:col-span-2 -space-x-0.5">
          <label
            htmlFor="name"
            className=" text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1"
          >
            <User className="text-xl text-blue-500" />
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ingrese su nombre"
            required
          />
        </div>
        <div className="max-[425px]:col-span-2">
          <label
            htmlFor="trackingNumber"
            className=" text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1"
          >
            <Package className="text-xl text-blue-500" />
            Número de Guía:
          </label>
          <input
            type="number"
            id="trackingNumber"
            name="trackingNumber"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ej: 1Z123ABC456DEF789"
            required
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="nationality"
            className="text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1"
          >
            <Globe className="text-xl text-blue-500" />
            Nacionalidad:
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ingrese su nacionalidad"
            required
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="complaint"
            className=" text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1"
          >
            <MessageSquare className="text-xl text-blue-500" />
            Descripción de la Queja:
          </label>
          <textarea
            id="complaint"
            name="complaint"
            rows={5}
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-blue-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Describa su queja detalladamente"
            required
          />
        </div>
        {successMessage && (
          <div className=" text-blue-500/90 py-3 text-2xl col-span-2  text-center rounded w-full font-black relative -top-5">
            <ThumbsUp className="inline-block w-10 h-10 absolute mx-[10rem] top-12" />
            {successMessage}
          </div>
        )}
        {!errorMessage && <div className="text-red-600">{errorMessage}</div>}
        <div className="flex items-center justify-center col-span-2">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center gap-2"
            type="submit"
          >
            <Send className="text-xl" />
            Enviar Reclamación
          </button>
        </div>
      </form>
    </div>
  );
};
