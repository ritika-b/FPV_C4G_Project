import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>UNDP Forecasting Political Violence Page</h1>

      <h2 className={`mb-3 text-2xl font-semibold`}> Partner Objectives </h2>
      <p className={`m-0 text-sm opacity-50`}> An integrated approach that seamlessly integrates heterogeneous forecasting outputs to offer a novel resource for uncovering new insights and patterns in political violence, so researchers, policymakers, and the international community can address and mitigate the impacts of political violence effectively. </p>

      <h2 className={`mb-3 text-2xl font-semibold`}>Goals</h2>
      <p className={`m-0 text-sm opacity-50`}>The project aims to tackle the challenge of consolidating diverse conflict forecasting outputs from three well-established sources: ACLED, VIEWS, and Conflict Forecast. The primary objective is to create an analytical engine that utilizes advanced integration metrics and employs various techniques, such as statistical and machine learning methods. The goal is to synthesize the data from these sources into a unified and simplified model, yielding a more accurate and simpler to understand forecast of political violence. </p>

      <h2 className={`mb-3 text-2xl font-semibold`}>Team Members</h2>
      <p className={`m-0 text-sm opacity-50`}>
        <ul>
          <li>Zainab Akhtar: Took responsibility of understanding the ACLED CAST forecasting system by conducting in-depth research via website, research paper, YouTube videos and manually downloading data. I was able to identify the different aspects i.e spatial/temporal needed and brainstormed some ideas to move forward with metric creation. </li>
          <li>Raj Srivastava: Took the Conflict Forecast forecasting system, conducted in-depth research, identified the pros/cons of the dataset in terms of time and geographical context. </li>
          <li>Austin Walker: Evaluated the ViEWS (Violence & Impacts Early Warning System) forecasting system, including an in depth look at several white papers and presentations explaining what criteria the ViEWS forecast considers, how the ViEWS forecast manipulates data, and what data is returned by the ViEWS forecast. Also, evaluated sample outputs from the ViEWS forecast to see how data is organize and identified the ViEWS API which can/will be used later in the project. </li>
          <li>Ritika Bharati: Utilized Vercel and Github, to setup the team webpage which can be found here: https://undp-fpv.vercel.app/</li>
        </ul>
      </p>

      <h2 className={`mb-3 text-2xl font-semibold`}>Lighthouse Metrics</h2>
      <p className={`m-0 text-sm opacity-50`}>
        <ul>
          <li>Performance: 100 </li>
          <li>Accessibility: 100 </li>
          <li>Best Practices: 93</li>
          <li>SEO: 100</li>
        </ul>
      </p>

    </main>
  );
}
