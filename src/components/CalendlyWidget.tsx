
import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
  onEventScheduled?: () => void;
}

// Define a custom type for Calendly's event data
interface CalendlyEventData {
  event: string;
  [key: string]: any;
}

const CalendlyWidget = ({ url, onEventScheduled }: CalendlyWidgetProps) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Add event listener for when an event is scheduled
    const handleEventScheduled = (e: MessageEvent<CalendlyEventData>) => {
      if (e.data?.event === "calendly.event_scheduled") {
        console.log("Calendly event scheduled!");
        onEventScheduled && onEventScheduled();
      }
    };

    window.addEventListener("message", handleEventScheduled);

    return () => {
      // Clean up script and event listener
      document.body.removeChild(script);
      window.removeEventListener("message", handleEventScheduled);
    };
  }, [onEventScheduled]);

  return (
    <div className="calendly-inline-widget w-full min-h-[650px] md:min-h-[700px]" data-url={url}></div>
  );
};

export default CalendlyWidget;
