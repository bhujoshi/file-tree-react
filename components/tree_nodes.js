import { useContext } from "react";
import TreeNode from "./tree_node";
import { isDirectory } from "@/helpers/common";
import DirectoryContext from "@/context/DirectoryContext";

const TreeNodes = function ({ node }) {
  const { foldNodes } = useContext(DirectoryContext);
  return (
    <div className={isDirectory(node) ? "directory" : "file"}>
      <TreeNode node={node} />
      <div className="sub-directory">
        {!foldNodes.has(node.id) &&
          node.subDirectories?.map((subDirectoryNode) => {
            return (
              <TreeNodes
                key={subDirectoryNode.id}
                node={subDirectoryNode}
              ></TreeNodes>
            );
          })}
      </div>
    </div>
  );
};

export default TreeNodes;
