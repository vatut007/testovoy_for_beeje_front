export type Task = {
    page: number,
    total_pages: number,
    result: {
        id: number;
        email: string,
        text: string,
        is_done: boolean
    }[]
}