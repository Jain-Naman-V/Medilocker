import PinataClient from '@pinata/sdk'

const pinata = new PinataClient(
  process.env.PINATA_API_KEY!,
  process.env.PINATA_API_SECRET!
)

export { pinata } 