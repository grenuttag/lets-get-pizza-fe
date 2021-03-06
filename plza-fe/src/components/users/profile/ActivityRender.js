import React from "react";
import EventsActivity from "./EventsActivity";
import ReviewActivity from "./ReviewActivity";

export default function ActivityRender(props) {
  return (
    <div style={{ width: "800px" }}>
      {props.activity.map((evt) => {
        if (evt.start_time) {
          return <EventsActivity user={props.user} evt={evt} />;
        } else if (evt.rating) {
          return <ReviewActivity user={props.user} evt={evt} />;
        }
      })}
    </div>
  );
}
