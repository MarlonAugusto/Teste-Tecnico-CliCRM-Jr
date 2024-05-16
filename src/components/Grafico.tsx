import { useEffect, useState } from 'react';
import { db } from "../firebase/firebase.config";
import {collection, getDocs } from 'firebase/firestore';
import BarChart from './ui/BarChart';

interface DataProps {
    nome: string;
    Entradas: number;
}
export default function Graphics() {
    const [data, setData] = useState<DataProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'contas'));
                const data = querySnapshot.docs.map(doc => ({ nome: doc.data().nomePaciente, Entradas: doc.data().valor}));
                setData(data);
            } catch (error) {
                console.error('Erro ao buscar: ', error);
            }
        };

        fetchData();
    }, []);
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
            <h1 className="text-4xl font-bold mb-7 text-center text-white ">Gráficos dos Valores</h1>
            <div >
                <BarChart data={data}/>
            </div>
        </div>
    );
}