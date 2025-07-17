import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleDone = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input value={text} onChange={e => setText(e.target.value)} className="border p-2 flex-grow" placeholder="Add task" />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="space-y-2">
        {tasks.map(task => (
          <Card key={task.id}>
            <div className="flex justify-between items-center">
              <span className={task.done ? "line-through" : ""}>{task.text}</span>
              <div className="space-x-2">
                <Button variant="secondary" onClick={() => toggleDone(task.id)}>
                  {task.done ? "Undo" : "Done"}
                </Button>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

