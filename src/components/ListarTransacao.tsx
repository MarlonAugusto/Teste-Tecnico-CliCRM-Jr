import { format } from "date-fns";
import { db } from "../firebase/firebase.config";
import {
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";
import UpdateTransacao from "./UpdateTransacao";

interface FormTransacao {
  id: string;
  nomePaciente: string;
  operacaoFeita: string;
  valor: number;
  formaPagamento: string;
}

export default function ListarTransacao() {
  const [contas, setContas] = useState<any>([]);
  const contasCollectionRef = collection(db, "/contas");

  useEffect(() => {
    const getContas = async () => {
      const data = await getDocs(contasCollectionRef);
      setContas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getContas();
  }, []);


  const deleteConta = async (id: string | number) => {
    try {
      const contaId = id.toString();
      await deleteDoc(doc(db, "contas", contaId));
      setContas(contas.filter((conta: FormTransacao) => conta.id !== id));
    } catch (error) {
      console.error("Erro ao tentar apagar registro", error);
    }
  };

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<FormTransacao | null>(null);

  const handleEdit = (conta: FormTransacao) => {
    setEditingTransaction(conta);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditingTransaction(null);
  };


  return (
    <>
      {isEditDialogOpen && editingTransaction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <UpdateTransacao
              isOpen={isEditDialogOpen}
              transacao={editingTransaction}
              onClose={handleCloseEditDialog}
            />
          </div>
        </div>
      )}
      <div>
        <div className="w-full ps-10 pt-10 pb-5 text-4xl uppercase font-semibold">
          Pagamentos realizados
        </div>
        <div className="flex flex-col items-start ps-10 mb-5">
          <a
            className="text-green-600 hover:text-gray-600 focus:outline-none flex items-center mt-4"
            href="/novoregistro"
          >
            <FaRegPlusSquare className="h-8 w-8" />
            <span className="mt-1 text-lg font-medium ms-2 mb-2">
              Novo Registro
            </span>
          </a>
        </div>
        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-200">
            <thead className="text-lg text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome do paciente
                </th>
                <th scope="col" className="px-6 py-3">
                  Operação realizada
                </th>
                <th scope="col" className="px-6 py-3">
                  Valor
                </th>
                <th scope="col" className="px-6 py-3">
                  Forma de Pagamento
                </th>
                <th scope="col" className="px-6 py-3">
                  Data de emissão
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {contas.map(
                (conta: {
                  id: string;
                  nomePaciente: string;
                  operacaoFeita: string;
                  valor: number;
                  formaPagamento: string;
                  dataEmissao: Timestamp;
                }) => (
                  <tr
                    key={conta.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {conta.nomePaciente}
                    </th>
                    <td className="px-6 py-4">{conta.operacaoFeita}</td>
                    <td className="px-6 py-4">R$ {conta.valor}</td>
                    <td className="px-6 py-4">{conta.formaPagamento}</td>
                    <td className="px-6 py-4">
                      {format(conta.dataEmissao.toDate(), "dd/MM/yyyy")}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleEdit(conta)}
                        className=" text-blue-600 hover:text-white focus:outline-none pl-2 mr-2"
                      >
                        <LuPencil className="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => {
                          deleteConta(conta.id);
                        }}
                        className="text-red-600 hover:text-white focus:outline-none ml-2"
                      >
                        <FaRegTrashCan className="h-6 w-6" />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
