// import React, { FC } from 'react'
// import styled from 'styled-components'
// import { variant } from 'styled-system'
// import { usePopper } from 'react-popper';
// import { motion, AnimatePresence } from 'framer-motion'
// import css from '@styled-system/css';


// export interface PopoverProps {
//     open?: boolean
//     children?: React.ReactNode
//     ref: any
//     content?: any
//     handleClickOutside?: any
//     alignment?: "left" | "bottom" | "right" | "top"
// }




// export const PopOver: FC<PopoverProps> = (props) => {
//     const [referenceElement, setReferenceElement] = React.useState(null);
//     const [popperElement, setPopperElement] = React.useState(null);
//     const [arrowElement, setArrowElement] = React.useState(null);
//     const { styles, attributes } = usePopper(referenceElement, popperElement, {
//         modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
//     });


//     return (

//         <>
//             <button type="button" ref={setReferenceElement}>
//                 Reference element
//       </button>

//             <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
//                 Popper element
//             <div ref={setArrowElement} style={styles.arrow} />
//             </div>
//         </>
//         // <BasePopOver {...props} >
//         //     <>
//         //         <div ref={setReferenceElement}>yo</div>
//         //         {props.children}
//         //         <AnimatePresence>
//         //                 <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
//         //                     <Content
//         //                         initial={{ y: -10 }}
//         //                         animate={{ y: 0 }}
//         //                         exit={{ display: 'none' }}
//         //                         transition={{ ease: "easeOut", duration: .2 }}
//         //                         alignment={props.alignment}
//         //                     >
//         //                         {props.content}
//         //                     </Content>
//         //                 </div>
//         //         </AnimatePresence>
//         //     </>
//         // </BasePopOver >
//     )
// }

// const BasePopOver = styled(motion.div)<PopoverProps>(
//     {},
//     css({
//         position: 'relative',
//         whiteSpace: 'nowrap'
//     }),
// )

// const Content = styled(motion.div)<PopoverProps>(
//     {
//         position: 'absolute',
//         zIndex: 10000,
//     },
//     variant({
//         prop: 'alignment',
//         variants: {
//             top: {
//                 top: "0px"
//             },
//             bottom: {
//                 bottom: "0px"
//             },
//             left: {
//                 left: "0px"
//             },
//             right: {
//                 right: "0px"
//             }
//         }
//     }),

// )



