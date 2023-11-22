import React from 'react'

interface InfoProps {
  year: string
  tags: infoTagProps[]
}

interface infoTagProps {
  text: string
}
const Info = ({ year, tags }: InfoProps) => {
  return (
    <div className={'mb-lg w-full md:w-1/2'}>
      <p className='font-light text-black'>{year}</p>
      <div className='flex gap-xs'>
        {tags.map((tag, index) => (
          <p className='font-light text-black' key={index}>
            {tag.text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Info
