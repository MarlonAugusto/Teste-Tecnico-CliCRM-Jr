import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useState } from "react";

type FormTransacao = {
  id: string;
  nomePaciente: string;
  operacaoFeita: string;
  valor: number;
  formaPagamento: string;
};

interface UpdateTransacaoProps {
  isOpen: boolean;
  onClose: () => void;
  transacao: FormTransacao;
}

const schemaConta: ZodType<FormTransacao> = z.object({
  id: z.string(),
  nomePaciente: z.string().min(4).max(50),
  operacaoFeita: z.string().min(3).max(50),
  valor: z.number().min(1),
  formaPagamento: z.string().min(3).max(50),
});

export default function UpdateTransacao({
  isOpen,
  transacao,
  onClose,
}: UpdateTransacaoProps) {
  const { register, handleSubmit, formState } = useForm<FormTransacao>({
    resolver: zodResolver(schemaConta),
    defaultValues: transacao,
  });

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000
    );
    }
  };

  const onSubmit = async (conta: FormTransacao) => {
    try {
      const transacaoDocRef = doc(db, "contas", transacao.id);
      await updateDoc(transacaoDocRef, conta);
      togglePopup();
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar transação:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Atualizar Transação</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="nomePaciente"
              className="block text-sm font-medium mb-2"
            >
              Nome do Paciente
            </label>
            <input
              type="text"
              id="nomePaciente"
              {...register("nomePaciente")}
              className={` g-gray-50 border border-gray-300 text-gray-900 rounded-lg w-80 p-2 text-sm input ${
                formState.errors.nomePaciente ? "border-red-500" : ""
              }`}
            />
            {formState.errors.nomePaciente && (
              <span className="text-red-500 text-xs">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="operacaoFeita"
              className="block text-sm font-medium mb-2"
            >
              Operação realizada
            </label>
            <input
              type="text"
              id="operacaoFeita"
              {...register("operacaoFeita")}
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-80 p-2 text-sm input ${
                formState.errors.operacaoFeita ? "border-red-500" : ""
              }`}
            />
            {formState.errors.operacaoFeita && (
              <span className="text-red-500 text-xs">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="valor" className="block text-sm font-medium mb-2">
              Valor
            </label>
            <input
              type="number"
              id="valor"
              {...register("valor", { valueAsNumber: true })}
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-80 p-2 text-sm input ${
                formState.errors.valor ? "border-red-500" : ""
              }`}
            />
            {formState.errors.valor && (
              <span className="text-red-500 text-xs">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="formaPagamento"
              className="block text-sm font-medium mb-2"
            >
              Forma de Pagamento
            </label>
            <select
              id="formaPagamento"
              {...register("formaPagamento")}
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-80 p-2 text-sm input ${
                formState.errors.formaPagamento ? "border-red-500" : ""
              }`}
            >
              <option value="Transferencia">Transferência</option>
              <option value="Boleto">Boleto</option>
              <option value="Pix">Pix</option>
            </select>
            {formState.errors.formaPagamento && (
              <span className="text-red-500 text-xs">Campo obrigatório</span>
            )}
          </div>



          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Cancelar
            </button>
            <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Confirmar
            </button>
          </div>
        </form>
        {showPopup && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed bottom-5 right-5 z-50">
            Registro atualizado com sucesso!
          </div>
        )}
      </div>
    </div>
  );
}
