export const addBaseUrl = (path: string) =>{
    const baseUrl = import.meta.env.SERVER_BASE_URL? `${import.meta.env.SERVER_BASE_URL}` :  "/";
    return `${baseUrl}${path}`
}