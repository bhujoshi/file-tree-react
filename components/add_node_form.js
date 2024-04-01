import { useContext } from "react";
import DirectoryContext from "@/context/DirectoryContext";

const AddNodeForm = function ({ node, newNode, setNewNode }) {
  const { addSubDirectoryNode } = useContext(DirectoryContext);
  return (
    <div className="sub-directory" style={{ display: "flex", gap: 10 }}>
      <input
        value={newNode.name}
        onChange={(e) => setNewNode({ ...newNode, name: e.target.value })}
      />
      <button
        onClick={() => {
          addSubDirectoryNode(node.id, newNode);
          setNewNode(undefined);
        }}
      >
        Add{" "}
      </button>
    </div>
  );
};

export default AddNodeForm;
