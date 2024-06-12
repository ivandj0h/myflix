// EndpointTMDB.ts
export const TMDB_API_ENDPOINT = "https://api.themoviedb.org/3/discover/movie";
export const TMDB_API_PARAMS = {
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: 'false',
    include_video: 'false',
};

export const constructTMDBUrl = (apiKey: string) => {
    const params = new URLSearchParams({
        api_key: apiKey,
        ...TMDB_API_PARAMS,
    });

    return `${TMDB_API_ENDPOINT}?${params.toString()}`;
};
