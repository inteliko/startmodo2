
import { useScrollColor } from "@/hooks/use-scroll-color";

type DynamicBackgroundProps = {
  colorSections: {
    sectionId: string;
    backgroundColor: string;
    textColor: string;
    startPercentage: number;
    endPercentage: number;
  }[];
  children: React.ReactNode;
};

const DynamicBackground = ({ colorSections, children }: DynamicBackgroundProps) => {
  // Use the hook to control dynamic background/text colors
  useScrollColor(colorSections);

  return (
    <div className="dynamic-background min-h-screen transition-colors duration-700 ease-in-out" style={{ backgroundColor: "var(--dynamic-bg)", color: "var(--dynamic-text)" }}>
      {children}
    </div>
  );
};

export default DynamicBackground;
