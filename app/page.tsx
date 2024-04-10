import Settings from "@/components/ui/Settings";
import WebCam from "@/components/ui/WebCam";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div>
        {/* Left Side - Webcam & Canvas */}
        <WebCam />
      </div>
    </div>
  );
};

export default HomePage;
