    /* настройка темы блоков с кодом */
   export const prettyCodeOptions = {
      theme: "one-dark-pro",
      onVisitLine(node: any) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
          node.children = [{type: "text", value: " "}];
        }
      },
      // Feel free to add classNames that suit your docs
      // ломает
      // onVisitHighlightedLine(node: any) {
      //   node.properties.className.push("highlighted");
      // },
      // onVisitHighlightedWord(node: any) {
      //   node.properties.className = ["word"];
      // },
    }