export interface LearningPost {
  id: string
  title: string
  category: string
  content: string
  examples?: Example[]
  tables?: Table[]
  dateCreated: Date
}

export interface Example {
  german: string
  english: string
  highlight?: {
    text: string
    case: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv'
  }[]
}

export interface Table {
  title: string
  headers: string[]
  rows: string[][]
}
