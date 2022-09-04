import { useParams } from "react-router-dom";
import { queryClient } from "../services/queryClient";
import { Repo as RepoType } from "./Repos";

function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  async function handleChangeRepoDesc() {
    const previousRepos = queryClient.getQueryData<RepoType[]>("data");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "Teste" };
        } else {
          return repo;
        }
      });
      queryClient.setQueryData("data", nextRepos);
    }
  }
  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepoDesc}>Alterar nome</button>
    </div>
  );
}

export default Repo;
