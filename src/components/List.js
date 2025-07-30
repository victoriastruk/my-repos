import React from "react";

const List = ({ repos }) => {
  if (!repos || repos.length === 0) return <p>No repositories found.</p>;

  return (
    <>
      <h2 className="list-head">Available Public Repositories</h2>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className="repo-text">{repo.name}</h3>
            </a>
            <p className="repo-description">
              {repo.description || "No description"}
            </p>
            <div className="repo-meta">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
