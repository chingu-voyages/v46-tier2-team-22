import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/flavor-finds-dark.png";

function Footer() {
  const devs = [
    {
      name: "Louis Choi",
      githubLink: "https://github.com/chef-louis",
    },
    {
      name: "Hector Agudelo",
      githubLink: "https://github.com/HectorAgudelo",
    },
    {
      name: "Paula Moyano",
      githubLink: "https://github.com/pm-moyanor",
    },
    {
      name: "Valeriy Lysenko",
      githubLink: "https://github.com/Valeriusdev",
    },
  ];

  return (
    <div className="flex items-center justify-evenly flex-wrap bg-Pewter py-14">
      <div className=" p-4 flex items-start justify-start">
        <div className="flex flex-col items-start">
          <p className="text-left text-xs sm:text-sm md:text-md pb-5 pr-4">
            Built with <FontAwesomeIcon icon={faHeart} /> by:
          </p>
        </div>
        <table>
          <tbody>
            {devs.map((info, index) => (
              <tr
                className="flex justify-between text-left text-xs sm:text-sm md:text-md"
                key={index}
              >
                <td>{info.name}</td>
                <td className="pl-2">
                  <a
                    href={info.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-Cinnabar"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-sm sm:text-md md:text-lg"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
      <img src={logo} className="w-40 p-4 md:w-64 pt-12 md:pt-0"></img>
    </div>
  );
}

export default Footer;