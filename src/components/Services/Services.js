import { orangeThemeDark as theme } from "../../utils/theme";
import "./Services.css";
import SingleService from "./SingleService/SingleService";
import {
  Code,
  VideoCall,
  TabletAndroid,
  Newspaper,
  Camera,
  MailOutline,
  Book,
} from "@mui/icons-material";

function Services() {
  const servicesData = [
    {
      id: 2,
      title: "Content Writing",
      icon: <Book />,
    },
    {
      id: 3,
      title: "Email Marketing",
      icon: <MailOutline />,
    },
    {
      id: 6,
      title: "Web Design",
      icon: <Code />,
    },
    {
      id: 7,
      title: "Photography",
      icon: <Camera />,
    },
    {
      id: 9,
      title: "Video Editing",
      icon: <VideoCall />,
    },
    {
      id: 11,
      title: "Ebook Writing",
      icon: <TabletAndroid />,
    },
    {
      id: 13,
      title: "Blog Posting",
      icon: <Newspaper />,
    },
  ];
  return (
    <>
      <div
        className="services"
        id="services"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="services-header">
          <h1 style={{ color: theme.primary }}>Services</h1>
        </div>
        <div className="services-body">
          <p style={{ color: theme.tertiary80 }}>
            These are some of the services I offer. Reach out to me if I can
            help you with any!
          </p>
          <div className="services-bodycontainer">
            {servicesData.map((services) => (
              <SingleService
                key={services.id}
                id={services.id}
                title={services.title}
                icon={services.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
