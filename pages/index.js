import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import DirectoryContext from "@/context/DirectoryContext";
import TreeNodes from "@/components/tree_nodes";

const dummyData = {
  name: "root",
  id: uuidv4(),
  subDirectories: [
    {
      name: "fist sub file",
      id: uuidv4(),
    },
    {
      name: "fist sub file",
      id: uuidv4(),
    },
    {
      name: "fist sub directory",
      id: uuidv4(),
      subDirectories: [
        {
          name: "First nested child",
          id: uuidv4(),
        },
      ],
    },
  ],
};

export default function Home() {
  const [directoriesTree, setDirectoriesTree] = useState(dummyData);
  const [foldNodes, setFoldNodes] = useState(new Set());
  const addNode = (id, newNode) => {
    const findIdAndAdd = (treeNode) => {
      if (treeNode.id === id) {
        treeNode.subDirectories = [newNode, ...treeNode.subDirectories];
      }
      if (treeNode.subDirectories) {
        treeNode.subDirectories = treeNode.subDirectories.map(
          (subDirectories) => {
            return findIdAndAdd(subDirectories);
          }
        );
      }
      return { ...treeNode };
    };
    setDirectoriesTree(findIdAndAdd(directoriesTree));
  };

  const updateNode = (updatedNode) => {
    const findIdAndEdit = (treeNode) => {
      if (treeNode.id === updatedNode.id) {
        treeNode = updatedNode;
      }
      if (treeNode.subDirectories) {
        treeNode.subDirectories = treeNode.subDirectories.map(
          (subDirectories) => {
            return findIdAndEdit(subDirectories);
          }
        );
      }
      return { ...treeNode };
    };
    setDirectoriesTree(findIdAndEdit(directoriesTree));
  };

  return (
    <main style={{ padding: "20px" }}>
      <DirectoryContext.Provider
        value={{
          addNode: addNode,
          updateNode: updateNode,
          setFoldNodes: setFoldNodes,
          foldNodes: foldNodes,
        }}
      >
        <TreeNodes node={directoriesTree}></TreeNodes>
      </DirectoryContext.Provider>
    </main>
  );
}
