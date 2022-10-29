import Title from "../../components/layout/title";
import Wrapper from "../../components/UI/wrapper";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "react-tabs/style/react-tabs.css";
const Home = () => {
  return (
    <div>
      <Title title={"daily news"} />
      <Wrapper>
        <Tabs>
          <TabList>
            <Tab>All news</Tab>
            <Tab>Apple news</Tab>
            <Tab>Tesla news</Tab>
            <Tab>Business news</Tab>
            <Tab>TechCrunch news</Tab>
            <Tab>Wall Street News</Tab>
          </TabList>
          <TabPanel>
            <h2>hello</h2>
          </TabPanel>
          <TabPanel>
            <h2>there</h2>
          </TabPanel>
          <TabPanel>
            <h2>friend</h2>
          </TabPanel>
          <TabPanel>
            <h2>friend</h2>
          </TabPanel>
          <TabPanel>
            <h2>friend</h2>
          </TabPanel>
          <TabPanel>
            <h2>friend</h2>
          </TabPanel>
        </Tabs>
      </Wrapper>
    </div>
  );
};
export default Home;
