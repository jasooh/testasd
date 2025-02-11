// Components
import SectionButton from "./SectionButton";
import AnimatedText from "./AnimatedText";

export default function FixedName() {
  // Button logic
  const onClickSummary = () => {
    document.getElementById("summary")?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="w-fit h-fit mb-20 text-theme-gray xl:fixed static">
      {/* Title tags */}
      <p className="mb-1 text-xl">Hey, I'm</p>
      <h1 className="mb-2 text-theme-bg font-black italic xl:text-7xl text-5xl theme-white-outline">
        JUSTIN <br /> ABUYUAN
      </h1>
      <h2 className="mb-10 text-lg">
        Engineering Student @ the{" "}
        <span className="text-theme-main font-semibold">
          University of Waterloo
        </span>
        .
      </h2>

      {/* Changing text */}
      <AnimatedText />

      {/* Navigation buttons */}
      <div className="flex flex-col items-start">
        <SectionButton sectionIndex={0} onClick={onClickSummary}>
          SUMMARY
        </SectionButton>
        <SectionButton sectionIndex={1} onClick={onClickExperience}>
          EXPERIENCE
        </SectionButton>
        <SectionButton sectionIndex={2} onClick={onClickProjects}>
          PROJECTS
        </SectionButton>
        <SectionButton sectionIndex={3} onClick={onClickContact}>
          CONTACT
        </SectionButton>
      </div>
    </article>
  );
}
