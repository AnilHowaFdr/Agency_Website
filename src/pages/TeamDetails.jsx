import Career from "../components/teamDetails/Career";
import Experience from "../components/teamDetails/Experience";
import TeamPersonDetail from "../components/teamDetails/TeamPersonDetail";
import PageBanner from "../components/utilities/PageBanner";

const TeamDetails = () => {
  return (
    <>
      <PageBanner title="Team Details" />
      <TeamPersonDetail />
      <Experience />
      <Career />
    </>
  );
};

export default TeamDetails;
