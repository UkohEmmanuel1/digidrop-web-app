import React from 'react'

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center">
    <div className="border-gray-100 border text-gray-200 px-1 py-1 rounded-lg text-lg font-bold w-10 text-center">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);


export default TimeBox