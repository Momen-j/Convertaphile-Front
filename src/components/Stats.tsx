import { useEffect, useState } from "react";
import { BsDatabaseFillDown } from "react-icons/bs";
import { SiConvertio } from "react-icons/si";

interface ConversionStats {
  totalFiles: number;
  totalSizeMB: number;
  totalDownloads: number;
  message: string;
}

const Stats = () => {
  const [stats, setStats] = useState<ConversionStats>({
    totalFiles: 0,
    totalSizeMB: 0,
    totalDownloads: 0,
    message: "",
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://convertaphile-production.up.railway.app/stats",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data: ConversionStats = await response.json();
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats:", err);
        // Keep displaying the default/last known stats
      }
    };

    fetchStats();

    // Set up interval to fetch every 1 second
    const interval = setInterval(fetchStats, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const formatSize = (sizeMB: number): string => {
    if (sizeMB >= 1000) {
      return `${(sizeMB / 1000).toFixed(1)} GB`;
    }
    return `${sizeMB.toFixed(1)} MB`;
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  // if stats is empty/doesn't exist dont show
  if (!stats) {
    return null; // Hide stats if there's an error
  }

  return (
    <div className="flex justify-center items-center py-5 my-3">
      <div className="flex items-center text-2xl px-6 py-3 bg-gray-500 backdrop-blur-md rounded-xl text-app-text font-medium transition-all duration-300 md:flex-row flex-col md:gap-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl">
            <SiConvertio></SiConvertio>
          </span>
          <span className="whitespace-nowrap">
            {formatNumber(stats.totalFiles)} Files Converted
          </span>
        </div>
        <div className="text-app-text font-light hidden md:block">•</div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">
            <BsDatabaseFillDown />
          </span>
          <span className="whitespace-nowrap">
            {formatSize(stats.totalSizeMB)} Processed
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
