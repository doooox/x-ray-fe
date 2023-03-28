import { StorageKeys } from "./static";

export const setItemToLocalStorage = (key: StorageKeys, value: string) => {
    localStorage.setItem(key, value)
}

export const getItemFromLocalStorage = (key: StorageKeys) => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) return JSON.parse(storageValue)

    return null
}

export const removeItemFromStorage = (key: StorageKeys) => {
    localStorage.removeItem(key)
}