// EndpointTMDB.ts
export const TMDB_API_ENDPOINT = "https://api.themoviedb.org/3/discover/movie";
export const TMDB_API_PARAMS = {
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: 'false',
    include_video: 'true',
};

export const generateTMDBSearchUrl = (apiKey: string, query: string) => {
    const params = new URLSearchParams({
        api_key: apiKey,
        query: query,
        ...TMDB_API_PARAMS,
    });

    return `https://api.themoviedb.org/3/search/movie?${params.toString()}`;
};


export const constructTMDBUrl = (apiKey: string) => {
    const params = new URLSearchParams({
        api_key: apiKey,
        ...TMDB_API_PARAMS,
    });

    return `${TMDB_API_ENDPOINT}?${params.toString()}`;
};

export const constructsTMDBUrl = (apiKey: string, category: string): string => {
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    let endpoint = '';

    switch (category) {
        case 'Now Playing':
            endpoint = 'now_playing';
            break;
        case 'Upcoming Movies':
            endpoint = 'upcoming';
            break;
        case 'Top Rated Movies':
            endpoint = 'top_rated';
            break;
        default:
            throw new Error('Invalid category');
    }

    return `${baseUrl}/${endpoint}?api_key=${apiKey}`;
};

