import svgPaths from "./svg-ic2u91dj0f";
import imgPic from "figma:asset/f85cf45511cd2ba02a83d564218d6500a134a91d.png";
import imgPic1 from "figma:asset/8781bda67a25952db5724f48492cd455a6e81952.png";
import imgIconPostgresql from "figma:asset/037a513d56d029729e044d6a8e68e68025aaf0c2.png";
import imgPicture from "figma:asset/13a157f2d0bfafa5cbd6a89dfe634a542f95ebd2.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-j3g4q";

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">{` `}</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">Work</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">Testimonials</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">Contact</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2eea8bc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 2V4" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 20V22" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.93 4.93L6.34 6.34" id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.66 17.66L19.07 19.07" id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 12H4" id="Vector_6" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 12H22" id="Vector_7" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.34 17.66L4.93 19.07" id="Vector_8" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19.07 4.93L17.66 6.34" id="Vector_9" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#111827] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f9fafb] text-[16px]">Download CV</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Actions">
      <IconButton />
      <Button />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Navigation">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[24px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Divider" stroke="var(--stroke-0, #F3F4F6)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Actions />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] text-center tracking-[-0.6px] whitespace-nowrap">
            <p className="leading-[36px]">{`<SS />`}</p>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[16px] relative w-full">
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0)] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[#111827] text-[60px] tracking-[-1.2px]">Hi, I’m Sagar 👋</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-[768px] whitespace-pre-wrap">{`I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.`}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a08480} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">Ahmedabad, India</p>
    </div>
  );
}

function IconDotEmerald() {
  return <div className="bg-[#10b981] rounded-[20px] shrink-0 size-[8px]" data-name="icon-dot-emerald-500" />;
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <IconDotEmerald />
    </div>
  );
}

function Hire() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Hire">
      <Icon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">Available for new projects</p>
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Group">
      <Location />
      <Hire />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon5 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton1 />
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions">
      <Links />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center max-w-[768px] overflow-clip relative self-stretch shrink-0" data-name="Column">
      <Content />
      <Group />
      <Actions1 />
    </div>
  );
}

function Background() {
  return <div className="bg-[#e5e7eb] border-8 border-solid border-white col-1 h-[320px] ml-[40px] mt-[40px] row-1 w-[280px]" data-name="Background" />;
}

function Pic() {
  return (
    <div className="col-1 h-[320px] ml-0 mt-0 pointer-events-none relative row-1 w-[280px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPic} />
      <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0" />
    </div>
  );
}

function PicContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Pic Container">
      <Background />
      <Pic />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-[384px] relative self-stretch" data-name="Column">
      <PicContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-wrap gap-[48px] items-start px-[32px] relative w-full">
        <Column />
        <Column1 />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[80px] py-[96px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">About me</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row1 />
    </div>
  );
}

function Background1() {
  return <div className="bg-[#e5e7eb] border-8 border-[#f9fafb] border-solid col-1 h-[480px] ml-0 mt-[40px] row-1 w-[400px]" data-name="Background" />;
}

function Pic1() {
  return (
    <div className="col-1 h-[480px] ml-[40px] mt-0 pointer-events-none relative row-1 w-[400px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPic1} />
      <div aria-hidden="true" className="absolute border-8 border-[#f9fafb] border-solid inset-0" />
    </div>
  );
}

function PicContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Pic Container">
      <Background1 />
      <Pic1 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[444px] overflow-clip relative self-stretch" data-name="Column">
      <PicContainer1 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">B.E. in Computer Engineering</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Full time freelancer</span>
        </li>
      </ul>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Avid learner</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Aspiring indie hacker</span>
        </li>
      </ul>
    </div>
  );
}

