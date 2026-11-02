import { valueToEstree } from "estree-util-value-to-estree";
import type { Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

import type { PostHeading } from "./posts.ts";
import { slugify } from "./slugify.ts";

export const remarkHeadings = () => (tree: Root) => {
  const headings: PostHeading[] = [];

  visit(tree, "heading", (node) => {
    if (node.depth !== 2) return;
    const text = toString(node).trim();
    const id = slugify(text);
    node.data = {
      ...node.data,
      hProperties: { ...node.data?.hProperties, id },
    };
    headings.push({ id, text });
  });

  tree.children.push({
    type: "mdxjsEsm",
    value: "",
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ExportNamedDeclaration",
            specifiers: [],
            attributes: [],
            declaration: {
              type: "VariableDeclaration",
              kind: "const",
              declarations: [
                {
                  type: "VariableDeclarator",
                  id: { type: "Identifier", name: "headings" },
                  init: valueToEstree(headings),
                },
              ],
            },
          },
        ],
      },
    },
  });
};
