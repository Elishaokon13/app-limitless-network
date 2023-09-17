
export type TranslatableText =
  | string
  | {
      key: string
      data?: {
        [key: string]: string | number
      }
    }
    
export interface Address {
  56: string
}


export type PageMeta = {
  title: string
  description?: string
  image?: string
}

export enum FetchStatus {
  Idle = 'IDLE',
  Fetching = 'FETCHING',
  Fetched = 'FETCHED',
  Failed = 'FAILED',
}
