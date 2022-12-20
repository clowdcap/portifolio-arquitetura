import React from 'react'


import './gallery.css'

import PageArrow from './../pageArrow/PageArrow'
import PageNumb from './../pageNumb/PageNumb'
import TitlePage from '../titlepage/TitlePage'

import Image_Gallery_1 from './../../assets/gallery-1.png'
import Image_Gallery_2 from './../../assets/gallery-2.png'
import Image_Gallery_3 from './../../assets/gallery-3.png'
import Image_Gallery_4 from './../../assets/gallery-4.png'
import Image_Gallery_5 from './../../assets/gallery-5.png'
import Image_Gallery_6 from './../../assets/gallery-6.png'
import Image_Gallery_7 from './../../assets/gallery-7.png'
import Image_Gallery_8 from './../../assets/gallery-8.png'
import Image_Gallery_9 from './../../assets/gallery-9.png'
import Image_Gallery_10 from './../../assets/gallery-10.png'

const Gallery = () => {

    const data_gallery = [
        { 
            id: 1,
            imgurl: Image_Gallery_1
        },
        { 
            id: 2,
            imgurl: Image_Gallery_2
        },
        { 
            id: 3,
            imgurl: Image_Gallery_3
        },
        { 
            id: 4,
            imgurl: Image_Gallery_4
        },
        { 
            id: 5,
            imgurl: Image_Gallery_5
        },
        { 
            id: 6,
            imgurl: Image_Gallery_6
        },
        { 
            id: 7,
            imgurl: Image_Gallery_7
        },
        { 
            id: 8,
            imgurl: Image_Gallery_8
        },
        { 
            id: 9,
            imgurl: Image_Gallery_9
        },
        { 
            id: 1,
            imgurl: Image_Gallery_10
        },
    ]

    return (
    <section className="gallery">
        <div className="container__gallery center">
            <div className="title__gallery">
                <TitlePage up="Galeria" down="de Projetos" />
            </div>

            <hr />
            <div className="images__gallery">
                
                {data_gallery.map(data => (
                    <img key={data.id} src={data.imgurl} alt="This is a projects totality" />
                ))}

            </div>

            <ul className="compos">
                <li><PageArrow /></li>
                <li><PageNumb num_page='1' num_pages='1'/></li>
            </ul>

        </div>
    </section>
    )
}

export default Gallery