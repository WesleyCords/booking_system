import Typewriter from 'typewriter-effect'

const Letters = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="mb-2 font-medium text-gray-500">Construído com:</h2>
      <div className="text-primary text-2xl font-bold">
        <Typewriter
          options={{
            strings: [
              'React + Vite',
              'Redux Toolkit',
              'Node.js & Express',
              'PostgreSQL',
              'Docker',
              'Tailwind CSS',
              'TypeScript',
              'Shadcn UI',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      </div>
    </div>
  )
}

export default Letters
