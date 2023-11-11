<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
=======
import React from 'react';
import darkLogo from "../images/flavor-finds-dark.png"
export const Footer = () => {
  const developers = "developers";
  const githubLinks = [
    <a href="https://github.com/chef-louis" target="_blank" rel="noopener noreferrer" className="font-semibold">Louis Choi</a>,
    <a href="https://github.com/HectorAgudelo" target="_blank" rel="noopener noreferrer" className="font-semibold">Hector Agudelo</a>,
    <a href="https://github.com/pm-moyanor" target="_blank" rel="noopener noreferrer" className="font-semibold">Paula Moyano</a>,
    <a href="https://github.com/Valeriusdev" target="_blank" rel="noopener noreferrer" className="font-semibold">Valeriy Lysenko</a>    
>>>>>>> 163b929 (]add footer logo)
  ];

  return (
    <div className="flex items-center bg-Pewter py-14">
      <div className="w-full p-4 pl-20 md:pl-30 lg:md:pl-40 flex items-start justify-start">
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
      <img src={darkLogo} alt="logo" className='w-36'></img>
    </div>
  );
}

export default Footer;
