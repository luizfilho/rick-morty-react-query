import { Post } from "./types";

export async function getPosts() {}

export async function getPostById({ postId }: { postId: string }) {}

export async function updatePost({ data }: { data: Post }) {
  const postId = data.id;
}

export async function createPost({}: Post) {}
