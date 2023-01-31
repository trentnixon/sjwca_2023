import Link from 'next/link'
import { useRouter } from 'next/router';

import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import AddIcon from '@mui/icons-material/Add';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 'auto',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const Leftlinks = [
  {
    label:'Winter Cricket in 2023',
    url:'/',
    Icon:<SportsCricketIcon />
  },{
    label:'About the 2023 Season',
    url:'/2023season',
    Icon:<AcUnitIcon />
  },{
    label:'Register a Team',
    url:'/registerTeam',
    Icon:<GroupIcon />
  },/* {
    label:'How to Register',
    url:'/howToRegister',
    Icon:<AddIcon />
  }, *//* {
    label:'Register an Individual',
    url:'/registerIndividual',
    Icon:<PersonIcon />
  },{
    label:'Regions we Play',
    url:'/regions',
    Icon:<EditLocationAltIcon />
  },{
    label:'About SJWCA',
    url:'/about',
    Icon:<InfoIcon />
},{
  label:'FAQs',
  url:'/faq',
  Icon:<HelpOutlineIcon />
} */
]

const Rightlinks = [
  /* {
    label:'Winter Cricket in 2023',
    url:'/',
    Icon:<SportsCricketIcon />
  },{
    label:'Sixers Rosters',
    url:'/SixersRoster',
    Icon:<SportsCricketIcon />
  },{
    label:'Thunder Rosters',
    url:'/ThunderRoster',
    Icon:<SportsCricketIcon />
  }, {
    label:'About the 2023 Season',
    url:'/2023season',
    Icon:<AcUnitIcon />
  },{
    label:'Register a Team',
    url:'/registerTeam',
    Icon:<GroupIcon />
  },*//* {
    label:'How to Register',
    url:'/howToRegister',
    Icon:<AddIcon />
  }, */{
    label:'Register an Individual',
    url:'/registerIndividual',
    Icon:<PersonIcon />
  },{
    label:'Regions we Play',
    url:'/regions',
    Icon:<EditLocationAltIcon />
  }/* ,{
    label:'About SJWCA',
    url:'/about',
    Icon:<InfoIcon />
},{
  label:'FAQs',
  url:'/faq',
  Icon:<HelpOutlineIcon />
} */
]

export function HeaderMiddle() {
   

      
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(Leftlinks[0].url);
  const { classes, cx } = useStyles();
 
  

  const CreateLinks = (LINKS)=>{
   
    return LINKS.map((url,i) =>{

        return <Link href={url.url} key={i} >
           {url.label}
       {/*  <a
          key={url.label}
          href={url.url}
          className={cx(classes.url, { [classes.linkActive]: active === url.url })}
          onClick={(event) => {
            event.preventDefault();
            setActive(url.url);
          }}
        >
         
        </a> */}
        </Link>
    })
  }


  return (
    <Header height={56} mb={0}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
        {CreateLinks(Leftlinks)}
          
        </Group>

        LOGO

        <Group className={classes.links} spacing={5}>
          {CreateLinks(Rightlinks)}
        </Group>
      </Container>
    </Header>
  );
}