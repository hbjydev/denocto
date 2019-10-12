import { User as IUser } from './types.d.ts';
import GetJson from './base.ts';

class User implements IUser {
  public login: string;
  public id: number;
  public node_id: string;
  public avatar_url: string;
  public gravatar_id: string;
  public url: string;
  public html_url: string;
  public followers_url: string;
  public gists_url: string;
  public starred_url: string;
  public subscriptions_url: string;
  public organisations_url: string;
  public repos_url: string;
  public events_url: string;
  public received_events_url: string;
  public type: string;
  public site_admin: boolean;
  public name: string;
  public company: string;
  public blog: string;
  public location: string;
  public email: string;
  public hireable: boolean;
  public bio: string;
  public public_repos: number;
  public public_gists: number;
  public followers: number;
  public following: number;
  public created_at: string;
  public updated_at: string;

  constructor(json: any) {
    this.login = json.login;
    this.id = json.id;
    this.node_id = json.node_id;
    this.avatar_url = json.avatar_url;
    this.gravatar_id = json.gravatar_id;
    this.url = json.url;
    this.html_url = json.html_url;
    this.followers_url = json.followers_url;
    this.gists_url = json.gists_url;
    this.starred_url = json.starred_url;
    this.subscriptions_url = json.subscriptions_url;
    this.organisations_url = json.organisations_url;
    this.repos_url = json.repos_url;
    this.events_url = json.events_url;
    this.received_events_url = json.received_events_url;
    this.type = json.type;
    this.site_admin = json.site_admin;
    this.name = json.name;
    this.company = json.company;
    this.blog = json.blog;
    this.location = json.location;
    this.email = json.email;
    this.hireable = json.hireable;
    this.bio = json.bio;
    this.public_repos = json.public_repos;
    this.public_gists = json.public_gists;
    this.followers = json.followers;
    this.following = json.following;
    this.created_at = json.created_at;
    this.updated_at = json.updated_at;
  }

  public async getFollowers(): Promise<IUser[]> {
    return await GetJson<IUser[]>(`users/${this.login}/followers`);
  }
  public async getGists(): Promise<IUser[]> {
    return await GetJson<IUser[]>(`users/${this.login}/gists`);
  }
}

/**
 * Gets a user from the GitHub API.
 * @param username The username of the user
 */
export const getUser = async (username: string): Promise<User | null> => {
  const json = await GetJson<IUser>(`users/${username}`);
  return new User(json);
}