'use client';

import {reloadComments, validateCacheForRoute} from "@/services/revlidate-utils";

export function ReloadComments() {

  async function clickHandler() {
    await reloadComments();
  }

  return (
      <button onClick={clickHandler}>reload comments</button>
  )
}
