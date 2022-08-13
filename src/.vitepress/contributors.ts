import contributorNames from './contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  title: string
  links?: object
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => import.meta.hot ? `https://github.com/${name}.png` : `/user-avatars/${name}.png`

export const contributors = (contributorNames as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [] as Contributor[])

export const teamMembers: CoreTeam[] = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/66025383',
    name: 'Plain',
    title: 'Soft UI Developer',
    links: [
        { icon: 'github', link: 'https://github.com/PlainDevelopment' },
        { icon: 'twitter', link: 'https://twitter.com/plainstuff' }
    ]
},
{
    avatar: 'https://avatars.githubusercontent.com/u/68955155',
    name: 'iMidnight',
    title: 'Soft UI Developer',
    links: [
        { icon: 'github', link: 'https://github.com/iMidnights' },
        { icon: 'twitter', link: 'https://twitter.com/iMidnight4' }
    ]
},
{
    avatar: 'https://avatars.githubusercontent.com/u/62174194',
    name: 'Breathtake',
    title: 'Discord Dashboard Developer',
    links: [
        { icon: 'github', link: 'https://github.com/breftejk' },
        { icon: 'twitter', link: 'https://twitter.com/assistantsga' }
    ]
},
]