function Checklist() {
  return (
    <div className="content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Checklist">
      <Column4 />
      <Column5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Content">
      <p className="leading-[0] min-w-full relative shrink-0 text-[0px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[24px]">{`I'm a passionate, `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] underline" href="https://www.figma.com/@shahsagarm">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://www.figma.com/@shahsagarm">
            self-proclaimed designer
          </span>
        </a>
        <span className="leading-[24px]">{` who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</span>
      </p>
      <p className="leading-[24px] min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.`}</p>
      <p className="leading-[24px] min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
      <p className="leading-[0] min-w-full relative shrink-0 text-[0px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[24px]">{`When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] underline" href="https://twitter.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://twitter.com/shahsagarm">
            Twitter
          </span>
        </a>
        <span className="leading-[24px]">{` where I share tech-related bites and build in public, or you can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] underline" href="https://github.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[24px]" href="https://github.com/shahsagarm">
            GitHub
          </span>
        </a>
        <span className="leading-[24px]">.</span>
      </p>
      <p className="leading-[24px] relative shrink-0">Finally, some quick bits about me.</p>
      <Checklist />
      <p className="leading-[24px] min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉`}</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[444px] not-italic overflow-clip relative self-stretch" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[#111827] text-[30px] tracking-[-0.6px]">Curious about me? Here you have it:</p>
      <Content1 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-wrap gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column2 />
      <Column3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[32px] relative w-full">
          <Row />
          <Row2 />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="About">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[80px] py-[96px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Skills</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag1 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full whitespace-pre-wrap">The skills, tools and technologies I am really good at:</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row4 />
      <Row5 />
    </div>
  );
}

function IconJavscript() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-javscript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-javscript">
          <path d="M0 64V0H64V64H0Z" fill="var(--fill-0, #FFD600)" id="Vector" />
          <path d={svgPaths.p2d35d500} fill="var(--fill-0, #000001)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconJavscript />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Javascript</p>
    </div>
  );
}

function IconTypescript() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-typescript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_3_1141)" id="icon-typescript">
          <path d={svgPaths.p1f6e0680} fill="var(--fill-0, #3178C6)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pc96a1c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1141">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTypescript />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Typescript</p>
    </div>
  );
}

function IconReact() {
  return (
    <div className="h-[64px] relative shrink-0 w-[69.818px]" data-name="icon-react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8182 64">
        <g clipPath="url(#clip0_3_1065)" id="icon-react">
          <path d={svgPaths.p87cd200} fill="var(--fill-0, #087EA4)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p1f807d00} id="Vector_2" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p1dda2800} id="Vector_3" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p36c55b00} id="Vector_4" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_1065">
            <rect fill="white" height="64" width="69.8182" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-end overflow-clip relative shrink-0" data-name="Tech">
      <IconReact />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">React</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.067px_-1.067px] mask-size-[64px_64px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-4.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.8667 67.8667">
          <g id="Group">
            <path d={svgPaths.p18907f00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="6" />
            <path d={svgPaths.p116cf100} fill="url(#paint0_linear_3_1081)" id="Vector_2" />
            <path d={svgPaths.p1159fd00} fill="url(#paint1_linear_3_1081)" id="Vector_3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1081" x1="40.6889" x2="53.3111" y1="43.3556" y2="59">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_1081" x1="44.9556" x2="44.8841" y1="21.1333" y2="39.9333">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function IconNextjs() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="icon-nextjs">
      <MaskGroup />
    </div>
  );
}

function Tech3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNextjs />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Next.js</p>
    </div>
  );
}

function IconNodejs() {
  return (
    <div className="h-[64px] relative shrink-0 w-[56.32px]" data-name="icon-nodejs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.32 64">
        <g clipPath="url(#clip0_3_1089)" id="icon-nodejs">
          <path d={svgPaths.p53deb80} fill="var(--fill-0, #5FA04E)" id="Vector" />
          <path d={svgPaths.p3c1dba00} fill="var(--fill-0, #5FA04E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1089">
            <rect fill="white" height="64" width="56.32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNodejs />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Node.js</p>
    </div>
  );
}

function IconExpress() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-express">
          <path d={svgPaths.p371d6d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconExpress />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Express.js</p>
    </div>
  );
}

function IconNest() {
  return (
    <div className="h-[64px] relative shrink-0 w-[66.065px]" data-name="icon-nest">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0645 64">
        <g id="icon-nest">
          <path clipRule="evenodd" d={svgPaths.p205a96a0} fill="var(--fill-0, #E0234E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNest />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Nest.js</p>
    </div>
  );
}

