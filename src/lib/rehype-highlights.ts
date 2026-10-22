import { codeToHtml, isSupportedLanguage } from "@pierre/highlights";
import vitesseDark from "@pierre/highlights/themes/vitesse-dark";
import type { ElementContent, Root } from "hast";
import { fromHtml } from "hast-util-from-html";
import { visit } from "unist-util-visit";

const getText = (node: ElementContent): string =>
  node.type === "text"
    ? node.value
    : node.type === "element"
      ? node.children.map(getText).join("")
      : "";

export const rehypeHighlights = () => (tree: Root) => {
  visit(tree, "element", (pre, index, parent) => {
    const [code] = pre.children;
    if (pre.tagName !== "pre" || code?.type !== "element" || !parent) return;

    const lang = String(code.properties.className ?? "").match(
      /language-([\w-]+)/,
    )?.[1];
    if (!lang || !isSupportedLanguage(lang) || index === undefined) return;

    const html = codeToHtml(getText(code).replace(/\n$/, ""), {
      lang,
      theme: vitesseDark,
    });
    const [highlighted] = fromHtml(new TextDecoder().decode(html), {
      fragment: true,
    }).children;
    if (highlighted?.type !== "element") return;

    highlighted.properties.tabIndex = 0;
    parent.children[index] = highlighted;
  });
};
