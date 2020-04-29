import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import Moment from "react-moment";
import EventUpdate from "./EventUpdate";
import API from "../../../utils/API";

const UserEvent = ({ event, setEvents, deleteEvent }) => {
  console.log(event);

  const saveEdit = (e) => {};

  return (
    <>
      <Item>
        <Item.Image src="http://place-puppy.com/250x200" />

        <Item.Content>
          <Item.Header as="a" href={`/locations/${event.location_id}/events`}>
            {event.title}
          </Item.Header>
          <Item.Description>{event.description}</Item.Description>
          <Item.Meta>
            <span className="">{event.business_name}</span>
          </Item.Meta>
          <Item.Meta>
            <span className="">{event.address}</span>
          </Item.Meta>
          <Item.Extra>
            <Label title="Event date">
              <Icon name="calendar alternate" />
              <Moment format="ddd" date={event.start_time} />
              &#44;&#xa0;&#xa0;
              <Moment format="MMMM D" date={event.start_time} />
            </Label>

            <Label title="Event time">
              <Icon name="clock" />
              <Moment format="h:mm a" date={event.start_time} />
              &mdash;
              <Moment format="h:mm a" date={event.end_time} />
            </Label>

            <Label title="Edit event">
              <Icon name="edit" />
            </Label>

            <Label
              title="Delete event"
              as="a"
              onClick={(e) => {
                e.stopPropagation();
                deleteEvent(event.id);
              }}
            >
              <Icon name="trash" />
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
      <EventUpdate />
    </>
  );
};

export default UserEvent;