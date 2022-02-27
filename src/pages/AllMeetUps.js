import MeetUpList from "../components/meetups/MeetUpList";
import { useState, useEffect } from "react";

const AllMeetUps = () => {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetUps, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsloading(true);

    fetch("https://meetup-app-9a5a2-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const meetups = [];
        for (const key in data) {
          // console.log(key);
          const meetup = {
            id: key,
            ...data[key],
          };
          console.log(meetup);

          meetups.push(meetup);
        }
        setIsloading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      <h1>All Meets</h1>
      <MeetUpList meetups={loadedMeetUps} />
    </div>
  );
};

export default AllMeetUps;
