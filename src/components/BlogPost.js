import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ id }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        // Menggunakan dynamic import untuk membaca file Markdown
        const { default: fileContent } = await import(`../pages/blog/${id}.md`);
        setMarkdownContent(fileContent);
      } catch (error) {
        console.error(`Error reading markdown file: ${error.message}`);
      }
    };

    fetchMarkdown();
  }, [id]);

  return (
    <div>
      <ReactMarkdown children={markdownContent} />
    </div>
  );
};

export default BlogPost;
