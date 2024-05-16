import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useState } from "react";

type FormTransacao = {
  nomePaciente: string;
  operacaoFeita: string;
  valor: number;
  formaPagamento: string;
  dataEmissao: Date | Timestamp;
};

const schemaConta: ZodType<FormTransacao> = z.object({
  nomePaciente: z.string().min(4).max(50),
  operacaoFeita: z.string().min(3).max(50),
  valor: z.number().min(1),
  formaPagamento: z.string().min(3).max(50),
  dataEmissao: z.date(),
});

export default function CreateTransacao() {
  const { register, handleSubmit, reset, formState } = useForm<FormTransacao>({
    resolver: zodResolver(schemaConta),
  });

  const createTransacao = async (data: FormTransacao) => {
    try {
      const contasCollectionRef = collection(db, "/contas");
      await addDoc(contasCollectionRef, data);
      togglePopup();
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(createTransacao)}
        className="w-screen flex pb-5"
      >
        <div className="justify-center  top-0 m-auto">
          <div className="font-medium text-center text-gray-900 pt-7 text-3xl">
            <span>Formulário</span>
          </div>

          <div className="mb-2 font-medium text-gray-900 pt-5 flex flex-col">
            <label htmlFor="nomePaciente">Nome do Paciente</label>
            <input
              type="text"
              id="nomePaciente"
              {...register("nomePaciente")}
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-96 p-2 text-sm ${
                formState.errors.nomePaciente ? "border-red-500" : ""
              }`}
            />
            {formState.errors.nomePaciente && (
              <span className="text-red-500 text-sm">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-2 font-medium text-gray-700 pt-3 flex flex-col">
            <label htmlFor="operacaoFeita">Operação realizada</label>
            <input
              type="text"
              id="operacaoFeita"
              {...register("operacaoFeita")}
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-96 p-2 text-sm ${
                formState.errors.operacaoFeita ? "border-red-500" : ""
              }`}
            />
            {formState.errors.operacaoFeita && (
              <span className="text-red-500 text-sm">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-2 font-medium text-gray-700 pt-3 flex flex-col">
            <label htmlFor="valor">Valor</label>
            <input
              type="number"
              {...register("valor", { valueAsNumber: true })}
              id="valor"
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-96 p-2 text-sm ${
                formState.errors.valor ? "border-red-500" : ""
              }`}
            />
            {formState.errors.valor && (
              <span className="text-red-500 text-sm">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-2 font-medium text-gray-700 pt-3 flex flex-col">
            <label htmlFor="formaPagamento">Forma de Pagamento</label>
            <select
              {...register("formaPagamento")}
              id="formaPagamento"
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-96 p-2 text-sm ${
                formState.errors.formaPagamento ? "border-red-500" : ""
              }`}
            >
              <option value="Transferencia">Transferência</option>
              <option value="Boleto">Boleto</option>
              <option value="Pix">Pix</option>
            </select>
            {formState.errors.formaPagamento && (
              <span className="text-red-500 text-sm">Campo obrigatório</span>
            )}
          </div>

          <div className="mb-2 font-medium text-gray-700 pt-3 flex flex-col">
            <label htmlFor="dataEmissao">Data de Emissão:</label>
            <input
              type="date"
              {...register("dataEmissao", { valueAsDate: true })}
              id="dataEmissao"
              className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-96 p-2 text-sm ${
                formState.errors.dataEmissao ? "border-red-500" : ""
              }`}
            />
            {formState.errors.dataEmissao && (
              <span className="text-red-500 text-sm">Campo obrigatório</span>
            )}
          </div>

          <div className="mt-5 flex justify-between ms-2">
            <a
              type="button"
              href="/transacoes"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Voltar
            </a>
            <button
              type="submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Confirmar
            </button>
          </div>
        </div>
      </form>
      {showPopup && (
        <div className="fixed bottom-5 right-5">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-green-500">
              Registro salvo com sucesso!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
