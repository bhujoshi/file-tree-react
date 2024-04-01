import { useContext } from "react";
import DirectoryContext from "@/context/DirectoryContext";

const EditNodeForm = function ({ node, editNode, setEditNode }) {
  const { updateNode } = useContext(DirectoryContext);
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        value={editNode.name}
        onChange={(e) => setEditNode({ ...editNode, name: e.target.value })}
      />
      <button
        onClick={() => {
          updateNode(editNode);
          setEditNode(undefined);
        }}
      >
        Update{" "}
      </button>
    </div>
  );
};

export default EditNodeForm;
