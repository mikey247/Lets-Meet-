import { useNavigate } from "react-router-dom";

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

const NewMeetUps = () => {
  const navigate = useNavigate();

  function addMeetUpHandler(meetUpFormData) {
    fetch("https://meetup-app-9a5a2-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetUpFormData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
};

export default NewMeetUps;
