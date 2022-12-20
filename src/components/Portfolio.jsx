import React, { useState } from 'react'
import Card from './Card';
import styles from './Portfolio.module.scss'

const Portfolio = () => {
    const [chapter, setChapter] =useState(0);
    const switchers = [
        {
            name: 'MOCKUP',
        },
        {
            name: 'PNG/JPG'
        },
        {
            name: 'ICONS'
        },
        {
            name: 'TEXTURES'
        },
        {
            name: 'FONTS'
        },
        {
            name: 'SOON'
        },
    ]

    const mockups = [
        {
            name: '7 Mockups iPhone 13',
            src: './cards/iphone.png',
            redirect: 'https://drive.google.com/drive/folders/1-L5LI8vbpxGO8qyixYeUQl2BwOmj_5Eu'
        },
        {
            name: 'ID Card Mockup',
            src: './cards/idcard.png',
            redirect: 'https://drive.google.com/drive/folders/1bcz5-DQb_d0OznjqCj9jYHTXssOrv9Dx'
        },
        {
            name: 'Street poster Mockup',
            src: './cards/street.png',
            redirect: 'https://drive.google.com/drive/folders/13Lc5-3LScEq5jF9DnBJ5xhh8ndgW4Lsm'
        },
        {
            name: 'Box 3 Mockup',
            src: './cards/box.png',
            redirect: 'https://drive.google.com/drive/folders/1jIOny1HeeRkHI3GH5vFTPjUWwpWvCIW6'
        },
        {
            name: 'Truck Mockup',
            src: './cards/truck.png',
            redirect: 'https://drive.google.com/drive/folders/15muW23QLrirsStxPRC4dsQf-fNkzwQkh'
        },
        {
            name: 'Water-bottle Mockup',
            src: './cards/bottle.png',
            redirect: 'https://drive.google.com/drive/folders/1SOq0Yvh4dSR5oGnzOOVaJbNqwV3QEnYD'
        },
        {
            name: 'Apple Watch Series 7 Mockup',
            src: './cards/watch.png',
            redirect: 'https://drive.google.com/drive/folders/1r8dBShJFPCJiNPOsyr2X3w6sqiFJbM56'
        },
        {
            name: 'Flyer Mockup',
            src: './cards/flyer.png',
            redirect: 'https://drive.google.com/drive/folders/1fuHOHeK4-vSaVXPmb6GP9z2j12ruCyG5'
        },
        {
            name: 'Black Apple Devices Mockup',
            src: './cards/devices.png',
            redirect: 'https://drive.google.com/drive/folders/1cQTdiDXpKxHhGzLcDpTOc4wKfubdTkff'
        },
    ]

    const png = [
        {
            name: 'Sticker Mockup Bundle',
            src: './cards/sticker.png',
            redirect: 'https://drive.google.com/drive/folders/149qgx-CAlgsY_dwH428g0j4xcqmpeHgC'
        },
        {
            name: 'Geometric Shapes',
            src: './cards/geometric.png',
            redirect: 'https://drive.google.com/drive/folders/1JGMyztE9wiWd5GX_zsFkGvAIIPdzAUQF'
        },
        {
            name: 'Holograic 3D Shapes',
            src: './cards/holographic.png',
            redirect: 'https://drive.google.com/drive/folders/1_34sX5zdWHX9ch-UawO1MRIekTtPdrxa'
        },
        {
            name: 'Drops png',
            src: './cards/drops.png',
            redirect: 'https://drive.google.com/drive/folders/1Ie5ucC_-5CIobI4zuC6biZxfZtm-YFV1'
        },
        {
            name: 'Stickers #2 Gradient',
            src: './cards/gradstickers.png',
            redirect: 'https://drive.google.com/drive/folders/12TBuwo7UbSozrZVQWa5xrx9ze6dhQZo_https://drive.google.com/drive/folders/12TBuwo7UbSozrZVQWa5xrx9ze6dhQZo_'
        },
        {
            name: 'Mixed Bag Gold',
            src: './cards/gold.png',
            redirect: 'https://drive.google.com/drive/folders/1HTcoqXgUb_LeloLArt6_SaBgFOeIK7Lo'
        },
        {
            name: 'Chain Models',
            src: './cards/chain.png',
            redirect: 'https://drive.google.com/drive/folders/1fChd86pDvcacaCfMnh15VBzO9MvQHyuS'
        },
        {
            name: 'Glass Pack',
            src: './cards/glass.png',
            redirect: 'https://drive.google.com/drive/folders/1R3uZq1sqJU-XQ8SYGUSss515GFzejOEi'
        },
        {
            name: 'Sculptures pack',
            src: './cards/sculpture.png',
            redirect: 'https://drive.google.com/drive/folders/1BblryphQ2rET_L8AQebXr5gjk22SDLX0'
        },
    ]

    const icons = [
        {
            name: 'Sticker Mockup Bundle',
            src: './cards/bundle.png',
            redirect: 'https://drive.google.com/drive/folders/1TeVl37xplWdQKA3vgQkscWg_UGmnyCOi'
        },
        {
            name: 'Crypto 3D icons',
            src: './cards/crypto.png',
            redirect: 'https://www.figma.com/file/BBUQgCMXP4dUd5LGPphrE5/Crypto-3D-icons-Front?node-id=0%3A1&t=SVYsTJnwJ6dA4AxI-0'
        },
        {
            name: 'Animal Icons',
            src: './cards/animal.png',
            redirect: 'https://www.figma.com/file/LOtuX6k31ksKhUXG31W77D/%D0%90%D0%BD%D0%B8%D0%BC%D0%BE%D0%B4%D0%B7%D0%B8?node-id=0%3A1&t=J5tcUSoIgz4a35sF-0'
        },
        {
            name: 'Stage computer',
            src: './cards/stage.png',
            redirect: 'https://www.figma.com/file/03WsqaC6FxsZKkcP7KVlDE/Bento-Design-Vol.1?t=1Y2gRRIfthA8VJ2P-0'
        },
        {
            name: 'Social Icons',
            src: './cards/social.png',
            redirect: 'https://www.figma.com/file/uKpAKdv2iMSZbvS9EKAYVw/Social-Icons?node-id=0%3A1&t=Pk4F1jPLFPlsjr5K-0'
        },
        {
            name: 'Icon Glass',
            src: './cards/iconglass.png',
            redirect: 'https://www.figma.com/file/tHfizQj0kANiBG1TmAeIdP/Icon-Glass?node-id=0%3A1&t=ZG3JNxWCcLkoEeeX-0'
        },
        {
            name: 'Icons Sport',
            src: './cards/iconsport.png',
            redirect: 'https://www.figma.com/file/BdpQ2fbBMLn0EXf0r7kLgX/3D_icons_sport?node-id=0%3A1&t=QGBulxG5sT8OMKtK-0'
        },
        {
            name: 'Tools 3D',
            src: './cards/tools.png',
            redirect: 'https://www.figma.com/file/s272FvvClcm34h4rcDsYfw/Tools?t=QiAlOdkRa6nJM173-0'
        },
        {
            name: 'Emoji Icon Gestures',
            src: './cards/emoji.png',
            redirect: 'https://www.figma.com/file/k4NMkGsvQ8iYqhMyAy8PSI/3D-Emoji-Pack_-Gestures'
        }
    ]

    const textures = [
        {
            name: 'Newspaper Texture',
            src: './cards/newspaper.png',
            redirect: 'https://drive.google.com/drive/folders/1Go88S9485tZgQZ1oEo3f8xOunmoJoU8s'
        },
        {
            name: 'Dust Scratches',
            src: './cards/dust.png',
            redirect: 'https://drive.google.com/drive/folders/11ghBgx-7_yriYmCILGnIyQxGwMrvyE86'
        },
        {
            name: 'Plactic and Paper Textures',
            src: './cards/plastic.png',
            redirect: 'https://drive.google.com/drive/folders/1S-UflCBy-4Yn4hPXwcP15MLdJU_I61gp'
        },
        {
            name: 'Neo Psyche Delia',
            src: './cards/neo.png',
            redirect: 'https://drive.google.com/drive/folders/1UXCJX4L8sGDG6_zAlDUhSTOPFVnnTQwi'
        },
        {
            name: 'Crumpled Paper',
            src: './cards/crumpled.png',
            redirect: 'https://drive.google.com/drive/folders/1Pxu91wm6F4tGVQ-WBua5jxf-cCG7lFYc'
        },
        {
            name: 'Burnt Paper',
            src: './cards/burnt.png',
            redirect: 'https://drive.google.com/drive/folders/1hhKijeJYDYdzc_D3gt4aan_Rhmzm_-Rf'
        },
        {
            name: 'Scene Creator',
            src: './cards/scene.png',
            redirect: 'https://drive.google.com/drive/folders/1KnvlzHjDVzh45eoUcISDQ-Nn6NIfAG-t'
        },
        {
            name: 'Color Highlights',
            src: './cards/color.png',
            redirect: 'https://drive.google.com/drive/folders/189U7zEaDUWZMkuBY5GYG5nyf6jcr8dm0'
        },
        {
            name: 'Crumpled Foil',
            src: './cards/foil.png',
            redirect: 'https://drive.google.com/drive/folders/1_EPxkYdPJ1-vYH5mr8PiSYzxfjfEOZ7k'
        },
        
    ]

    const fonts = [
        {
            name: 'TokYo',
            src: './cards/tokyo.png',
            redirect: 'https://drive.google.com/drive/folders/1akHJBSZASqOyc_7ukbF-AbecF9hyCZnv'
        },
        {
            name: 'Joyride 2.0',
            src: './cards/joyride.png',
            redirect: 'https://drive.google.com/drive/folders/15bwO9Y7q73ejuDSdaLkohJLjSaneHJ8G'
        },
        {
            name: 'Gropled',
            src: './cards/gropled.png',
            redirect: 'https://drive.google.com/drive/folders/11Z6OBq51Iz9CzChFCgLSLRzVaLaCGFxa'
        },
        {
            name: 'Hadwriting Brush',
            src: './cards/brush.png',
            redirect: 'https://drive.google.com/drive/folders/1ZoHOA4mrXUettvDAQq4_2PKksigXjLQz'
        },
        {
            name: 'George',
            src: './cards/george.png',
            redirect: 'https://drive.google.com/drive/folders/1fTiIyyjfjmrCYiyJHwtV8XZ0WAFqJXZA'
        },
        {
            name: 'Samas Gothic',
            src: './cards/samas.png',
            redirect: 'https://drive.google.com/drive/folders/1LCqeA4mStWxKupQjukZ7I8k5fN3lDAVf'
        },
        {
            name: 'Too Many Cowboys',
            src: './cards/too.png',
            redirect: 'https://drive.google.com/drive/folders/1PdY6qEPY7FQfTgVHuc7FCyD4261JkILY'
        },
        {
            name: 'Google Sans',
            src: './cards/google.png',
            redirect: 'https://drive.google.com/drive/folders/1-7cOxq_99HQdZz6b7CzkAJPTMycA8XZJ'
        },
        {
            name: 'Argentina',
            src: './cards/argentina.png',
            redirect: 'https://drive.google.com/drive/folders/1xntW5JoB4B05zUGnDi8MinJB6_3b9q46'
        },
    ]

    const soons = [
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        {
            name: 'coming soon',
            src: './cards/soon.png'
        },
        
    ]



  return (
    <div className={styles.container}>

        <div className={styles.content}>

            <div className={styles.switcher}>

                {switchers.map((switcher, idx) => (
                    <button 
                    key={idx} 
                    onClick={() => setChapter(idx)}
                    className={ chapter === idx ? styles.switcherActive : styles.switcherButton }
                    >
                        {switcher.name}
                    </button>
                ))}

            </div>

            <div className={styles.cards}>

                {
                    chapter === 0 &&
                    mockups.map((mockup, idx) => (
                        <a target='_blank' style={{textDecoration: 'none'}} href={mockup.redirect}><Card src={mockup.src} name={mockup.name} /></a>
                    ))
                }

                {
                    chapter === 1 &&
                    png.map((pngshki, idx) => (
                        <a target='_blank' style={{textDecoration: 'none'}} href={pngshki.redirect}> <Card src={pngshki.src} name={pngshki.name} /> </a>
                    ))
                }

                {
                    chapter === 2 &&
                    icons.map((icon, idx) => (
                        <a target='_blank' style={{textDecoration: 'none'}} href={icon.redirect}> <Card src={icon.src} name={icon.name} /> </a>
                    ))
                }

                {
                    chapter === 3 &&
                    textures.map((texture, idx) => (
                        <a target='_blank' style={{textDecoration: 'none'}} href={texture.redirect}> <Card src={texture.src} name={texture.name} /> </a>
                    ))
                }

                {
                    chapter === 4 &&
                    fonts.map((font, idx) => (
                        <a target='_blank' style={{textDecoration: 'none'}} href={font.redirect}> <Card src={font.src} name={font.name} /> </a>
                    ))
                }

                {
                    chapter === 5 &&
                    soons.map((soon, idx) => (
                        <Card src={soon.src} name={soon.name} />
                    ))
                }

            </div>

        </div>


    </div>

    
  )
}

export default Portfolio