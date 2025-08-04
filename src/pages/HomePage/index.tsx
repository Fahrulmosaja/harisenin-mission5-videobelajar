import DefaultLayout from "../../Layouts/DefaultLayout";
import BannerDashboard from "../../Views/BannerDashboard";
import ContentDashboard from "../../Views/ContentDashboard";
import FooterDashboard from "../../Views/FooterDashboard";
import DefaultNavbar from '../../components/Elements/DefaultNavbar/index';

const HomePage = () => {
  return (
    <DefaultLayout>
      <DefaultNavbar />
      <BannerDashboard />
      <ContentDashboard />
      <FooterDashboard />
    </DefaultLayout>
  );
};

export default HomePage;