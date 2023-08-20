import { useCompletion } from "ai/react";
import { Inter } from "next/font/google";
import TextareaAutosize from "react-textarea-autosize";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { completion, input, setInput, complete, handleSubmit } = useCompletion(
    {
      api: "/api/rewrite",
    }
  );

  return (
    <main className={`max-w-md mx-auto pt-20 ${inter.className}`}>
      <h1 className="text-2xl font-bold mb-8">Rewriter</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <TextareaAutosize
          className="border block w-full p-4 rounded-md mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          minRows={4}
        />

        <button className="bg-black px-4 py-2 text-white rounded">
          Rewrite
        </button>
      </form>

      <div>
        <p className="font-bold">Output:</p>
        <p className="select-all">{completion}</p>
      </div>
    </main>
  );
}
