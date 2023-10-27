import { ImageType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image1.jpg"
import image3 from "@/assets/image1.jpg"
import image4 from "@/assets/image1.jpg"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import { HText } from '@/shared/HText';
import { CustomImage } from './CustomImage';

const images: ImageType[] = [{
  name:"Image 1",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus dolorum maxime dolorem velit quidem nesciunt animi, consequatur id sunt sed ipsam sequi dolores, vitae corrupti eius. Illum, ut eius?",
  image: image1
},{
  name:"Image 2",
  image: image2
},{
  name:"Image 3",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus dolorum maxime dolorem velit quidem nesciunt animi, consequatur id sunt sed ipsam sequi dolores, vitae corrupti eius. Illum, ut eius?",
  image: image3
},{
  name:"Image 4",
  image: image4,
},{
  name:"Image 5",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus dolorum maxime dolorem velit quidem nesciunt animi, consequatur id sunt sed ipsam sequi dolores, vitae corrupti eius. Illum, ut eius?",
  image: image5
},{
  name:"Image 6",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus dolorum maxime dolorem velit quidem nesciunt animi, consequatur id sunt sed ipsam sequi dolores, vitae corrupti eius. Illum, ut eius?",
  image: image6
},
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export const Gallery = ({setSelectedPage}: Props) => {
  return (
    <section
      className='w-full bg-primary-100 py-40'
      id='ourclasses'
    >
      <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className='md:w-3/5'>
            <HText>
              TITLE
            </HText>
            <p className='py-5 '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quibusdam magni dicta, cum eius ea doloribus, amet accusantium animi explicabo sapiente laborum repudiandae doloremque adipisci sint dolores impedit minus? Ipsum!
            </p>
          </div>

        </motion.div>
          <div
            className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'
          >
            <ul
              className='w-[2800px] whitespace-nowrap'
            >
              {images.map((item: ImageType, index) => (
                <CustomImage 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}

              
            </ul>
          </div>
      </motion.div>
    </section>
  )
}