function IconSocket() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-socket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_3_1078)" id="icon-socket">
          <path d={svgPaths.p1bc09400} fill="var(--fill-0, #010101)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1078">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSocket />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Socket.io</p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <Tech />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech7 />
      </div>
    </div>
  );
}

function Tech8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <div className="h-[64px] relative shrink-0 w-[62.047px]" data-name="icon-postgresql">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconPostgresql} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">PostgreSQL</p>
    </div>
  );
}

function IconMongodb() {
  return (
    <div className="h-[64px] relative shrink-0 w-[29.767px]" data-name="icon-mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7674 64">
        <g clipPath="url(#clip0_3_1086)" id="icon-mongodb">
          <path d={svgPaths.p15611b00} fill="var(--fill-0, #00684A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1086">
            <rect fill="white" height="64" width="29.7674" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconMongodb />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">MongoDB</p>
    </div>
  );
}

function IconSass() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-sass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-sass">
          <path d={svgPaths.p2482be00} fill="var(--fill-0, #F06292)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSass />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Sass/Scss</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_1.82%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[104.727px_62.836px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.727 62.8364">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p83e5e00} fill="var(--fill-0, #38BDF8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0_1.82%_0]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function IconTailwindcss() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-[104.727px]" data-name="icon-tailwindcss">
      <ClipPathGroup />
    </div>
  );
}

function Tech11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTailwindcss />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Tailwindcss</p>
    </div>
  );
}

function IconFigma() {
  return (
    <div className="h-[64px] relative shrink-0 w-[42.667px]" data-name="icon-figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6667 64">
        <g clipPath="url(#clip0_3_1054)" id="icon-figma">
          <path d={svgPaths.p168cd580} fill="var(--fill-0, #1ABCFE)" id="Vector" />
          <path d={svgPaths.p1a5faa00} fill="var(--fill-0, #0ACF83)" id="Vector_2" />
          <path d={svgPaths.p3a905b00} fill="var(--fill-0, #FF7262)" id="Vector_3" />
          <path d={svgPaths.p14877f80} fill="var(--fill-0, #F24E1E)" id="Vector_4" />
          <path d={svgPaths.p18f9a280} fill="var(--fill-0, #A259FF)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_3_1054">
            <rect fill="white" height="64" width="42.6667" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconFigma />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Figma</p>
    </div>
  );
}

function IconCypress() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-cypress">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_3_1046)" id="icon-cypress">
          <path d={svgPaths.p1b477700} fill="var(--fill-0, #58D09E)" id="Vector" />
          <path d={svgPaths.p2d90c5c0} fill="var(--fill-0, #58D09E)" id="Vector_2" />
          <path d={svgPaths.pdb9a300} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p141ef200} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p391c9c00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1fb74c80} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_3_1046">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconCypress />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Cypress</p>
    </div>
  );
}

function IconStorybook() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-storybook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-storybook">
          <path clipRule="evenodd" d={svgPaths.p344dd080} fill="var(--fill-0, #FF4081)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p30514380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconStorybook />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Storybook</p>
    </div>
  );
}

function IconGit() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-git">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-git">
          <path d={svgPaths.p8fbe180} fill="var(--fill-0, #F4511E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconGit />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">Git</p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <Tech8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech12 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech14 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech15 />
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Row">
      <Row7 />
      <Row8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start px-[32px] relative w-full">
          <Row3 />
          <Row6 />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Skills">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Experience</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag2 />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full whitespace-pre-wrap">Here is a quick summary of my most recent experiences:</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row10 />
      <Row11 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function LogoUpwork() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup1 />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <LogoUpwork />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Ut pretium arcu et massa semper, id fringilla leo semper.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[384px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full whitespace-pre-wrap">Sr. Frontend Developer</p>
      <Column8 />
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px]">Nov 2021 - Present</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column6 />
      <Column7 />
      <Column9 />
    </div>
  );
}

function Row12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[896px]" data-name="Row">
      <Row13 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function LogoUpwork1() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup2 />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <LogoUpwork1 />
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[384px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full whitespace-pre-wrap">Team Lead</p>
      <Column12 />
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px]">Jul 2017 - Oct 2021</p>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column10 />
      <Column11 />
      <Column13 />
    </div>
  );
}

