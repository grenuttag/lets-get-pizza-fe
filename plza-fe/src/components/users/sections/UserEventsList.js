import React, { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";
import UserEvent from "./UserEvent";
import { curr_user } from "../../../utils/auth";
import API from "../../../utils/API";

const UserEventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get(`/events/users/${curr_user.id}`)
      .then((res) => {
        setEvents(
          res.data.sort(
            (a, b) => new Date(a.start_time) - new Date(b.start_time)
          )
        );
      })
      .catch((err) => console.log(err));
  }, [setEvents]);

  const deleteEvent = (id) => {
    API.delete(`/events/${id}`)
      .then((res) => {
        const filterDeletedEvent = events.filter((event) => event.id !== id);
        setEvents([...filterDeletedEvent]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Item.Group divided>
      {events.map((event) => (
        <UserEvent key={event.id} event={event} setEvents={setEvents} deleteEvent={deleteEvent} />
      ))}
    </Item.Group>
  );
};

export default UserEventsList;