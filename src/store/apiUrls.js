const baseURL = 'https://api.nytimes.com/svc';
const apiKey = 'CwUxzSITpEGUlawcpUwolozJjT45QgDH';

export const apiUrls = {
    topStoryList: baseURL + '/topstories/v2/home.json?api-key=' + apiKey,
    worldStoryList: baseURL + '/topstories/v2/world.json?api-key=' + apiKey,
    scienceStoryList: baseURL + '/topstories/v2/science.json?api-key=' + apiKey,
    usStoryList: baseURL + '/topstories/v2/us.json?api-key=' + apiKey,
    artsStoryList: baseURL + '/topstories/v2/arts.json?api-key=' + apiKey,
    searchArticles: baseURL + '/search/v2/articlesearch.json?api-key=' + apiKey
}