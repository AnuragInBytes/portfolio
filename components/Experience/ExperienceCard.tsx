
interface ExperienceCardProp {
  duration: string,
  designation: string,
  company: string,
  bio: string,
  listItems: string[],
  skills: string[]
}

const ExperienceCard: React.FC<ExperienceCardProp> = ({ duration, designation, company, bio, listItems, skills }) => {
  return (
    <div className="border rounded-xl px-5 py-6 mb-10">
      <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {duration}
      </h4>
      <h5 className="text-lg font-semibold tracking-tighter text-gray-800 dark:text-gray-200">{designation}</h5>
      <h5 className="text-lg font-semibold tracking-tighter text-gray-600 dark:text-gray-400">{company}</h5>
      <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">{bio}</p>
      <br />
      <ul className="list-disc list-inside">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="pt-4 flex md:flex-row flex-wrap">
        {skills.map((skill) => (
          <span className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-100  mr-2 px-1" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard;