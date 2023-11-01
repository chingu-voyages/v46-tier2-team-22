import React from 'react';

export const Footer = () => {
  const developers = "developers";
  const githubLinks = [
    <a href="https://github.com/chef-louis" target="_blank" rel="noopener noreferrer" className="font-semibold">Louis Choi</a>,
    <a href="https://github.com/HectorAgudelo" target="_blank" rel="noopener noreferrer" className="font-semibold">Hector Agudelo</a>,
    <a href="https://github.com/pm-moyanor" target="_blank" rel="noopener noreferrer" className="font-semibold">Paula Moyano</a>,
    <a href="https://github.com/Valeriusdev" target="_blank" rel="noopener noreferrer" className="font-semibold">Valeriy Lysenko</a>    
  ];

  return (
    <div className="flex items-center bg-Pewter py-14">
      <div className="w-1/2 p-4 pl-40">
        <div className="flex items-start justify-start"> 
          <div className="flex flex-col items-start">
            <p className="text-left text-lg font-bold pb-5 pr-5">{developers}</p> 
          </div>
          <ul className="text-left text-lg">
            {githubLinks.map((link, index) => (
              <li key={index}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
