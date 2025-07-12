
"use client"
import {motion} from 'framer-motion';
import {paths} from '@/app/components/paths'
import { useMemo } from 'react';

export default function SVG() {
const colors = [
  "#fcff4e", "#727160", "#82aaa9", "#7ce869", "#bff003", "#e07463", "#e48b1e",
  "#fff350", "#33dd50", "#2238be", "#1afbbd", "#878962", "#537c21", "#d3373e",
  "#87fd76", "#caf865", "#710e80", "#4195a3", "#094a4f", "#815c39", "#2a2350",
  "#3063f4", "#d97178", "#41245b", "#7bf53b", "#3b90bb", "#634f36", "#f4eecf",
  "#5921f7", "#56d796", "#d66dcf", "#325a60", "#34e66a", "#fa0029", "#990ac3",
  "#b19647", "#020470", "#388a61", "#a11394", "#636301", "#9a1ca8", "#490b2e",
  "#119de5", "#64eec8", "#39e954", "#6ad711", "#8b0e86", "#2f079e", "#9f0415",
  "#be5159", "#dd69ad", "#0a839b", "#e95980", "#3d8c56", "#a5750c", "#db2900",
  "#ec500c", "#b48781", "#aced8d", "#12b84e", "#16e169", "#602fdd", "#b10414",
  "#9f5fc0", "#b378b4", "#608d7f", "#b4cb50", "#9df687", "#82d3c9", "#2f6e1f",
  "#9b0b70", "#06b2c9", "#527eb1", "#988fd2", "#bb9a73", "#e39e7b", "#1d387c",
  "#e7e90a", "#2f17df", "#8cdb3a", "#720f90", "#d70ffa", "#567fc0", "#7ff361",
  "#16ed5f", "#8f2ae4", "#600ff9", "#99c6c5", "#e4a270", "#180c7f", "#dd2ec8",
  "#6b2c25", "#be8e0b", "#a64af9", "#d826f7", "#0020a6", "#36760a", "#f1ffa4",
  "#bed4df", "#c2c408", "#bea2f6", "#df5100", "#de0854", "#9abfdc", "#f9c176",
  "#6dfce2", "#c3fe63", "#8eefa5", "#0e536f", "#da1287", "#957597", "#8656b1",
  "#5cfed4", "#35ae43", "#77c9b2", "#607435", "#f0922b", "#dd332c", "#5f7a61",
  "#ebfcc8", "#065d0c", "#9695ef", "#0a7ee3", "#ff0c65", "#b63967", "#484d87",
  "#1cf3a7", "#71f574", "#1edd4e", "#874075", "#bd0db7", "#1a2d09", "#8af806",
  "#2f9bd6", "#527962", "#87c1a1", "#23a2fb", "#53c1a9", "#9e53f7", "#5be11e",
  "#786b38", "#870c78", "#d93bb2", "#00be15", "#7fc9cb", "#0fc7f7", "#a18edd",
  "#ec5787", "#59bb7d", "#780944", "#2851a7", "#c3a827", "#da9153", "#f797a7",
  "#9e61d9", "#d9ab5f", "#0bbf94", "#5a31af", "#4277ad", "#c4141f", "#eb5f6b",
  "#4a39e2", "#e38401", "#97a5b2", "#38b333", "#bd94e9", "#1b433a", "#a92a55",
  "#de30a0", "#951a64", "#3eddc3", "#b8e0a7", "#0672b7", "#f595c0", "#1fe514",
  "#b58162", "#771eab", "#b64c10", "#07a9d5", "#1d0808", "#c2861e", "#c3fa5c",
  "#97992c", "#931951", "#652309", "#0dfb13", "#42faca", "#59f87c", "#791256",
  "#046c4e", "#6be675", "#8058a7", "#c28854", "#e4add9", "#b30a46", "#43c92d",
  "#36793a", "#9bb751", "#434b45", "#0697f6", "#5001dd", "#4d043d", "#2d12f3",
  "#465fa2", "#b75aeb", "#d8a6c3", "#b454a9", "#aa9d90", "#b30e1e", "#3028c3",
  "#b017dc", "#188987", "#7483ec", "#face9c", "#5621a1", "#b4ad2d", "#5ce707",
  "#df3385", "#4b0c2d", "#3ea468", "#f66da2", "#bcb611", "#3c3b2d", "#005835",
  "#1909a5", "#075125", "#f4091c"
];

const delays = useMemo(() =>
  paths.map(() => ({
    delay: Math.random() * 10,
    repeatDelay: Math.random() * 10 + 2,
  })),
  []
)

const renderpaths=useMemo(()=>(
  paths.map((path,idx)=>(
          <motion.path
          d={path}
          stroke={colors[idx]}
          strokeWidth={1.5}
          fill="blue"
          initial={{strokeDashoffset:800,strokeDasharray:"100 800"}}
          animate={{
            strokeDashoffset:0,
            strokeDasharray:"200 800",
            opacity:[0,1,1,0]
          }}
          transition={{
             duration: 10,
             ease: "easeInOut",
             repeat:Infinity,
             repeatType:"loop",
             delay: delays[idx].delay,
             repeatDelay: delays[idx].repeatDelay
             }}
            layout={false}
          key={idx}
        />
      ))
    ),[paths,delays])

  return (
     <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      strokeWidth="10"
      className="inset-96 top-0 -z-10 py-30 sm:py-10 sm:absolute"
    >
      <motion.g        
      >
       {renderpaths}   
      </motion.g>
    </motion.svg>
  );
}
