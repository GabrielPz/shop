import { globalCss } from ".";

export const globalStyles = globalCss({
    "*":{  
        margin: 0,
        padding: 0
    },
    body: {
        '-webkit-font-smoothing': 'antialised',
        backgroundImage: 'linear-gradient(to bottom, black, #565656)',
        color: '$gray100'

    },

    'body, input, button, textarea':{
        fontFamily: 'Roboto',
        fontWeight: 400,
    }
})