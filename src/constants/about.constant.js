import MobileImage from '../assets/images/icon-app.svg'
import WebImage from '../assets/images/icon-dev.svg'
import PhotographyImage from '../assets/images/icon-photo.svg'
import WebDesignImage from '../assets/images/icon-design.svg'
import Logo2 from '../assets/images/logo-2-color.png'
import Logo3 from '../assets/images/logo-3-color.png'
import Logo4 from '../assets/images/logo-4-color.png'
import Logo5 from '../assets/images/logo-5-color.png'
import Logo6 from '../assets/images/logo-6-color.png'
import Avator1 from '../assets/images/avatar-1.png'
import Avator2 from '../assets/images/avatar-2.png'
import Avator3 from '../assets/images/avatar-3.png'
import Avator4 from '../assets/images/avatar-4.png'
import Blog1 from '../assets/images/blog-1.jpg'
import Blog2 from '../assets/images/blog-2.jpg'
import Blog3 from '../assets/images/blog-3.jpg'
import Blog4 from '../assets/images/blog-4.jpg'
import Blog5 from '../assets/images/blog-5.jpg'
import Blog6 from '../assets/images/blog-6.jpg'

/* about page start*/


const services = [{
  title: "Web Development",
  description: "High-quality development of sites at the professional level.",
  image: WebImage,
  button: "More"
}, {
  title: "Mobile apps",
  description: " Professional development of applications for iOS and Android.",
  image: MobileImage,
  button: "Help"
}, {
  title: "Photography",
  description: "I make high-quality photos of any category at a professional level.",
  image: PhotographyImage,
  button: "Show"
}, {
  title: "Web design",
  description: "The most modern and high-quality design made at a professional level.",
  image: WebDesignImage,
  button: "View"
}
]

const clientLogos = [
  Logo2, Logo3, Logo4, Logo5, Logo6
]

const testimonials = [{
  name: "Daniel lewis",
  avatar: Avator1,
  review: " Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
},

{
  name: "Jessica miller",
  avatar: Avator2,
  review: " Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
},
{
  name: "Michael davis",
  avatar: Avator3,
  review: " Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
},
{
  name: "Steven smith",
  avatar: Avator4,
  review: " Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
},
]
/* about page end*/




/* resume page start*/
const education = [
  {
   
    title: "University school of the arts",
    date: "2007 — 2008",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
  }, {
    
    title: "New york academy of art",
    date: "2006 — 2007",
    description: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.."
  }, {
   
    title: "High school of art and design",
    date: "2002 — 2004",
    description: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."


  }
]
const experience = [
  {
   
    title: "Creative director",
    date: "2015 — Present",
    description: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
  }, {
    
    title: "Art director",
    date: "2013 — 2015",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur"
  }, {
   
    title: "Web designer",
    date: "2010 — 20134",
    description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
  }
]
const skills =[
  {
    title: "Web design",
    value: "80%"
  },{
    title: "Web development",
    value: "70%"
  },{
    title: "Photography",
    value: "90%"
  },{
    title: "Mobile apps",
    value: "85%"}
]


/* resume page end*/




/* blog page start*/
const blogpost = [
  {
    title: "Design conferences in 2022",
    description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    image: Blog1

  }, {
    title: "Best fonts every designer",
    description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    image: Blog2
  }, {
    title: "Design conferences in 2022",
    description: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    image: Blog3

  }, {
    title: "Design conferences in 2022",
    description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    image: Blog4

  }, {
    title: "Design conferences in 2022",
    description: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Blog5

  }, {
    title: "Design conferences in 2022",
    description: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
    image: Blog6

  }
]
/* blog page start*/

 
  export { services, clientLogos, testimonials, blogpost ,education  , experience, skills }