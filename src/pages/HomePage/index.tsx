import DefaultLayout from "../../Layouts/DefaultLayout";
import BannerDashboard from "../../Views/BannerDashboard";
import BannerDashboardBottom from "../../Views/BannerDashboardBottom";
import ContentDashboard from "../../Views/ContentDashboard";
import FooterDashboard from "../../Views/FooterDashboard";
import DefaultNavbar from '../../components/Elements/DefaultNavbar/index';

const HomePage = () => {
  return (
    <DefaultLayout>
      <DefaultNavbar />
      <BannerDashboard />
      <ContentDashboard />
      <BannerDashboardBottom />
      <FooterDashboard />
    </DefaultLayout>
  );
};

export default HomePage;