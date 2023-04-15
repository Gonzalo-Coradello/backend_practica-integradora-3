import { TicketService } from "../repositories/index.js"

export const get = async (req, res) => {
    const tickets  = await TicketService.get()
    res.json({ tickets })
}

export const create = async (req, res) => {
    const ticket = req.body
    const newTicket = await TicketService.create(ticket)
    res.json({ticket: newTicket})
}