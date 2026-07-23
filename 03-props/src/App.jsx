import Card from "./component/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <Card
          key={index}
          brandLogo={job.brandLogo}
          company={job.companyName}
          datePosted={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default App;