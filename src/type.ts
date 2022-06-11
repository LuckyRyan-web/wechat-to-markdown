export interface TurnDownResult {
    success: boolean
    code: number
    data?: {
        title?: string
        author?: string
        content?: string
    }
    msg?: string
}

export const enum Status {
    Success = 200,
    Fail = 400,
}
