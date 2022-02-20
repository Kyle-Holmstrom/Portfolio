import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUtensils, faBookOpen, faMugHot } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    const project = [
        {
            title: "OOP/Classes",
            subtitle: "Made with Python",
            description:
              "This is a small command line application displaying object oriented programing in python. I created a restaurant application that will display what is on the menu based on the time you select",
            image: faBookOpen,
            link: "https://github.com/Kyle-Holmstrom/Basta_Fazoolin",
          }, 
          {
            title: "Tea Cozy",
            subtitle: "Made With HTML, CSS",
            description:
              "The tea cozy is a fictional coffee shop designed with html and css",
            image: faMugHot,
            link: "https://github.com/Kyle-Holmstrom/TheTeaCozy",
          },
          {
            title: "Coffee Bot",
            subtitle: "Made with Python",
            description:
              "Friendly coffee bot designed to take your order when you arrive at a coffee shop!",
            image: faRobot,
            link: "https://github.com/Kyle-Holmstrom/CoffeeBot/blob/main/CoffeeBot.py",
          },
          {
            title: "Restaurant Locator",
            subtitle: "Made with React",
            description:
              "It uses the yelp api to search for local restaurants based on what your craving!",
            image: faUtensils,
            link: "https://github.com/Kyle-Holmstrom/Ravenous",
          },
    ]
    
    return (
        <section id="project" className="text-gray-400 bg-gray-900">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <span className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="text-slate-100 font-mono flex justify-center text-4xl leading-loose">
                    Apps I've Built
                    </h1>
                    <p className="mx-4 text-gray-400 font-serif flex justify-center text-xl leading-relaxed pb-2">
                    I have created applications that range from a CLI's to front end web sites and 
                    I have also created databases that connect to the frontend. Here are a
                    few examples you can look at it!. The rest of my projects can be found on GitHub.
                    </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {project.map((myProject) => (
                <a
                    href={myProject.link}
                    key={myProject.image}
                    rel="noreferrer"
                    target="_blank"
                    className="sm:w-1/2 w-100 p-4">
                    <div className="flex relative">
                    <FontAwesomeIcon className="text-gray-300 absolute inset-0 w-full h-full object-cover object-center" 
                        icon={myProject.image} />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm font-serif title-font font-medium text-green-400 mb-1">
                        {myProject.subtitle}
                        </h2>
                        <h1 className="title-font text-lg font-medium font-mono text-slate-100 mb-3">
                        {myProject.title}
                        </h1>
                        <p className="text-gray-400 font-serif leading-relaxed">{myProject.description}</p>
                    </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
        <h2 className="font-serif text-gray-400 leading-relaxed text-lg py-12 flex justify-center">Take a look at all of my projects on 
            <a href="https://github.com/Kyle-Holmstrom?tab=repositories" rel="noreferrer" target="_blank"
            className="pl-1 text-xl font-serif text-emerald-400">GitHub</a>!</h2>
    </section>
    )
}
export default Projects;