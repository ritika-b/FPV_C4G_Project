import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>UNDP Forecasting Political Violence Page</h1>

      <h2 className={``mb-3 `text-2xl font-semibold`}> Partner Objectives </h2>
      <p className={`text-sm opacity-50`}> An integrated approach that seamlessly integrates heterogeneous forecasting outputs to offer a novel resource for uncovering new insights and patterns in political violence, so researchers, policymakers, and the international community can address and mitigate the impacts of political violence effectively. </p>

      <h2 className={`text-2xl font-semibold`}>Goals</h2>
      <p className={`text-sm opacity-50`}>The project aims to tackle the challenge of consolidating diverse conflict forecasting outputs from three well-established sources: ACLED, VIEWS, and Conflict Forecast. The primary objective is to create an analytical engine that utilizes advanced integration metrics and employs various techniques, such as statistical and machine learning methods. The goal is to synthesize the data from these sources into a unified and simplified model, yielding a more accurate and simpler to understand forecast of political violence. </p>

      <h2 className={`text-2xl font-semibold`}>Team Members</h2>
      <p className={`text-sm opacity-50`}>
        <ul>
          <li>Zainab Akhtar: Research and development. More information coming soon! </li>
          <li>Raj Srivastava: Research and development. More information coming soon! </li>
          <li>Austin Walker: Research and development. More information coming soon! </li>
          <li>Ritika Bharati: Research and development. More information coming soon!</li>
        </ul>
      </p>

      <h2 className={`text-2xl font-semibold`}>Lighthouse Metrics</h2>
      <p className={`text-sm opacity-50`}>
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
