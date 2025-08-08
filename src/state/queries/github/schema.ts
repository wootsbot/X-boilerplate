import { z } from "zod";

export const zOwner = () =>
  z.object({
    id: z.number(),
    login: z.string(),
    nodeId: z.string(),
    avatarUrl: z.string(),
    gravatarId: z.string(),
    url: z.string(),
    htmlUrl: z.string(),
    followersUrl: z.string(),
    followingUrl: z.string(),
    gistsUrl: z.string(),
    starredUrl: z.string(),
    subscriptionsUrl: z.string(),
    organizationsUrl: z.string(),
    reposUrl: z.string(),
    type: z.string(),
  });
export type Owner = z.infer<ReturnType<typeof zOwner>>;

export const zLicense = () =>
  z.object({
    key: z.string(),
    name: z.string(),
    spdxId: z.string(),
    url: z.string().nullable(),
    nodeId: z.string(),
  });
export type License = z.infer<ReturnType<typeof zLicense>>;

export const zRepository = () =>
  z.object({
    id: z.number(),
    nodeId: z.string(),
    name: z.string(),
    homepage: z.string().nullable(),
    fullName: z.string(),
    private: z.boolean(),
    owner: zOwner(),
    htmlUrl: z.string(),
    description: z.string().nullable(),
    fork: z.boolean(),
    forksCount: z.number(),
    createdAt: z.string(),
    cloneUrl: z.string(),
    gitUrl: z.string(),
    sshUrl: z.string(),
    svnUrl: z.string(),
    size: z.number(),
    stargazersCount: z.number(),
    watchersCount: z.number(),
    language: z.string().nullable(),
    hasIssues: z.boolean(),
    hasProjects: z.boolean(),
    hasDownloads: z.boolean(),
    license: zLicense().nullable(),
    forks: z.number(),
    openIssues: z.number(),
    watchers: z.number(),
    defaultBranch: z.string(),
    score: z.number(),
    updatedAt: z.string(),
    topics: z.array(z.string()),
  });

export type Repository = z.infer<ReturnType<typeof zRepository>>;

export const zRepositoriesPayload = () =>
  z.object({
    incompleteResults: z.boolean(),
    totalCount: z.number(),
    items: z.array(zRepository()),
  });
export type RepositoriesPayload = z.infer<ReturnType<typeof zRepositoriesPayload>>;

export const zSearchRepositoriesParams = () =>
  z.object({
    search: z.string(),
    perPage: z.number().optional(),
    page: z.number().optional(),
  });

export type SearchRepositoriesParams = z.infer<ReturnType<typeof zSearchRepositoriesParams>>;
