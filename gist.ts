import { Gist as IGist, ShortUser } from "./types.d.ts";
import getJson from "./base.ts";

class Gist implements IGist {
  public url: string;
  public forks_url: string;
  public commits_url: string;
  public id: string;
  public node_id: string;
  public git_push_url: string;
  public git_pull_url: string;
  public html_url: string;
  public files: {
    [key: string]: {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
      size: number;
    };
  };
  public public: boolean;
  public created_at: string;
  public updated_at: string;
  public description: string;
  public comments: number;
  public user: any;
  public comments_url: string;
  public owner: ShortUser;
  public truncated: boolean;

  constructor(json: any) {
    this.url = json.url;
    this.forks_url = json.forks_url;
    this.commits_url = json.commits_url;
    this.id = json.id;
    this.node_id = json.node_id;
    this.git_push_url = json.git_push_url;
    this.git_pull_url = json.git_pull_url;
    this.html_url = json.html_url;
    this.files = json.files;
    this.public = json.public;
    this.created_at = json.created_at;
    this.updated_at = json.updated_at;
    this.description = json.description;
    this.comments = json.comments;
    this.user = json.user;
    this.comments_url = json.comments_url;
    this.owner = json.owner;
    this.truncated = json.truncated;
  }
}

/**
 * Gets a user's gist
 * @param id The ID of the gist
 * @param token The token to authenticate with.
 */
export const getGist = async (id: string, token?: string): Promise<Gist> => {
  const json = await getJson<Gist>(`gists/${id}`, token);
  return new Gist(json);
};
