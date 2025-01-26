"use client"

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 50,
    fill: '#8884d8',
  },
  {
    name: 'Boys',
    count: 50,
    fill: '#83a6ed',
  },
];

const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full'>
            <div className='flex justify-between items-center px-4 py-2'>
                <h1 className='text-lg font-semibold'>Student</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar
                        background
                        dataKey="count"
                    />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src={'/maleFemale.png'} alt={''} width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/* Bottom */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full'> </div>
                    <h1 className='font-bold'>1,234</h1>
                    <h1 className='text-xs text-gray-300'>Boys (55%)</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h1 className='text-xs text-gray-300'>Girls (45%)</h1>
                </div>
            </div>
        </div>
    )
};

export default CountChart;