import { rest } from "msw"
import { setupServer } from "msw/lib/node"

describe('test', () => {
    it('test', () => {
        const server = setupServer(

            rest.get('https://api.weatherapi.com/v1/current.json?key=733a46e9326447cdbed24233221904&q=Toronto&aqi=no', (req, res, ctx) => {
                return res(
                    // Respond with a 200 status code
                    ctx.status(200),
                )
            }),
        )
    })
})

