// modules
import { useState } from "react";

// types
import type { CustomBlock, DraftifyBlock, DraftifyDocument } from "draftify";

// components
import DraftifyReact, { DraftifyBlocksReader } from "draftify-react";

// component styling
import "draftify-react/styles.css";

export default function App() {
  const [draftifyDoc, setDoc] = useState<DraftifyDocument>({
    metadata: {},
    version: "1.0.0",
    blocks: [] as DraftifyBlock[],
  });

  return (
    <>
      <DraftifyReact
        draftifyDoc={draftifyDoc}
        setDoc={setDoc}
        options={[
          "heading",
          "subheading",
          "paragraph",
          "image",
          "video",
          "list",
          "quote",
          "code",
          "link",
          "table",
          "custom-1-H",
        ]}
        CustomEditor1={CustomHeadingEditor}
        CustomOutput1={CustomHeadingOutput}
        defaultCustomData1={defaultData1}
        backgroundEnable={true}
        localStorageEnable={true}
        DraftifyBackground={"#2345"}
      />

      <DraftifyBlocksReader
        blocksData={draftifyDoc.blocks}
        CustomOutput1={CustomHeadingOutput}
      />
    </>
  );
}

const defaultData1 = {
  text: "",
};

const blockStyling = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: "24px",
  fontWeight: "630",
};

function CustomHeadingEditor({
  customBlock,
  modifyCustom,
}: {
  customBlock: CustomBlock;
  modifyCustom: (args: { customBlockId: string; data: object }) => void;
}) {
  return (
    <input
      type="text"
      style={blockStyling}
      autoFocus
      value={customBlock.data.text}
      onChange={(e) =>
        modifyCustom({
          customBlockId: customBlock.id,
          data: { text: e.target.value },
        })
      }
    />
  );
}

function CustomHeadingOutput({ customBlock }: { customBlock: CustomBlock }) {
  return <h2 style={blockStyling}>{customBlock.data.text}</h2>;
}
