import Image from "next/image";
import TechChip from '@components/TechChip';
import TapedImage from '@components/TapedImage';

function replaceTechKeywordsWithLinks(paragraph, techArray) {
    // Split the paragraph into words
    const words = paragraph.split(' ');
  
    // Iterate through each word in the paragraph
    const replacedWords = words.map((word) => {
      // Check if the word matches any technology title
      const tech = techArray.find((tech) => tech.title.toLowerCase() === word.toLowerCase());
  
      // If a matching technology is found, create a link
      if (tech) {
        return `<a href="${tech.link}" class="blue_gradient" target="_blank" rel="noopener noreferrer">${word}</a>`;
      }
  
      // If no matching technology is found, return the word as-is
      return word;
    });
  
    // Join the words back into a paragraph
    const replacedParagraph = replacedWords.join(' ');
  
    return replacedParagraph;
  }

const ProjectCard = ({project}) => {
  return (
    <div className="flex flex-col items-center hand-drawn-border max-w-4xl">
      <div className="flex flex-col items-center my-10 mx-4">
          <TapedImage imageUrl={project.imagePath} className='my-10'/>
        <div className="flex flex-col items-center">
            <div className="text-center">
            </div>
            <div>
                <h1 className="text-3xl text-center mb-2">
                  {project.description}
                </h1>
            </div>
            <div className="flex">
            {
              project.technologies.map((technology, index) => (
                <TechChip key={index} technology={technology} />))
            }

            </div>
        </div>
        <div> <a className="blue_gradient"> links </a>links </div>

      </div>
        
    </div>
  )
}

export default ProjectCard