import WhiteBoard from "@/components/WhiteBoard";
import Properties from "@/components/Properties";
import SideBar from "@/components/SideBar";

const Draw: React.FC = () => {
  return (
    <>
      <div className="border-b h-16" style={{ background: "#04151F" }}>
        {/* <Top /> */}
      </div>
      <div className="flex w-full" style={{ height: "93vh" }}>
        <SideBar />
        <div
          style={{
            background: "rgba(28, 37, 65, 0.5)",
            width: "67vw",
            overflow: "auto",
          }}
          className="flex justify-center "
        >
          <WhiteBoard />
        </div>
        <Properties />
      </div>
    </>
  );
};

export default Draw;
