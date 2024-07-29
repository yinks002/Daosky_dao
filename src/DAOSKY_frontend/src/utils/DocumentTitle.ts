import { useEffect } from "react";

const DocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default DocumentTitle;
