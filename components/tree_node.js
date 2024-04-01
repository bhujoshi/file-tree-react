import { useState, useContext } from "react";
import DirectoryContext from "@/context/DirectoryContext";
import TreeNodeActions from "./tree_node_actions";
import EditNodeForm from "./edit_node_form";
import AddNodeForm from "./add_node_form";

const TreeNode = ({ node }) => {
  const [newNode, setNewNode] = useState();
  const [editNode, setEditNode] = useState();
  const { foldNodes, setFoldNodes } = useContext(DirectoryContext);

  const updateFold = () => {
    const foldNodesCopy = new Set(foldNodes);
    if (foldNodesCopy.has(node.id)) {
      foldNodesCopy.delete(node.id);
    } else {
      foldNodesCopy.add(node.id);
    }
    setFoldNodes(foldNodesCopy);
  };

  return (
    <div>
      {editNode ? (
        <EditNodeForm
          node={node}
          editNode={editNode}
          setEditNode={setEditNode}
        />
      ) : (
        <div
          onClick={updateFold}
          style={{ display: "flex", gap: 10, cursor: "pointer" }}
        >
          <span>{node.name}</span>
          <TreeNodeActions
            node={node}
            setNewNode={setNewNode}
            setEditNode={setEditNode}
          />
        </div>
      )}
      {newNode && (
        <AddNodeForm node={node} newNode={newNode} setNewNode={setNewNode} />
      )}
    </div>
  );
};

export default TreeNode;
