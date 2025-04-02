import type { LearningPost } from '@/types/Posts'

export const learningPosts: LearningPost[] = [
  {
    id: 'cases-overview',
    title: 'German Cases Overview',
    category: 'grammar',
    content: `
      German has four grammatical cases that determine the function of nouns in a sentence:
      Nominativ (subject), Akkusativ (direct object), Dativ (indirect object), and Genitiv (possession).
    `,
    examples: [
      {
        german: 'Der Mann gibt dem Kind einen Ball.',
        english: 'The man gives the child a ball.',
        highlight: [
          { text: 'Der Mann', case: 'nominativ' },
          { text: 'dem Kind', case: 'dativ' },
          { text: 'einen Ball', case: 'akkusativ' },
        ],
      },
    ],
    tables: [
      {
        title: 'Definite Articles (the)',
        headers: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
        rows: [
          ['Nominativ', 'der', 'die', 'das', 'die'],
          ['Akkusativ', 'den', 'die', 'das', 'die'],
          ['Dativ', 'dem', 'der', 'dem', 'den + n'],
          ['Genitiv', 'des + s/es', 'der', 'des + s/es', 'der'],
        ],
      },
    ],
    dateCreated: new Date('2023-11-15'),
  },
  {
    id: 'modal-verbs',
    title: 'German Modal Verbs',
    category: 'verbs',
    content: `
      Modal verbs express attitudes like ability, permission, or obligation.
      In German, they include: können (can), müssen (must), wollen (want),
      dürfen (may), sollen (should), and mögen (to like).
    `,
    examples: [
      {
        german: 'Ich kann Deutsch sprechen.',
        english: 'I can speak German.',
      },
      {
        german: 'Er muss heute arbeiten.',
        english: 'He must work today.',
      },
    ],
    dateCreated: new Date('2023-11-16'),
  },
]

// Categories for navigation
export const categories = [
  { id: 'grammar', name: 'Grammar', icon: 'pencil' },
  { id: 'vocabulary', name: 'Vocabulary', icon: 'book' },
  { id: 'verbs', name: 'Verbs', icon: 'play' },
  { id: 'phrases', name: 'Common Phrases', icon: 'chat' },
]
