export type Task = {
    page: number,
    total_pages: number,
    result: {
        id: number;
        email: string,
        username: string,
        text: string,
        is_done: boolean
    }[]
}