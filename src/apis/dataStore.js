import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {

    const getData = async () => {
        const response = await fetch("https://api.sheetbest.com/sheets/d6215116-7bca-4f15-a0e7-fa63b3daf8c6");
        const data = await response.json();
        fetchedData = data;
    }
    console.log(fetchedData);
    return {fetchedData, getData};
})