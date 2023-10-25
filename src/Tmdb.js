const API_KEY = '7c708bdf7a3685cb5e0e364346c99b79';
const API_BASE = `https://api.themoviedb.org/3`;

/**
 * - netflix originals
 * - trending (recomendados)
 * - top rated
 * - GENRES (action, comedy, horror, romance, documentary)
 * 
 */

const basicFetch = async (endpoint) => {
    if (!endpoint) return;
    try {
        const req = await fetch(`${API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
    } catch (error) {
        console.error(error)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'troprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=35`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=27`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=10749`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=99`)
            },
        ]
    },
    getMovieById: async (id, type) => {
        let info = {};
        if (id && type) {
            info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);
        } else {
            throw Error('id and type (movie or tv) are required')
        }
        return info;
    }
};