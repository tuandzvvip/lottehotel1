import React from 'react'
import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    var heroData = [
        {
          id: 1,
          image: require('../../assets/images/img1.webp'),
          title: 'The perfect design for your website',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.google.com'
        },
        {
          id: 2,
          image: require('../../assets/images/img2.jpg'),
          title: 'Start Your Future Financial Plan',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.facebook.com'
        },
        {
          id: 3,
          image: require('../../assets/images/img1.webp'),
          title: 'Enjoy the Difference',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
          link: 'https://www.twitter.com'
        }
      ]
  return (
    <div className="containerslide">
        <div className="slide">
        <Carousel>
        {
            heroData.map(hero => {
                return(
                    <Carousel.Item key={hero.id}>
                    <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                    />
                    
                  </Carousel.Item>
                )
            })
        }

    </Carousel>
        </div>     
    </div>
  )
}

export default Slider