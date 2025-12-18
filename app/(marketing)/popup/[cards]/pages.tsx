// 1. Define the shape of your props
interface PageProps {
  params: {
    cards: string;
  };
}

// 2. Apply the interface to the function component
export default function Page({ params }: PageProps) {
  
  // Now TypeScript knows that params.cards exists and is a string
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Card Name: {params.cards}
      </h1>
    </div>
  );
}