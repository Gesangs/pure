export function handleNodes(text) {
    const pattern = /([^>]*)(<([a-z/][-a-z0-9_:.]*)[^>/]*(\/*)>)([^<]*)/g,
      nodes = [];
    let matchArr;
    while ((matchArr = pattern.exec(text))) {
      if (matchArr[1]) nodes.push(["text", matchArr[1]]);
      switch (matchArr[3]) {
        case "user":
          nodes.push(["user", matchArr[5]]);
          break;
        case "all":
          nodes.push(["all", matchArr[5]]);
          break;
        case "topic":
          nodes.push(["topic", matchArr[5]]);
          break;
        case "icon":
          nodes.push(["icon", this.getEmotion(matchArr[5])]);
          break;
        case "url":
          nodes.push(["url", matchArr[5]]);
          break;
        default:
          nodes.push(["text", matchArr[5]]);
          break;
      }
    }
    return nodes;
  }