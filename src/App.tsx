import { useState } from "react";
import type { CustomBlock, DraftifyBlock } from "draftify";
import DraftifyReact, { DraftifyBlocksReader } from "draftify-react";
import "draftify-react/styles.css";

export default function App() {
  const [blocksData, modifyBlocks] = useState<DraftifyBlock[]>([]);

  return (
    <>
      <DraftifyReact
        blocksData={blocksData}
        modifyBlocks={modifyBlocks}
        options={[
          "heading",
          "subheading",
          "image",
          "video",
          "custom-1-H",
          "custom-2-Img",
        ]}
        CustomEditor1={CustomHeadingEditor}
        CustomOutput1={CustomHeadingOutput}
        defaultCustomData1={defaultData1}
        backgroundEnable={true}
        localStorageEnable={true}
        DraftifyBackground={"#2345"}
      />

      <DraftifyBlocksReader
        blocksData={blocksData}
        CustomOutput1={CustomHeadingOutput}
      />
    </>
  );
}

const defaultData1 = {
  text: "",
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
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "24px",
        fontWeight: "630",
      }}
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
  return (
    <h2
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "24px",
        fontWeight: "630",
      }}
    >
      {customBlock.data.text}
    </h2>
  );
}
