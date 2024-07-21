import FullRoomTicket from './FullRoomTicket';
import HorizontalRoomTicket from './HorizontalRoomTicket';
import LocationTicket from './LocationTicket';

function Ticket() {
  return null;
}

Ticket.HorizontalRoom = HorizontalRoomTicket;
Ticket.FullRoom = FullRoomTicket;
Ticket.Location = LocationTicket;

export { Ticket };
