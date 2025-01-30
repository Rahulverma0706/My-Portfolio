import { useState } from "react";
import "../../App.css";
import GitHubContributionChart from "./GithubContributions";


const Skills = () => {
  const [comments, setComments] = useState({}); // Stores comments for each image
  const imageData = [
    {
      src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      alt: "HTML",
      comment: "HTML",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      alt: "CSS",
      comment: "CSS",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
      alt: "JavaScript",
      comment: "JavaScript",
    },
    {
      src: "https://www.cdnlogo.com/logos/r/85/react.svg",
      alt: "React JS",
      comment: "React JS",
    },
    {
      src: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      alt: "Chakra UI",
      comment: "Chakra UI",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s",
      alt: "Redux",
      comment: "Redux",
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
      alt: "Node JS",
      comment: "Node JS",
    },
    {
      src: "https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png",
      alt: "Express JS",
      comment: "Express JS",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
      alt: "MongoDB",
      comment: "MongoDB",
    },
    {
      src: "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256",
      alt: "Git",
      comment: "Git",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/256/25/25231.png",
      alt: "GitHub",
      comment: "GitHub",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      alt: "VS Code",
      comment: "VS Code",
    },
    {
      src: "https://smlvqzf0a1b66cku.public.blob.vercel-storage.com/images/Vercel%20Logo-IMoeV2W33gFclXzAfZxmAHqtjBuTzP.png",
      alt: "Vercel",
      comment: "Vercel",
    },
    {
      src: "https://www.cdnlogo.com/logos/n/75/netlify.svg",
      alt: "Netlify",
      comment: "Netlify",
    },
  ];

  const handleImageClick = (index) => {
    setComments((prev) => ({ ...prev, [index]: imageData[index].comment }));
  };

  return (
    <>

    <img src="/images/DeveloperSitSkillPage.svg" alt="DeveloperSitSkillPage" 
    style={{

      position:'absolute',
      opacity:'20%',
      top:'35%',
      right:'35%'
      }} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "30px",
          margin: "50px auto",
          padding: "20px",
          maxWidth: "1200px",
        }}
      >
      
        {imageData.map((img, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor:'white',
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "auto",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            {comments[index] && (
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                {comments[index]}
              </p>
            )}
          </div>
        ))}
      </div>
      <GitHubContributionChart />
    </>
  );
};

export default Skills;
