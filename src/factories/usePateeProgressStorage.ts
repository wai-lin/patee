import { ref } from '@vue/composition-api';

import data from '@/data';

export type STORAGE_KEY = keyof typeof data;
export type STORAGE_VALUE = [number, number];

export default function usePateeProgressStorage(patee: STORAGE_KEY) {
  function get(): STORAGE_VALUE[] {
    return JSON.parse(localStorage.getItem(patee) as string);
  }

  const storage = ref(get());

  function add(newValue: STORAGE_VALUE) {
    let newStorage = storage.value;
    if (newStorage) newStorage = [...newStorage, newValue];
    else newStorage = [newValue];

    localStorage.setItem(patee, JSON.stringify(newStorage));
    storage.value = get();
  }

  function remove() {
    localStorage.removeItem(patee);
    storage.value = get();
  }

  function isInclude(s: number, d: number): boolean {
    if (storage.value)
      return storage.value.some(sEl => sEl[0] === s && sEl[1] === d);
    return false;
  }

  function getLastProgress() {
    if (storage.value) {
      const lastProgressStep = Math.max(...storage.value.map(s => s[0]));
      const lastProgressStepColl = storage.value.filter(
        s => s[0] === lastProgressStep,
      );
      return lastProgressStepColl.reduce((prev, curr) =>
        prev[1] > curr[1] ? prev : curr,
      );
    }
    return null;
  }

  return {
    get,
    storage,
    add,
    remove,
    isInclude,
    getLastProgress,
  };
}
