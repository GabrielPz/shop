import { styled } from "..";


export const HomeContainer = styled('main',{
    display: 'flex',
    //gap: '3rem',

    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    marginLeft: 'auto',
    //minHeight: 656,
    // Se for habilitar o minHeight deve habilitar o marginbottom do footer :)
})

export const Products = styled('a',{
  borderRadius: 8,
  //padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display:  'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(0,0,0,0.6)',
    //marginBottom: '1rem',

    transform: 'translateY(110%)',
    opacity:0,
    transition: 'all 0.2s ease-in-out',

    'strong':{
      fontSize: '$lg',
    },

    span:{
      fontSize: '$xl',
      fontWeight: 'bolg',
      color: '$green300'
    }

  },

  '&:hover':{
    footer:{
      opacity: 1,
      transform: 'translateY(0%)',

    }
  }
})

export const Button = styled('button',{

    backgroundColor: '$green500',
    borderRadius: 4,
    border: 0,
    padding: '4px 8px',
  
  
  
    '&:hover': {
      filter: 'brightness(0.8)'
    },
  })