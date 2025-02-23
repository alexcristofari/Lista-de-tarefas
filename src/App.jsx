import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar programação",
      description: "Estudar programação todos os dias",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ler livros",
      description: "Ler livros todos os dias",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer exercícios",
      description: "Fazer exercícios todos os dias",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
