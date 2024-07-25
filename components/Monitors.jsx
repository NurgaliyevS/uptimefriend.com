"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Monitors() {
  const { data: session } = useSession();
  const [monitors, setMonitors] = useState([]);
  const [selectedMonitors, setSelectedMonitors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchMonitors();
  }, []);

  const fetchMonitors = async () => {
    if (session) {
      try {
        const email = session.user.email;
        const response = await axios.get(`/api/core/monitors?email=${email}`);
        if (response.data?.success && response.data?.data) {
          setMonitors(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching monitors:", error);
      }
    }
  };

  const handleCheckboxChange = (monitorId) => {
    setSelectedMonitors((prev) =>
      prev.includes(monitorId)
        ? prev.filter((id) => id !== monitorId)
        : [...prev, monitorId]
    );
  };

  const handleDeleteSelected = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `/api/core/monitors?ids=${selectedMonitors.join(",")}`
      );
      if (response.data?.success) {
        setMonitors((prev) =>
          prev.filter((monitor) => !selectedMonitors.includes(monitor._id))
        );
        setSelectedMonitors([]);
        fetchMonitors();
        toast.success(
          `Successfully deleted ${response.data.data.deletedCount} monitor(s)`
        );
      } else {
        toast.error("Failed to delete selected monitors");
      }
    } catch (error) {
      console.error("Error deleting monitors:", error);
      toast.error("An error occurred while deleting monitors");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMonitor = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`/api/core/monitors?id=${id}`);
      if (!response.data?.success) {
        console.error("Error deleting monitor:", response.data?.message);
        return;
      }
      if (response.data?.success) {
        toast.success("Monitor deleted successfully");
        fetchMonitors();
      }
      setMonitors((prev) => prev.filter((monitor) => monitor._id !== id));
    } catch (error) {
      console.error("Error deleting monitor:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToMonitor = (id) => {
    router.push(`/admin/monitor/${id}`);
  };

  return (
    <>
      <Link
        href="/"
        alt="Go back"
        className="font-bold flex justify-end pr-10 pt-10"
      >
        Home
      </Link>
      <main className="container mx-auto py-10 min-h-screen m-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Monitors</h1>
          <Link href="/admin/newMonitor" className="btn btn-lg lg:btn-wide">
            New monitor
          </Link>
        </div>
        <h2 className="leading-relaxed text-lg font-medium pb-5 m-4"></h2>
        {monitors.length > 0 ? (
          <div className="space-y-4">
            {selectedMonitors.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className={`btn btn-error`}
                disabled={isLoading || selectedMonitors.length === 0}
              >
                Delete Selected
              </button>
            )}
            {monitors.map((monitor) => (
              <div key={monitor._id} className="card bg-base-100 shadow-xl">
                <div className="card-body flex flex-row items-center">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedMonitors.includes(monitor._id)}
                    onChange={() => handleCheckboxChange(monitor._id)}
                  />
                  <div className="flex-grow ml-4">
                    <h2 className="card-title text-black">
                      {monitor.url_or_ip}
                    </h2>
                    <p
                      className={"text-black"}
                    >
                      {monitor.status === "down" ? "Down" : "Up"}
                    </p>
                    <p className="text text-black">
                      {monitor.lastChecked
                        ? ` - Today at ${new Date(
                            monitor.lastChecked
                          ).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            hour12: true,
                          })}`
                        : ""}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigateToMonitor(monitor._id)}
                    >
                      Edit Details
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDeleteMonitor(monitor._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No monitors added</p>
        )}
      </main>
    </>
  );
}

export default Monitors;
