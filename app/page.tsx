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
      <p className={`text-sm opacity-75`}>Link to our project: <a href="https://undp-app.onrender.com/">Project Link</a>
        You can use these credentials to test out the tool:
        <ul>
          <li>Username: GTStudent</li>
          <li>Password: OMSCSc4g!</li>
        </ul>
      </p>
      <p className={`text-sm opacity-75`}>Give us feedback <a href="https://forms.gle/QxXdmpbExYP8qeqQA">here</a>.</p>
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
      <h2 className={`text-1xl font-semibold`}>Slides and MVP</h2>
      <p className={`text-sm opacity-75`}>
        <a href="https://docs.google.com/presentation/d/1GnXnN-izJeJhO-etczadnbdDqqk_KZoH/edit?usp=sharing&ouid=109814695707801926532&rtpof=true&sd=true">Slide Link</a>
        <br></br>
        <a href="https://colab.research.google.com/drive/1h_Rz7wkZC0svWDwmME-BKu7ee98F8FhK?usp=sharing#scrollTo=qQRqbCAhYle3">MVP Link</a>
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
      <h2 className={`text-1xl font-semibold`}>Weekly Updates</h2>
      <h3 className={`ßfont-semibold`}>Week of 4th March 2024</h3>
      <p className={`text-sm opacity-75`}>
        There are two main tasks which will be worked upon in parallel: 1) Conducting an evaluation by selecting specific events i.e. Gaza/u=Ukraine to test the hypothesis: does having an ensemble forecast make sense as compared to individual forecasts? Then a list of all possible ensemble forecast methodologies will be created and discussed with UNDP. 2) Dashboard Development in Plotly Dash where the initial tasks include the setup up a basic authentication, deployment on Render.com, and a basic web app implementation with the current data we have.
      </p>
      <br></br>
      <h3 className={`ßfont-semibold`}>What We've Done So Far...</h3>
      <p className={`text-sm opacity-75`}>The team researched the 3 existing forecasting tools (ACLED CAST, ViEWS, and Conflict Forecast) and the corresponding input datasets (ACLED and UCDP) to understand how each system works i.e. temporal, spatial, thresholding, forecast output etc. After this an MVP was developed in a Google Colab environment that downloads forecasting data from the three tools via their API, performs spatial/temporal transformations, after which an ensemble forecast is made via ranking and normalization. This ensemble forecast is then visualized on a map where the user can select any country and view the upcoming 3 month forecasts (Feb, March, April 2024).</p>
      </main>
      </>
  );
}