function Row14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[896px]" data-name="Row">
      <Row15 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function LogoUpwork2() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup3 />
    </div>
  );
}

function Column14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <LogoUpwork2 />
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <li className="ms-[24px] whitespace-pre-wrap">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[384px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[20px] w-full whitespace-pre-wrap">Full Stack Developer</p>
      <Column16 />
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px]">Dec 2015 - May 2017</p>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column14 />
      <Column15 />
      <Column17 />
    </div>
  );
}

function Row16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[896px]" data-name="Row">
      <Row17 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] relative w-full">
          <Row9 />
          <Row12 />
          <Row14 />
          <Row16 />
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Experience">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Work</p>
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag3 />
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full whitespace-pre-wrap">Some of the noteworthy projects I have built:</p>
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row19 />
      <Row20 />
    </div>
  );
}

function Picture() {
  return (
    <div className="flex-[1_0_0] h-[384px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)]" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column18() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[48px] relative size-full">
          <Picture />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-r border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">React</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Next.js</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Typescript</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Nest.js</p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">PostgreSQL</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Tailwindcss</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Figma</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Cypress</p>
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Storybook</p>
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Git</p>
    </div>
  );
}

function Technologies() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag4 />
      <Tag5 />
      <Tag6 />
      <Tag7 />
      <Tag8 />
      <Tag9 />
      <Tag10 />
      <Tag11 />
      <Tag12 />
      <Tag13 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon6 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton4 />
    </div>
  );
}

function Column19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-hidden relative shrink-0 text-[#111827] text-[20px] text-ellipsis w-full whitespace-nowrap">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function Row21() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[1152px]" data-name="Row">
      <Column18 />
      <Column19 />
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">React</p>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Next.js</p>
    </div>
  );
}

function Tag16() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Typescript</p>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Nest.js</p>
    </div>
  );
}

function Tag18() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">PostgreSQL</p>
    </div>
  );
}

function Tag19() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Tailwindcss</p>
    </div>
  );
}

function Tag20() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Figma</p>
    </div>
  );
}

function Tag21() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Cypress</p>
    </div>
  );
}

function Tag22() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Storybook</p>
    </div>
  );
}

function Tag23() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Git</p>
    </div>
  );
}

function Technologies1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag14 />
      <Tag15 />
      <Tag16 />
      <Tag17 />
      <Tag18 />
      <Tag19 />
      <Tag20 />
      <Tag21 />
      <Tag22 />
      <Tag23 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon7 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton5 />
    </div>
  );
}

function Column20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-hidden relative shrink-0 text-[#111827] text-[20px] text-ellipsis w-full whitespace-nowrap">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies1 />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function Picture1() {
  return (
    <div className="flex-[1_0_0] h-[384px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)]" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column21() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-br-[12px] rounded-tr-[12px] self-stretch" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[48px] relative size-full">
          <Picture1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-l border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
    </div>
  );
}

function Row22() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[1152px]" data-name="Row">
      <Column20 />
      <Column21 />
    </div>
  );
}

function Picture2() {
  return (
    <div className="flex-[1_0_0] h-[384px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)]" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column22() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[48px] relative size-full">
          <Picture2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-r border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
    </div>
  );
}

function Tag24() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">React</p>
    </div>
  );
}

function Tag25() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Next.js</p>
    </div>
  );
}

function Tag26() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Typescript</p>
    </div>
  );
}

function Tag27() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Nest.js</p>
    </div>
  );
}

function Tag28() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">PostgreSQL</p>
    </div>
  );
}

function Tag29() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Tailwindcss</p>
    </div>
  );
}

function Tag30() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Figma</p>
    </div>
  );
}

function Tag31() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Cypress</p>
    </div>
  );
}

function Tag32() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Storybook</p>
    </div>
  );
}

function Tag33() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Git</p>
    </div>
  );
}

