export type Meta = {
  name: string
  subtitle: string
  email: string
  linkedin: string
  phone: string
  website: string
  recommendation: string
  skills: Skill[]
}

type Skill = {
  title: string
  description: string
  order: number
}

export type Education = {
  school: string
  degree: string
  graduation: string
}

export type Experience = {
  title: string
  company: string
  from: string
  to: string
  description: string[]
  type: 'Text' | 'List'
}