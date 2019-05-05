export interface Article {
    title: string,
    date: string,
    content: string,
    auth: string
}

export interface LoginData {
    username: string,
    password: string
}

export interface RootState {
    loginStatus: boolean,
    articleList: Article[],
    currentContent: Article
}
