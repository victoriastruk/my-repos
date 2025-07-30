import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import WithListLoading from "./components/WithListLoading";

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
    user: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    const fetchData = async () => {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch("https://api.github.com/users/victoriastruk/repos"),
          fetch("https://api.github.com/users/victoriastruk"),
        ]);

        const [repos, user] = await Promise.all([
          reposRes.json(),
          userRes.json(),
        ]);

        setAppState({ loading: false, repos, user });
      } catch (error) {
        setAppState({ loading: false, repos: [], user: null });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="homepage">
        {appState.user && (
          <div className="profile-header">
            <img
              src={appState.user.avatar_url}
              alt="profile"
              className="avatar"
            />
            <h1>{appState.user.name || appState.user.login}</h1>
          </div>
        )}
      </div>

      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default App;
