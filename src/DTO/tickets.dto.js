export default class TicketDTO {
    constructor(ticket) {
        this.id = ticket.id || this._id || null
        this.name  = ticket.name || ""
        this.description = ticket.description || ""
    } 
}