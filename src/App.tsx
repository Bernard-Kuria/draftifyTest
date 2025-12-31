import { useState } from "react";
import type { DraftifyBlock } from "draftify";
import DraftifyReact, { Reader } from "draftify-react";
import "draftify-react/styles.css";

export default function App() {
  const [blocksData, modifyBlocks] = useState<DraftifyBlock[]>([]);

  return (
    <>
      <DraftifyReact blocksData={blocksData} modifyBlocks={modifyBlocks} />

      <Reader blocksData={blocksData} />
    </>
  );
}
