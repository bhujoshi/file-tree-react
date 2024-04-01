import { isDirectory } from "@/helpers/common";
import { v4 as uuidv4 } from "uuid";

const TreeNodeActions = function ({ node, setNewNode, setEditNode }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {isDirectory(node) && (
        <>
          <button onClick={() => setNewNode({ name: "", id: uuidv4() })}>
            Add file
          </button>
          <button
            onClick={() =>
              setNewNode({ name: "", id: uuidv4(), subDirectories: [] })
            }
          >
            Add directory
          </button>
        </>
      )}
      <button
        onClick={() => {
          setEditNode(node);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default TreeNodeActions;
