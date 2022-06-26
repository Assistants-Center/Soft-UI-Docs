<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
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
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />