'use server';

import {revalidatePath, revalidateTag} from "next/cache";

export async function validateCacheForRoute(path: string) {
  revalidatePath(path);
}

export async function reloadComments() {
  revalidateTag('comments');
}

