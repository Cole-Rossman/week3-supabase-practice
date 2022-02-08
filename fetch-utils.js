const SUPABASE_URL = 'https://gasqydcryfarhgasshss.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhc3F5ZGNyeWZhcmhnYXNzaHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjMsImV4cCI6MTk1OTkxNzQ2M30.8SbG9m9ov2M-U0rmfzwIZROWuT1alPR2KvtZ-gV2b10';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
  // client.form("movies").select("*"); is supabase js client
    console.log(resp);
    return checkError(resp);
  // checkError function checks for error so we dont have to manually check
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
    let resp = await client.from('movies').select('*, directors(*)');
    console.log(getMoviesWithDirector, resp.data);
    return checkError(resp);
}

export async function getDirectorNames() {
  // return the list of the director's names
    const directorName = await client.from('directors').select('name');
    console.log(directorName);
    return checkError(directorName);
}

export async function getMovieById(id) {
  // return the movie with the given id
    const resp = await client.from('movies').select('*').eq('id', id).single();
    console.log(getMovieById, resp);
    return checkError(resp);
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
    const resp = await client.from('movies').select('*').eq('title', title).single();
    console.log(getMovieByTitle, resp);
    return checkError(resp);
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
  // order by release date and limit to limit number of results (1 result)
    const resp = await client.from('movies').select('*').order('year').limit(1).single();
    return checkError(resp);
    // if you wanted newest movie you'd add this to .order: .order("year", {ascending: false});
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
