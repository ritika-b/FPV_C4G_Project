import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNDP FPV Project",
  description: "This is Home for UNDP FPV Project",
  // other metadata
};

export default function Home() {
  return (
    <>
    <ScrollUp />
    <main>
      <meta name="theme-color" content="#317EFB"/>
      <h1 className={`text-2xl font-semibold`}>UNDP Forecasting Political Violence Page</h1>
      <br></br>
      <h2 className={`text-1xl font-semibold`}> Partner Objectives </h2>
      <p className={`text-sm opacity-75`}> An integrated approach that seamlessly integrates heterogeneous forecasting outputs to offer a novel resource for uncovering new insights and patterns in political violence, so researchers, policymakers, and the international community can address and mitigate the impacts of political violence effectively. </p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}>Goals</h2>
      <p className={`text-sm opacity-75`}>The project aims to tackle the challenge of consolidating diverse conflict forecasting outputs from three well-established sources: ACLED, VIEWS, and Conflict Forecast. The primary objective is to create an analytical engine that utilizes advanced integration metrics and employs various techniques, such as statistical and machine learning methods. The goal is to synthesize the data from these sources into a unified and simplified model, yielding a more accurate and simpler to understand forecast of political violence. </p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}>Team Members</h2>
      <p className={`text-sm opacity-75`}>
        <ul>
          <li>Zainab Akhtar: Project lead, GIS lead, Data Science and Analysis </li>
          <li>Raj Srivastava: Data Analysis, Data Visualization, Machine Learning  </li>
          <li>Austin Walker: Data Analysis, GIS sub-lead </li>
          <li>Ritika Bharati: Data Analysis/Engineering, Machine Learning, Web Development</li>
        </ul>
      </p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}>Lighthouse Metrics</h2>
      <p className={`text-sm opacity-75`}>
        <ul>
          <li>Performance: 100 </li>
          <li>Accessibility: 100 </li>
          <li>Best Practices: 93</li>
          <li>SEO: 100</li>
        </ul>
      </p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}>Slides</h2>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQeR7UUMWodX3utr2l_Wwuy2mqfiFFxHri0n-sYI9foXX6alNOLmRWpU3F3M4FGxQ/embed?start=false&loop=true&delayms=60000" frameBorder="0" width="650" height="325" allowfullscreen="false" mozallowfullscreen="false" webkitallowfullscreen="false"></iframe>
      </main>
      </>
  );
}
