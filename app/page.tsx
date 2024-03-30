import ScrollUp from "@/components/Common/ScrollUp";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forecasting Political Violence",
  description: "This is Home for FPV Project",
  // other metadata
};

// Dynamically import components that are not critical for the initial page load.
const NonCriticalComponent = dynamic(() => import('@/components/Common/NonCriticalComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering for this component if it's client-specific.
});

export default function Home() {
  return (
    <>
    <Head>
        <title>Forecasting Political Violence</title>
        <meta name="description" content="This is Home for FPV Project" />
        <meta name="theme-color" content="#317EFB"/>
        {/* Ensure viewport meta tag is included for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ScrollUp />
    <main>
      <meta name="theme-color" content="#317EFB"/>
      <h1 className={`text-2xl font-semibold`}> OMSCS C4G Project: Forecasting Political Violence</h1>
      <br></br>
      <p className={`text-sm opacity-75`}> Test our project out <a href="https://fpv-dashboard-cwaa.onrender.com/"> here</a>.
      </p>
      <p className={`text-sm opacity-75`}>Give us feedback <a href="https://forms.gle/QxXdmpbExYP8qeqQA">here</a>.</p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}> Partner Objectives </h2>
      <p className={`text-sm opacity-75`}> An integrated approach that seamlessly integrates heterogeneous forecasting outputs to offer a novel resource for uncovering new insights and patterns in political violence, so researchers, policymakers, and the international community can address and mitigate the impacts of political violence effectively on a global scale. </p>
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
          <li>Best Practices: 100</li>
          <li>SEO: 100</li>
        </ul>
      </p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}>Links </h2>
      <p className={`text-sm opacity-75`}>
        <ul>
          <li><a href="https://docs.google.com/presentation/d/1GnXnN-izJeJhO-etczadnbdDqqk_KZoH/edit?usp=sharing&ouid=109814695707801926532&rtpof=true&sd=true">Slide Link</a></li>
          <li><a href="https://colab.research.google.com/drive/1h_Rz7wkZC0svWDwmME-BKu7ee98F8FhK?usp=sharing#scrollTo=qQRqbCAhYle3">MVP Link</a></li>
          <li><a href="https://colab.research.google.com/drive/1h_Rz7wkZC0svWDwmME-BKu7ee98F8FhK?usp=sharing#scrollTo=WJyw1lVeKihy">Google Colab Link</a></li>
        </ul>
      </p>
      <br></br>
      <h2 className={`text-1xl font-semibold`}>Weekly Project Updates</h2>

      <h3 className={`ßfont-semibold`}>Week of 1st April 2024</h3>
      <p className={`text-sm opacity-75`}>
        The field evaluation instructions will be prepared, the team will meet the stakeholders for an evaluation of the dashboard where a set of tasks will be given to them. Their evaluation will be recorded as well as the feedback they give needed for P7-FieldEvaluation. The feedback will be incorporated to further improve the MVP.
      </p>
      <br></br>
      <h3 className={`ßfont-semibold`}>Week of 24th March 2024</h3>
      <p className={`text-sm opacity-75`}>
        The team focused on resolving the main loading error of our MVP, and incorporating feedback we received from our peer evaluations. The team met with UNDP and the TA to receive further feedback on our MVP in order to prepare for the demo assignment.
      </p>
      <br></br>
      <h3 className={`ßfont-semibold`}>Week of 11th March 2024</h3>
      <p className={`text-sm opacity-75`}>
        There are two main tasks which will be worked upon in parallel: 1) Conducting an evaluation by selecting specific political violence events i.e. Gaza/u=Ukraine to test the hypothesis: does having an ensemble forecast make sense as compared to individual forecasts? Then a list of all possible ensemble forecast methodologies will be created and discussed. 2) Dashboard Development in Plotly Dash where the initial tasks include the setup up a basic authentication, deployment on Render.com, and a basic web app implementation with the current data we have.
      </p>
      <br></br>
      <h3 className={`ßfont-semibold`}>Week of 4th March 2024</h3>
      <p className={`text-sm opacity-75`}>
      The case evaluation will be finalized and the first MVP in Plotly Dash will be  finalized. Moreover, a Google Form will be created for the peer evaluation and the link will be added to our website. We will also deploy our Plotly Dash webpage with authentication (where details will be provided on our website for students to access). 
      </p>
      <br></br>
      <h3 className={`ßfont-semibold`}>What We've Done So Far...</h3>
      <p className={`text-sm opacity-75`}>The team researched the 3 existing forecasting tools (ACLED CAST, ViEWS, and Conflict Forecast) and the corresponding input datasets (ACLED and UCDP) to understand how each system works i.e. temporal, spatial, thresholding, forecast output etc. After this an MVP was developed in a Google Colab environment that downloads forecasting data from the three tools via their API, performs spatial/temporal transformations, after which an ensemble forecast is made via ranking and normalization. This ensemble forecast is then visualized on a map where the user can select any country and view the upcoming 3 month forecasts (Feb, March, April 2024).</p>
      <NonCriticalComponent />
      </main>
      </>
  );
}
