import http from "./httpService";
import { datamuseUrl } from "../config.json";

const apiEndpoint = datamuseUrl;

export function getWordsMeanLike(searchString) {
    const wordMeanLikeUrl = `${apiEndpoint}?ml=${searchString}&max=10`;
    return http.get(wordMeanLikeUrl);
}

export function getWordsSpellLike(searchString) {
    const wordSpellLike = `${apiEndpoint}?sl=${searchString}&max=10`;
    return http.get(wordSpellLike);
}

