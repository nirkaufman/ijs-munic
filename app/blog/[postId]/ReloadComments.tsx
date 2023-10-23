'use client';

import {reloadComments} from "@/services/revlidate-utils";

export function ReloadComments() {

  async function clickHandler() {
    await reloadComments();
  }

  return (
      <button onClick={clickHandler}>reload comments</button>
  )
}