function Technologies2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag24 />
      <Tag25 />
      <Tag26 />
      <Tag27 />
      <Tag28 />
      <Tag29 />
      <Tag30 />
      <Tag31 />
      <Tag32 />
      <Tag33 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon8 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton6 />
    </div>
  );
}

function Column23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-hidden relative shrink-0 text-[#111827] text-[20px] text-ellipsis w-full whitespace-nowrap">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies2 />
          <Actions4 />
        </div>
      </div>
    </div>
  );
}

function Row23() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[1152px]" data-name="Row">
      <Column22 />
      <Column23 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] relative w-full">
          <Row18 />
          <Row21 />
          <Row22 />
          <Row23 />
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Work">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Tag34() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Testimonials</p>
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag34 />
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full whitespace-pre-wrap">Nice things people have said about me:</p>
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row25 />
      <Row26 />
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser />
    </div>
  );
}

function CustomerDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - xyz.com</p>
    </div>
  );
}

function Column24() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)]" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[48px] relative size-full">
          <IconAvatar />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content] whitespace-pre-wrap">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
          <CustomerDetails />
        </div>
      </div>
    </div>
  );
}

function IconUser1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar1() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser1 />
    </div>
  );
}

function CustomerDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - abc.com</p>
    </div>
  );
}

function Column25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)]" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[48px] relative size-full">
          <IconAvatar1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content] whitespace-pre-wrap">“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”</p>
          <CustomerDetails1 />
        </div>
      </div>
    </div>
  );
}

function IconUser2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar2() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser2 />
    </div>
  );
}

function CustomerDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Freelancer</p>
    </div>
  );
}

function Column26() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)]" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[48px] relative size-full">
          <IconAvatar2 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#4b5563] text-[16px] text-ellipsis w-[min-content] whitespace-pre-wrap">“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”</p>
          <CustomerDetails2 />
        </div>
      </div>
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex flex-wrap gap-[48px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Column24 />
      <Column25 />
      <Column26 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] relative w-full">
          <Row24 />
          <Row27 />
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Testimonials">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Tag35() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">Get in touch</p>
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag35 />
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full whitespace-pre-wrap">{`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</p>
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row29 />
      <Row30 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3cc2c7f0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4344e00} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p12e33300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p328b4700} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon10 />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Email">
      <Icon9 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#111827] text-[36px] text-center tracking-[-0.72px]">reachsagarshah@gmail.com</p>
      <IconButton7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p10773cc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p12e33300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p328b4700} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon12 />
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Phone">
      <Icon11 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#111827] text-[36px] text-center tracking-[-0.72px]">+91 8980500565</p>
      <IconButton8 />
    </div>
  );
}

function Column27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Column">
      <Email />
      <Phone />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon15 />
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton9 />
      <IconButton10 />
      <IconButton11 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Actions">
      <Links1 />
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Social">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px]">You may also find me on these platforms!</p>
      <Actions5 />
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Social />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] relative w-full">
          <Row28 />
          <Column27 />
          <Row31 />
        </div>
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact me">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1061)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28a90200} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_1061">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterNote() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Footer Note">
      <Icon16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[0px] whitespace-nowrap">
        <p className="text-[14px]">
          <span className="leading-[20px] text-[#4b5563]">{`2023 | `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#4b5563] underline" href="https://www.figma.com/@shahsagarm">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px]" href="https://www.figma.com/@shahsagarm">
              Designed
            </span>
          </a>
          <span className="leading-[20px] text-[#4b5563]">{` and `}</span>
          <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#4b5563] underline" href="https://github.com/shahsagarm/sagarshah.dev">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px]" href="https://github.com/shahsagarm/sagarshah.dev">
              coded
            </span>
          </a>
          <span className="leading-[20px] text-[#4b5563]">{` with `}</span>
          <span className="leading-[20px] text-[#ef4444]">❤</span>
          <span className="leading-[20px] text-[#4b5563]">️️ by Sagar Shah</span>
        </p>
      </div>
    </div>
  );
}

function Row33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <FooterNote />
    </div>
  );
}

function Row32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row33 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative w-full">
          <Row32 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[24px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

export default function HomeDesktopLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home / Desktop / Light">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}