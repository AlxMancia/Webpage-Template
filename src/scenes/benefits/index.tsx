import { HText } from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/pngFile.png'

const benefits: Array<BenefitType> = [{
  icon: <HomeModernIcon className="h-6 w-6" />,
  title: "Item 1",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab aliquid voluptate tempora quod cupiditate? Impedit doloribus hic maxime perferendis quisquam voluptatibus repellendus. In error porro, blanditiis earum accusamus aut!"
}, {
  icon: <UserGroupIcon className="h-6 w-6" />,
  title: "Item 2",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab aliquid voluptate tempora quod cupiditate? Impedit doloribus hic maxime perferendis quisquam voluptatibus repellendus. In error porro, blanditiis earum accusamus aut!"
}, {
  icon: <AcademicCapIcon className="h-6 w-6" />,
  title: "Item 3",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab aliquid voluptate tempora quod cupiditate? Impedit doloribus hic maxime perferendis quisquam voluptatibus repellendus. In error porro, blanditiis earum accusamus aut!"
}];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5 md:my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            SOME TITLE HERE
          </HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore similique odit quis consequuntur voluptas, libero sequi dolore. Perspiciatis itaque fuga perferendis totam molestias voluptatibus! Expedita sint voluptas dolor delectus.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div
          className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
        >
          {/* GRAPHIC */}
          <img
            className="mx-auto h-[400px]"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div
              className="relative"
            >
              <div
                className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"
              >
                <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ delay: 0.1, duration: 0.5 }}
                   variants={{
                     hidden: { opacity: 0, x: 70 },
                     visible: { opacity: 1, x: 0 },
                   }}
                >
                  <HText>
                    SOME SUBTITLE HERE {" "}
                    <span className="text-primary-500">SOMETHING</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, y: 70 },
               visible: { opacity: 1, y: 0 },
             }}
            >
              <p className="my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis laudantium repellendus quibusdam odit tenetur et inventore sint rerum reiciendis, optio nostrum quos, neque veniam suscipit eum explicabo fugiat harum?
              </p>
              <p className="mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem impedit voluptas magni hic fuga eos. Molestiae praesentium recusandae voluptas error, a maiores sunt, fugit asperiores, harum autem ex blanditiis.
              </p>
            </motion.div>

            {/* BUTTON */}

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                >
                  Join Now
                </ActionButton>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  )
}