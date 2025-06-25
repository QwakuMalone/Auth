import * as motion from "motion/react-client"
export default function FloatingShape({color, size, top, left, delay, absolute}) {
    return ( <>
        <motion.div 
        className={`absolute rounded-full ${color} ${size} ${top} ${left} opacity-20 blur-xl`}
        animate={{
            y:["0%","100%","0%"],
            x:["0%","100%","0%"],
            rotate:[0,360],
        }}

        transition={{
            duration:20,
            ease:"linear",
            repeat: Infinity,
            delay
        }}
        
        />

        
         </>
    );
   
}